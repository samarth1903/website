(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{525:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("AddonLogo"),t._v(" "),a("p",[t._v("The TinkerForge Action service provides direct interaction with some of the TinkerForge devices.")]),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("The action service depends on the TinkerForge Binding (1.x) being installed and configured. Add at least a hosts configuration value in the binding's configuration.")]),t._v(" "),t._m(2),t._v(" "),a("p",[t._v("These action functions are available:")]),t._v(" "),t._m(3),t._v(" "),a("p",[t._v("Clears the display of the LCD with the given uid.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(4),t._m(5),t._v(" "),a("p",[t._v("Sets the position of a TinkerForge servo with the uid $uid and servo number to the position $position using the speed $speed and acceleration $acceleration.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("Sets the speed of a TinkerForge DC motor with the given uid to $speed using the acceleration $acceleration and the drivemode $drivemode.")]),t._v(" "),t._m(8),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(9),t._m(10),t._v(" "),a("p",[t._v("Sets the speed of a TinkerForge DC motor with the given uid to $speed using the acceleration $acceleration and the drivemode $drivemode.")]),t._v(" "),t._m(11),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(12),t._m(13),t._v(" "),a("p",[t._v("Clears the rotary encoder counter with the given uid.")]),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(14),t._m(15),t._v(" "),a("p",[t._v("Example:")]),t._v(" "),t._m(16),a("DocPreviousVersions"),t._v(" "),a("EditPageLink")],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"tinkerforge-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tinkerforge-actions","aria-hidden":"true"}},[this._v("#")]),this._v(" TinkerForge Actions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"prerequisites"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites","aria-hidden":"true"}},[this._v("#")]),this._v(" Prerequisites")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#actions","aria-hidden":"true"}},[this._v("#")]),this._v(" Actions")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("tfClearLCD(String uid)")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"clear lcd"')]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n        "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" ClearLCD "),a("span",{attrs:{class:"token keyword"}},[t._v("received command")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n       "),a("span",{attrs:{class:"token function"}},[t._v("tfClearLCD")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"d4j"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("tfServoSetposition(String uid, String num, String position, String velocity, String acceleration)")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"move servo"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" MoveServo "),a("span",{attrs:{class:"token keyword"}},[t._v("received command")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfServoSetposition")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"6Crt5W"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"servo0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"65535"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"65535"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function-name"}},[t._v("Thread")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("sleep")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfServoSetposition")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"6Crt5W"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"servo0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"-9000"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"65535"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"65535"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function-name"}},[t._v("Thread")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("sleep")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfServoSetposition")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"6Crt5W"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"servo0"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"9000"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"65535"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"65535"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("tfDCMotorSetspeed(String uid, String speed, String acceleration, String drivemode)")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("speed: value between -32767 - 32767")]),this._v(" "),s("li",[this._v('drivemode is either "break" or "coast"')])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"move motor"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" DCMOVE "),a("span",{attrs:{class:"token keyword"}},[t._v("received command")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" acceleration "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"10000"')]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("String")]),t._v(" speed "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"15000"')]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfDCMotorSetspeed")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"62Zduj"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" speed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" acceleration"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"break"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function-name"}},[t._v("Thread")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("sleep")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfDCMotorSetspeed")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"62Zduj"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" speed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" acceleration"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"break"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function-name"}},[t._v("Thread")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("sleep")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfDCMotorSetspeed")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"62Zduj"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" speed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" acceleration"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"break"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function-name"}},[t._v("Thread")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("sleep")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfDCMotorSetspeed")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"62Zduj"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" speed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" acceleration"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"break"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("tfDCMotorSetspeed(String uid, Short speed, Integer acceleration, String drivemode)")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("speed: value between -32767 - 32767")]),this._v(" "),s("li",[this._v('drivemode is either "break" or "coast"')])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"move motor"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" DCMOVE "),a("span",{attrs:{class:"token keyword"}},[t._v("received command")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" acceleration "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10000")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Short")]),t._v(" speed "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("15000")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfDCMotorSetspeed")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"62Zduj"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" speed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" acceleration"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"break"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function-name"}},[t._v("Thread")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("sleep")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfDCMotorSetspeed")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"62Zduj"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" speed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" acceleration"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"break"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function-name"}},[t._v("Thread")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("sleep")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfDCMotorSetspeed")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"62Zduj"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" speed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" acceleration"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"break"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function-name"}},[t._v("Thread")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token operator"}},[t._v(":")]),a("span",{attrs:{class:"token function"}},[t._v("sleep")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1000")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfDCMotorSetspeed")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"62Zduj"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" speed"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" acceleration"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"break"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("tfRotaryEncoderClear(String uid)")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Clear"')]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Clear "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfRotaryEncoderClear")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"kHv"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("code",[this._v("tfLoadCellTare(String uid)")]),this._v("\nSets tare on the load cell bricklet with the given uid.")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-rules"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("rule")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"Tare"')]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("when")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("Item")]),t._v(" Tare "),a("span",{attrs:{class:"token keyword"}},[t._v("changed")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("to")]),t._v(" "),a("span",{attrs:{class:"token constant"}},[t._v("ON")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("postUpdate")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("TareValue"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token function-name"}},[t._v("Weight")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("tfLoadCellTare")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v('"v8V"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("end")]),t._v("\n")])])])}],!1,null,null,null);e.options.__file="readme.md";s.default=e.exports}}]);