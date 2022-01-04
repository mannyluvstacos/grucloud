"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1445],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return m}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=d;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},84830:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var r=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],s={id:"GalleryApplicationVersion",title:"GalleryApplicationVersion"},p=void 0,l={unversionedId:"azure/resources/Compute/GalleryApplicationVersion",id:"azure/resources/Compute/GalleryApplicationVersion",isDocsHomePage:!1,title:"GalleryApplicationVersion",description:"Provides a GalleryApplicationVersion from the Compute group",source:"@site/docs/azure/resources/Compute/GalleryApplicationVersion.md",sourceDirName:"azure/resources/Compute",slug:"/azure/resources/Compute/GalleryApplicationVersion",permalink:"/docs/azure/resources/Compute/GalleryApplicationVersion",tags:[],version:"current",frontMatter:{id:"GalleryApplicationVersion",title:"GalleryApplicationVersion"},sidebar:"docs",previous:{title:"GalleryApplication",permalink:"/docs/azure/resources/Compute/GalleryApplication"},next:{title:"GalleryImage",permalink:"/docs/azure/resources/Compute/GalleryImage"}},c=[{value:"Examples",id:"examples",children:[{value:"Create or update a simple gallery Application Version.",id:"create-or-update-a-simple-gallery-application-version",children:[],level:3}],level:2},{value:"Dependencies",id:"dependencies",children:[],level:2},{value:"Swagger Schema",id:"swagger-schema",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],u={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Provides a ",(0,a.kt)("strong",{parentName:"p"},"GalleryApplicationVersion")," from the ",(0,a.kt)("strong",{parentName:"p"},"Compute")," group"),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h3",{id:"create-or-update-a-simple-gallery-application-version"},"Create or update a simple gallery Application Version."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'provider.Compute.makeGalleryApplicationVersion({\n  name: "myGalleryApplicationVersion",\n  properties: () => ({\n    location: "West US",\n    properties: {\n      publishingProfile: {\n        source: {\n          mediaLink:\n            "https://mystorageaccount.blob.core.windows.net/mycontainer/package.zip?{sasKey}",\n        },\n        manageActions: {\n          install:\n            \'powershell -command "Expand-Archive -Path package.zip -DestinationPath C:\\\\package"\',\n          remove: "del C:\\\\package ",\n        },\n        targetRegions: [\n          {\n            name: "West US",\n            regionalReplicaCount: 1,\n            storageAccountType: "Standard_LRS",\n          },\n        ],\n        replicaCount: 1,\n        endOfLifeDate: "2019-07-01T07:00:00Z",\n        storageAccountType: "Standard_LRS",\n      },\n    },\n  }),\n  dependencies: ({ resources }) => ({\n    resourceGroup: resources.Resources.ResourceGroup["myResourceGroup"],\n    gallery: resources.Compute.Gallery["myGallery"],\n    galleryApplication:\n      resources.Compute.GalleryApplication["myGalleryApplication"],\n  }),\n});\n\n')),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Resources/ResourceGroup"},"ResourceGroup")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Compute/Gallery"},"Gallery")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/azure/resources/Compute/GalleryApplication"},"GalleryApplication"))),(0,a.kt)("h2",{id:"swagger-schema"},"Swagger Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  properties: {\n    properties: {\n      'x-ms-client-flatten': true,\n      properties: {\n        publishingProfile: {\n          properties: {\n            source: {\n              properties: {\n                mediaLink: {\n                  type: 'string',\n                  description: 'Required. The mediaLink of the artifact, must be a readable storage page blob.'\n                },\n                defaultConfigurationLink: {\n                  type: 'string',\n                  description: 'Optional. The defaultConfigurationLink of the artifact, must be a readable storage page blob.'\n                }\n              },\n              required: [ 'mediaLink' ],\n              description: 'The source image from which the Image Version is going to be created.'\n            },\n            manageActions: {\n              properties: {\n                install: {\n                  type: 'string',\n                  description: 'Required. The path and arguments to install the gallery application. This is limited to 4096 characters.'\n                },\n                remove: {\n                  type: 'string',\n                  description: 'Required. The path and arguments to remove the gallery application. This is limited to 4096 characters.'\n                },\n                update: {\n                  type: 'string',\n                  description: 'Optional. The path and arguments to update the gallery application. If not present, then update operation will invoke remove command on the previous version and install command on the current version of the gallery application. This is limited to 4096 characters.'\n                }\n              },\n              required: [ 'install', 'remove' ]\n            },\n            enableHealthCheck: {\n              type: 'boolean',\n              description: 'Optional. Whether or not this application reports health.'\n            }\n          },\n          allOf: [\n            {\n              properties: {\n                targetRegions: {\n                  type: 'array',\n                  items: {\n                    properties: {\n                      name: [Object],\n                      regionalReplicaCount: [Object],\n                      storageAccountType: [Object],\n                      encryption: [Object]\n                    },\n                    required: [ 'name' ],\n                    description: 'Describes the target region information.'\n                  },\n                  description: 'The target regions where the Image Version is going to be replicated to. This property is updatable.'\n                },\n                replicaCount: {\n                  type: 'integer',\n                  format: 'int32',\n                  description: 'The number of replicas of the Image Version to be created per region. This property would take effect for a region when regionalReplicaCount is not specified. This property is updatable.'\n                },\n                excludeFromLatest: {\n                  type: 'boolean',\n                  description: \"If set to true, Virtual Machines deployed from the latest version of the Image Definition won't use this Image Version.\"\n                },\n                publishedDate: {\n                  readOnly: true,\n                  type: 'string',\n                  format: 'date-time',\n                  description: 'The timestamp for when the gallery image version is published.'\n                },\n                endOfLifeDate: {\n                  type: 'string',\n                  format: 'date-time',\n                  description: 'The end of life date of the gallery image version. This property can be used for decommissioning purposes. This property is updatable.'\n                },\n                storageAccountType: {\n                  type: 'string',\n                  description: 'Specifies the storage account type to be used to store the image. This property is not updatable.',\n                  enum: [ 'Standard_LRS', 'Standard_ZRS', 'Premium_LRS' ],\n                  'x-ms-enum': { name: 'StorageAccountType', modelAsString: true }\n                },\n                replicationMode: {\n                  type: 'string',\n                  description: 'Optional parameter which specifies the mode to be used for replication. This property is not updatable.',\n                  enum: [ 'Full', 'Shallow' ],\n                  'x-ms-enum': { name: 'ReplicationMode', modelAsString: true }\n                }\n              },\n              description: 'Describes the basic gallery artifact publishing profile.'\n            }\n          ],\n          required: [ 'source' ],\n          description: 'The publishing profile of a gallery image version.'\n        },\n        provisioningState: {\n          readOnly: true,\n          type: 'string',\n          title: 'The current state of the gallery Application Version.',\n          description: 'The provisioning state, which only appears in the response.',\n          enum: [\n            'Creating',\n            'Updating',\n            'Failed',\n            'Succeeded',\n            'Deleting',\n            'Migrating'\n          ]\n        },\n        replicationStatus: {\n          readOnly: true,\n          properties: {\n            aggregatedState: {\n              readOnly: true,\n              type: 'string',\n              description: 'This is the aggregated replication status based on all the regional replication status flags.',\n              enum: [ 'Unknown', 'InProgress', 'Completed', 'Failed' ],\n              'x-ms-enum': {\n                name: 'AggregatedReplicationState',\n                modelAsString: true\n              }\n            },\n            summary: {\n              readOnly: true,\n              type: 'array',\n              items: {\n                properties: {\n                  region: {\n                    readOnly: true,\n                    type: 'string',\n                    description: 'The region to which the gallery image version is being replicated to.'\n                  },\n                  state: {\n                    readOnly: true,\n                    type: 'string',\n                    description: 'This is the regional replication state.',\n                    enum: [ 'Unknown', 'Replicating', 'Completed', 'Failed' ],\n                    'x-ms-enum': { name: 'ReplicationState', modelAsString: true }\n                  },\n                  details: {\n                    readOnly: true,\n                    type: 'string',\n                    description: 'The details of the replication status.'\n                  },\n                  progress: {\n                    readOnly: true,\n                    type: 'integer',\n                    format: 'int32',\n                    description: 'It indicates progress of the replication job.'\n                  }\n                },\n                description: 'This is the regional replication status.'\n              },\n              description: 'This is a summary of replication status for each region.'\n            }\n          },\n          description: 'This is the replication status of the gallery image version.'\n        }\n      },\n      required: [ 'publishingProfile' ],\n      description: 'Describes the properties of a gallery image version.'\n    }\n  },\n  allOf: [\n    {\n      description: 'The Resource model definition.',\n      properties: {\n        id: { readOnly: true, type: 'string', description: 'Resource Id' },\n        name: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource name'\n        },\n        type: {\n          readOnly: true,\n          type: 'string',\n          description: 'Resource type'\n        },\n        location: { type: 'string', description: 'Resource location' },\n        tags: {\n          type: 'object',\n          additionalProperties: { type: 'string' },\n          description: 'Resource tags'\n        }\n      },\n      required: [ 'location' ],\n      'x-ms-azure-resource': true\n    }\n  ],\n  description: 'Specifies information about the gallery Application Version that you want to create or update.'\n}\n")),(0,a.kt)("h2",{id:"misc"},"Misc"),(0,a.kt)("p",null,"The resource version is ",(0,a.kt)("inlineCode",{parentName:"p"},"2021-07-01"),"."),(0,a.kt)("p",null,"The Swagger schema used to generate this documentation can be found ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Azure/azure-rest-api-specs/tree/main/specification/compute/resource-manager/Microsoft.Compute/stable/2021-07-01/gallery.json"},"here"),"."))}d.isMDXComponent=!0}}]);