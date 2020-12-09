const Spinnies = require("spinnies");
const assert = require("assert");
const logger = require("../logger")({ prefix: "CliUtils" });
const { tos } = require("../tos");

const frames = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

const spinner = { interval: 300, frames };

exports.runAsyncCommand = async ({ text, command }) => {
  console.log(`${text}`);
  assert(text);
  assert(command);
  const spinnies = new Spinnies({ spinner });
  logger.debug(`runAsyncCommand: ${JSON.stringify({ text })}`);
  const spinnerList = [];
  const spinnerMap = new Map();

  const onStateChange = ({
    context,
    previousState,
    nextState,
    error = {},
    indent,
    ...other
  }) => {
    logger.info(
      `onStateChange: ${JSON.stringify(
        {
          context,
          previousState,
          nextState,
          other,
        },
        null,
        4
      )}`
    );
    assert(context, "onStateChange: missing context");
    const onDoneDefault = ({ state, spinnerMap }) => {
      logger.debug(
        `onDoneDefault: uri: ${uri} `,
        JSON.stringify(spinnies.spinners.mock)
      );

      spinnies.update(uri, {
        text: displayText(state),
        status: "succeed",
      });

      spinnerMap.delete(uri);
    };

    const onErrorDefault = ({ spinnerMap }) => {
      logger.debug(`onErrorDefault: delete uri: ${uri} `);
      spinnerMap.delete(uri);
    };

    const {
      uri,
      displayText,
      onDone = onDoneDefault,
      onError = onErrorDefault,
      hide = false,
    } = context;

    assert(displayText, "onStateChange: missing context displayText");
    assert(uri, "onStateChange: missing context uri");

    if (process.env.CONTINUOUS_INTEGRATION) {
      return;
    }
    switch (nextState) {
      case "WAITING": {
        logger.debug(`spinnies: create uri: ${uri}`);
        spinnerList.push(uri);
        assert(
          !spinnies.pick(uri),
          `${uri} already created, list: ${tos(spinnerList)}`
        );

        spinnerMap.set(uri, { state: context.state });
        if (!hide) {
          spinnies.add(uri, {
            text: displayText(context.state),
            indent,
            color: "yellow",
          });
        }
        break;
      }
      case "RUNNING": {
        logger.debug(`spinnies RUNNING uri: ${uri}`);
        const spinner = spinnerMap.get(uri);
        if (!spinner) {
          assert(false, `event RUNNING but ${uri} was not created`);
        }

        if (!hide) {
          const spinny = spinnies.pick(uri);

          assert(
            spinny,
            `spinnies create in running state: ${uri}, spinnerList: ${spinnerList.join(
              "\n"
            )}`
          );
          spinnies.update(uri, {
            text: displayText(spinner.state),
            color: "greenBright",
            status: "spinning",
          });
        }
        break;
      }
      case "DONE": {
        logger.debug(`spinnies DONE uri: ${uri} `);

        if (!hide) {
          const spinny = spinnies.pick(uri);
          assert(spinny, `DONE event: ${uri} was not created`);
        }
        const spinner = spinnerMap.get(uri);
        if (!spinner) {
          logger.error(
            `event DONE but ${uri} was not created or is already deleted`
          );
          return;
        }
        onDone({ state: spinner.state, spinnerMap, spinnies });
        break;
      }
      case "ERROR": {
        logger.error(`spinnies: uri: ${uri} ERROR: ${tos(error)}`);

        if (!hide) {
          const spinny = spinnies.pick(uri);
          assert(
            spinny,
            `ERROR event: ${uri} was not created, error: ${error}`
          );
          assert(error, `should have set the error, id: ${uri}`);
          const spinner = spinnerMap.get(uri);
          if (!spinner) {
            logger.error(`spinnies ERROR: uri: ${uri}, error: ${tos(error)}`);
            return;
          }

          const textWithError = `${displayText(spinner.state).padEnd(
            30,
            " "
          )} ${error.Message || ""} ${error.message || ""}`;
          logger.error(textWithError);

          spinnies.fail(uri, { text: textWithError });
        }
        onError({ state: spinner.state, spinnerMap, spinnies });

        break;
      }
      default:
        assert(false, `unknown state ${nextState}`);
    }
  };

  try {
    const result = await command({ onStateChange });
    logger.debug(`runAsyncCommand end of : ${text}`);
    spinnies.stopAll();
    return result;
  } catch (error) {
    spinnies.stopAll();
    logger.debug(`runAsyncCommand: error for command: ${text}`);
    logger.debug(error);

    throw error;
  }
};
