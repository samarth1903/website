(window.webpackJsonp=window.webpackJsonp||[]).push([[99],{576:function(t,e,a){"use strict";a.r(e);var s=a(0),n=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"pushbullet-actions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pushbullet-actions","aria-hidden":"true"}},[t._v("#")]),t._v(" Pushbullet Actions "),a("Badge",{attrs:{type:"warn",text:"v1"}})],1),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("The Pushbullet action allows you to notify iOS, Android & Windows 10 Phone & Desktop devices of a message using the Pushbullet API web service.")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Minimal (required):")]),t._v(" "),t._m(4),a("p",[t._v("Extended setup with 2 bots, each with its own access token (optional):")]),t._v(" "),t._m(5),t._m(6),t._v(" "),a("p",[t._v("The following is a valid action call that can be made when the plugin is loaded.\nFor specific information on each item, see the "),a("a",{attrs:{href:"https://docs.pushbullet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pushbullet API"),a("OutboundLink")],1),t._v(".\nThe recipient can either be an email address or a channel tag.\nIf it is not specified or invalid, the note will be broadcast to all of the user account's devices.")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("The pushbullet accounts are bound to either Google or Facebook accounts.")]),t._v(" "),a("ul",[a("li",[t._v('Go to "'),a("a",{attrs:{href:"https://www.pushbullet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.pushbullet.com/"),a("OutboundLink")],1),t._v('"')]),t._v(" "),a("li",[t._v('Chose to either "Sign up with Google" or "Sign up with Facebook".')]),t._v(" "),a("li",[t._v("Complete the signup process as guided by the pushbullet web site.")]),t._v(" "),a("li",[t._v('Continue with "Obtaining an API key".')])]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("The API keys are bound to the pushbullet account.")]),t._v(" "),a("ul",[a("li",[t._v("Go to the pushbullet site.")]),t._v(" "),a("li",[t._v("Log in with either your personal account or the one you created for your bot.")]),t._v(" "),a("li",[t._v('Go to "'),a("a",{attrs:{href:"https://www.pushbullet.com/#settings/account",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.pushbullet.com/#settings/account"),a("OutboundLink")],1),t._v('"')]),t._v(" "),a("li",[t._v('Click on "Create Access Token".')]),t._v(" "),a("li",[t._v("Copy the token created on the site.")])]),t._v(" "),a("p",[t._v("You must at least provide an API token (Private or Alias Key from "),a("a",{attrs:{href:"http://Pushbullet.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pushbullet.com"),a("OutboundLink")],1),t._v(") and a message in some manner before a message can be pushed.\nAll other parameters are optional.\nIf you use an alias key, the parameters (device, icon, sound, vibration) are overwritten by the alias setting on pushbullet.")]),t._v(" "),t._m(12),t._v(" "),a("p",[t._v("Free accounts have a limit of 100 pushes per month.\nThis action does not evaluate the rate limiting headers though.")]),t._v(" "),t._m(13),t._v(" "),a("p",[t._v("This action has been written without using libraries as jpushbullet or jpushbullet2.\nBoth of those libraries use various libraries themselves which makes integrating them into openHAB a challenge.")]),t._v(" "),t._m(14),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.pushbullet.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.pushbullet.com/"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://docs.pushbullet.com/#push-limit",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://docs.pushbullet.com/#push-limit"),a("OutboundLink")],1)])]),t._v(" "),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("You may define default values for parameters to action calls in the file "),e("code",[this._v("services/pushbullet.cfg")]),this._v(".\nTo override the default values, specify configuration parameters in the action call (using "),e("code",[this._v("Action override")]),this._v(").")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),a("th",[t._v("Action override")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("accesstoken")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Pushbullet "),a("a",{attrs:{href:"#obtaining-an-api-key"}},[t._v("API token")]),t._v(" to send to devices")])]),t._v(" "),a("tr",[a("td",[t._v("devicename")]),t._v(" "),a("td",[t._v("DEFAULT")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("botname")]),t._v(" "),a("td",[t._v("The name of the openHAB bot")])]),t._v(" "),a("tr",[a("td",[t._v("defaultreceiver")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("receiver")]),t._v(" "),a("td",[t._v("The name of the Recipient")])]),t._v(" "),a("tr",[a("td",[t._v("bots")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("Comma-separated list of multiple bots, each with its own settings below.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<bot>")]),t._v(".devicename")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes, if using multiple bots")]),t._v(" "),a("td",[t._v("botname")]),t._v(" "),a("td",[t._v("Device name for a single bot")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("<bot>")]),t._v(".accesstoken")]),t._v(" "),a("td"),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes, if using multiple bots")]),t._v(" "),a("td",[t._v("-")]),t._v(" "),a("td",[t._v("API token for a single bot")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"example-configurations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#example-configurations","aria-hidden":"true"}},[this._v("#")]),this._v(" Example Configurations")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("accesstoken=<API token>\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("bots=bot1,bot2\nbot1.devicename=openHAB-foobar\nbot1.accesstoken=1234abc\nbot2.devicename=openHAB-tralala\nbot2.accesstoken=4711qwert\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"actions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("sendPushbulletNote(String title, String message)")])]),this._v(" "),e("li",[e("code",[this._v("sendPushbulletNote(String receiver, String title, String message)")])]),this._v(" "),e("li",[e("code",[this._v("sendPushbulletNote(String botname, String receiver, String title, String message)")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendPushbulletNote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mybot"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"someone@somewhere.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"this is the title"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"And this is the body of the message"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"creating-an-account-for-your-bot-s"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#creating-an-account-for-your-bot-s","aria-hidden":"true"}},[this._v("#")]),this._v(" Creating an account for your bot(s)")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"obtaining-an-api-key"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#obtaining-an-api-key","aria-hidden":"true"}},[this._v("#")]),this._v(" Obtaining an API key")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"rate-limits"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#rate-limits","aria-hidden":"true"}},[this._v("#")]),this._v(" Rate limits")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"libraries"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#libraries","aria-hidden":"true"}},[this._v("#")]),this._v(" Libraries")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"pushbullet-api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#pushbullet-api","aria-hidden":"true"}},[this._v("#")]),this._v(" pushbullet API")])}],!1,null,null,null);e.default=n.exports}}]);