(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{423:function(t,s,a){"use strict";a.r(s);var e=a(62),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"wochit-ai-api-documentation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wochit-ai-api-documentation"}},[t._v("#")]),t._v(" Wochit AI API Documentation")]),t._v(" "),a("p",[t._v("The Wochit AI API allows you to generate videos or drafts based on a prompt, images, and a description of the desired outcome.")]),t._v(" "),a("h3",{attrs:{id:"api-endpoints"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-endpoints"}},[t._v("#")]),t._v(" API Endpoints")]),t._v(" "),a("p",[t._v("There are two endpoints available for generating videos or drafts:")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("To create a draft, make a POST request to the following URL:")]),t._v(" "),a("ul",[a("li",[t._v("Endpoint: "),a("code",[t._v("https://api.wochit.com/v1/ai/drafts")])])])]),t._v(" "),a("li",[a("p",[t._v("To create a video, make a POST request to the following URL:")]),t._v(" "),a("ul",[a("li",[t._v("Endpoint: "),a("code",[t._v("https://api.wochit.com/v1/ai/videos")])])])])]),t._v(" "),a("h4",{attrs:{id:"example"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example"}},[t._v("#")]),t._v(" Example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" --request POST "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://api.wochit.com/v1/ai/videos'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization: Bearer <user token>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'client-id: <client id>'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--header "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type: application/json'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--data "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"prompt"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Please note that to access these APIs, you need your "),a("em",[t._v("Client ID")]),t._v(" and a "),a("em",[t._v("user token")]),t._v(". You can find the Client ID in your "),a("a",{attrs:{href:"https://admin.wochit.com/developers/integration-setup",target:"_blank",rel:"noopener noreferrer"}},[t._v("Developer Tools"),a("OutboundLink")],1),t._v(". The user token is a unique key "),a("RouterLink",{attrs:{to:"/authentication.html#user-authentication"}},[t._v("generated")]),t._v(" each time a user accesses the Wochit Video Editor.")],1),t._v(" "),a("h3",{attrs:{id:"request-payload"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#request-payload"}},[t._v("#")]),t._v(" Request Payload")]),t._v(" "),a("p",[t._v("The request payload for both endpoints should be in JSON format and include the following properties:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prompt"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"instructions"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"templateId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"categoryIds"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"aspectRatios"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ASPECT_16_9"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"videoContext"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"mediaGalleryAssets"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"caption"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"summer day football"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"thumbnailUrl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"colors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"112341"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FFFFFF"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"fonts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OpenSans-Regular"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"OpenSans-Regular"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("hr"),t._v(" "),a("p",[a("strong",[t._v("prompt")]),t._v(" "),a("code",[t._v("string")]),t._v(" "),a("Badge",{attrs:{text:"Required",type:"warning"}}),t._v("\nThe prompt can be either a textual description, providing as much detail as possible about the video, or a URL that the video should be based on.")],1),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("instructions")]),t._v(" "),a("code",[t._v("string")]),t._v(" "),a("Badge",{attrs:{text:"Optional"}}),t._v("\nUsed for specifying the generation instructions for the text of the video. Note that creative instructions will be ignored.")],1),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("templateId")]),t._v(" "),a("code",[t._v("string")]),t._v(" "),a("Badge",{attrs:{text:"Optional"}}),t._v("\nThe ID of the template to be used for generating the video. If you don't provide a template ID, one will be randomly selected from all the available templates in your account."),a("br"),t._v("\nIf "),a("em",[t._v("templateId")]),t._v(" is not provided, we utilize the "),a("em",[t._v("categoryIds")]),t._v(" and "),a("em",[t._v("aspectRatios")]),t._v(" to fetch a random template that matches these parameters.")],1),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("categoryIds")]),t._v(" "),a("code",[t._v("string[]")]),t._v(" "),a("Badge",{attrs:{text:"Optional"}}),t._v("\nIf category IDs are provided, a template will be randomly selected from at least one of the categories you have provided. You can extract the category IDs using "),a("RouterLink",{attrs:{to:"/api.html#template-categories"}},[t._v("our API")]),t._v(".")],1),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("aspectRatios")]),t._v(" "),a("code",[t._v("string[]")]),t._v(" "),a("Badge",{attrs:{text:"Optional"}}),t._v("\nSpecifies the aspect ratio of the video or draft. If it's not sent, the aspect ratio will be determined by the template. Available options are: ASPECT_16_9, ASPECT_1_1, and ASPECT_9_16.")],1),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("videoContext")]),t._v(" "),a("code",[t._v("string")]),t._v(" "),a("Badge",{attrs:{text:"Optional"}}),t._v('\nThe "videoContext" property is optional but highly recommended. It can be set as a unique identifier such as a customer ID, a page ID, or any other metadata that helps reconcile the produced video with your internal systems. This property will be sent back with the produced video, allowing you to know where the video belongs.')],1),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("mediaGalleryAssets")]),t._v(" "),a("code",[t._v("object[]")]),t._v(" "),a("Badge",{attrs:{text:"Optional"}}),t._v('\nA list of assets that should be used in the video. Each asset should include a "url" ('),a("em",[t._v("mandatory")]),t._v(') and must include "thumbnailUrl" if the asset is a video. The caption is optional, allowing us to better understand the asset to know where to place it in the video by AI. In case there\'s no caption, we try to generate one ourselves using AI.\nThe caption should be a description of the image visually or textually.')],1),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("colors")]),t._v(" "),a("code",[t._v("string[]")]),t._v(" "),a("Badge",{attrs:{text:"Optional"}}),t._v('\nA list of colors to brand the video. The first color is the primary color, and you can send up to 4 colors. If the "colors" property is not provided, the colors of the template will be selected as default.')],1),t._v(" "),a("hr"),t._v(" "),a("p",[a("strong",[t._v("fonts")]),t._v(" "),a("code",[t._v("string[]")]),t._v(" "),a("Badge",{attrs:{text:"Optional"}}),t._v("\nA list of fonts to be used in the video or draft. Please contact us to obtain a full list of available fonts.")],1),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"response"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#response"}},[t._v("#")]),t._v(" Response")]),t._v(" "),a("p",[t._v("Successful response from the Wochit AI API is indicated by a 204 status code and an empty body. You will receive a webhook notification when a draft is created or a video is produced."),a("br"),t._v("\nPlease note that draft webhooks are sent only if you have enabled drafts support in your account.")]),t._v(" "),a("h3",{attrs:{id:"error-handling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error-handling"}},[t._v("#")]),t._v(" Error handling")]),t._v(" "),a("p",[t._v("Our AI API uses conventional HTTP response codes for indicating success or failure. The possible error responses include:")]),t._v(" "),a("code-group",[a("code-block",{attrs:{title:"400 - Bad Request",active:""}},[a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bad Request"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requestId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a43e6ee3def25828cad8a2e9270b08c0"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("code-block",{attrs:{title:"401 - Unauthorized"}},[a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("401")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unauthorized"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requestId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dea7bfbd46d3a73a3f51f002550b5959"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"parameter"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"message"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unauthorized"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"details"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token null keyword"}},[t._v("null")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),a("code-block",{attrs:{title:"500 - Internal Server Error (Rare)"}},[a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Internal Server Error"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"requestId"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"90a5f277e13f78e26dbfd0d02c37f2d7"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])],1),t._v(" "),a("p",[t._v("If you encounter any errors, please provide the "),a("code",[t._v("requestId")]),t._v(" for further assistance.")])],1)}),[],!1,null,null,null);s.default=n.exports}}]);