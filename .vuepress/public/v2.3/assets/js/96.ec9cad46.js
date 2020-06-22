(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{600:function(t,e,v){"use strict";v.r(e);var _=v(0),a=Object(_.a)({},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"content"},[t._m(0),t._v(" "),v("p",[t._v("The openHAB DSMR binding is targeted for Dutch users having a smart meter ('Slimme meter' in Dutch).  Data of Dutch smart meters can be obtained via the P1-port. When connecting this port from a serial port the data can be read out.")]),t._v(" "),v("p",[t._v("This binding reads the P1-port of the Dutch Smart Meters that comply to NTA8130, DSMR v2.1, DSMR v2.2, DSMR v3.0, DSMR v4.0 or DSMR v4.04.")]),t._v(" "),v("p",[t._v("Users not living in the Netherlands that want to read a meter should review the "),v("a",{attrs:{href:"https://github.com/openhab/openhab/wiki/IEC-62056---21-Meter-Binding",target:"_blank",rel:"noopener noreferrer"}},[t._v("IEC-62056-21 Meter Binding"),v("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),v("p",[t._v("The channels of the additional meters correspond to the M-Bus channel of the\nsmart meter that the additional meter is connected to. The main electricity\nmeter is always at channel 0; configuration of this meter is not necessary\nand not supported.")]),t._v(" "),t._m(4),t._v(" "),v("p",[t._v("The serial port settings for DSMR v4 and up (115200 8n1) differ from NTA8130,\nv2.1, v2.2 and v3.0 (9600 7e1). The DSMR binding will automatically detect the\napplicable serial port settings.")]),t._v(" "),t._m(5),t._v(" "),v("p",[t._v("The syntax for the DSMR binding configuration string is:")]),t._v(" "),t._m(6),v("p",[t._v("The following table shows the full list of available dsmr values:")]),t._v(" "),t._m(7),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),t._v(" "),t._m(11),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),t._m(16),t._v(" "),t._m(17),t._v(" "),v("p",[t._v("A meter that conforms to DSMR v4 or higher includes a CRC on the complete message. The binding does not check the CRC yet.")]),t._v(" "),v("DocPreviousVersions"),t._v(" "),v("EditPageLink")],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"dsmr-binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dsmr-binding","aria-hidden":"true"}},[this._v("#")]),this._v(" DSMR Binding")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"binding-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Binding Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The binding can be configured in the file "),e("code",[this._v("services/dsmr.cfg")]),this._v(".")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("Property")]),t._v(" "),v("th",[t._v("Default")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Required")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("port")]),t._v(" "),v("td"),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),v("td",[t._v("Port of the DSMR")])]),t._v(" "),v("tr",[v("td",[t._v("gas.channel")]),t._v(" "),v("td",[t._v("1")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),v("td",[t._v("Channel for the gas meter")])]),t._v(" "),v("tr",[v("td",[t._v("water.channel")]),t._v(" "),v("td",[t._v("2")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),v("td",[t._v("Channel for the water meter")])]),t._v(" "),v("tr",[v("td",[t._v("heating.channel")]),t._v(" "),v("td",[t._v("3")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),v("td",[t._v("Channel for the heating meter")])]),t._v(" "),v("tr",[v("td",[t._v("cooling.channel")]),t._v(" "),v("td",[t._v("4")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),v("td",[t._v("Channel for the cooling meter")])]),t._v(" "),v("tr",[v("td",[t._v("generic.channel")]),t._v(" "),v("td",[t._v("5")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),v("td",[t._v("Channel for the generic meter")])]),t._v(" "),v("tr",[v("td",[t._v("slaveelectricity.channel")]),t._v(" "),v("td",[t._v("6")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("No")]),t._v(" "),v("td",[t._v("Channel for the slave electricity meter")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"differences-between-dsmr-versions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#differences-between-dsmr-versions","aria-hidden":"true"}},[this._v("#")]),this._v(" Differences between DSMR versions")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"item-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration","aria-hidden":"true"}},[this._v("#")]),this._v(" Item Configuration")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('dsmr="[dsmr item id]"\n')])])])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("DSMR item id")]),t._v(" "),v("th",[t._v("Description")]),t._v(" "),v("th",[t._v("Available for DSMR version")]),t._v(" "),v("th",[t._v("Unit")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("strong",[t._v("General values")])]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("P1VersionOutput")]),t._v(" "),v("td",[t._v("Version information for P1 output")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("P1Timestamp")]),t._v(" "),v("td",[t._v("Timestamp of the P1 output")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Electricity meter values")])]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eEquipmentId")]),t._v(" "),v("td",[t._v("Equipment identifier")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eDeliveryTariff0")]),t._v(" "),v("td",[t._v("Total meter delivery tariff 0")]),t._v(" "),v("td",[v("sup",[t._v("1")])]),t._v(" "),v("td",[t._v("kWh")])]),t._v(" "),v("tr",[v("td",[t._v("eDeliveryTariff1")]),t._v(" "),v("td",[t._v("Total meter delivery tariff 1")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td",[t._v("kWh")])]),t._v(" "),v("tr",[v("td",[t._v("eDeliveryTariff2")]),t._v(" "),v("td",[t._v("Total meter delivery tariff 2")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td",[t._v("kWh")])]),t._v(" "),v("tr",[v("td",[t._v("eProductionTariff0")]),t._v(" "),v("td",[t._v("Total meter production tariff 0")]),t._v(" "),v("td",[v("sup",[t._v("1")])]),t._v(" "),v("td",[t._v("kWh")])]),t._v(" "),v("tr",[v("td",[t._v("eProductionTariff1")]),t._v(" "),v("td",[t._v("Total meter production tariff 1")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td",[t._v("kWh")])]),t._v(" "),v("tr",[v("td",[t._v("eProductionTariff2")]),t._v(" "),v("td",[t._v("Total meter production tariff 2")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td",[t._v("kWh")])]),t._v(" "),v("tr",[v("td",[t._v("eTariffIndicator")]),t._v(" "),v("td",[t._v("Tariff indicator")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eActualDelivery")]),t._v(" "),v("td",[t._v("Actual power delivery")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td",[t._v("kW")])]),t._v(" "),v("tr",[v("td",[t._v("eActualProduction")]),t._v(" "),v("td",[t._v("Actual power production")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td",[t._v("kW")])]),t._v(" "),v("tr",[v("td",[t._v("eTreshold")]),t._v(" "),v("td",[t._v("The actual threshold Electricity")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td",[t._v("A for v2.1, v2.2, v3.0"),v("br"),t._v("kW for v4.0 and v4.04")])]),t._v(" "),v("tr",[v("td",[t._v("eSwitchPosition")]),t._v(" "),v("td",[t._v("Actual switch position")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("ePowerFailures")]),t._v(" "),v("td",[t._v("Number of power failures")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eLongPowerFailures")]),t._v(" "),v("td",[t._v("Number of long power failures")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eNumberOfLogEntries")]),t._v(" "),v("td",[t._v("Number of power failure entries in the event log")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eDatePowerFailureX")]),t._v(" "),v("td",[t._v("Date of power failure (entry "),v("em",[t._v("X")]),t._v(")")]),t._v(" "),v("td",[t._v("v4.0 and up"),v("br"),v("em",[t._v("X")]),t._v(" is a value [1-10]")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eDurationPowerFailureX")]),t._v(" "),v("td",[t._v("Duration of power failure (entry "),v("em",[t._v("X")]),t._v(")")]),t._v(" "),v("td",[t._v("v4.0 and up"),v("br"),v("em",[t._v("X")]),t._v(" is a value [1-10]")]),t._v(" "),v("td",[t._v("seconds")])]),t._v(" "),v("tr",[v("td",[t._v("eVoltageSagsL1")]),t._v(" "),v("td",[t._v("Number of voltage sags L1")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eVoltageSagsL2")]),t._v(" "),v("td",[t._v("Number of voltage sags L2")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eVoltageSagsL3")]),t._v(" "),v("td",[t._v("Number of voltage sags L3")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eVoltageSwellsL1")]),t._v(" "),v("td",[t._v("Number of voltage swells L1")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eVoltageSwellsL2")]),t._v(" "),v("td",[t._v("Number of voltage swells L2")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eVoltageSwellsL3")]),t._v(" "),v("td",[t._v("Number of voltage swells L3")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eTextCode")]),t._v(" "),v("td",[t._v("Version information for P1 output")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eTextMessage")]),t._v(" "),v("td",[t._v("Version information for P1 output")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("eInstantCurrentL1")]),t._v(" "),v("td",[t._v("Instantenous current L1")]),t._v(" "),v("td",[t._v("v4.04 and up")]),t._v(" "),v("td",[t._v("A")])]),t._v(" "),v("tr",[v("td",[t._v("eInstantCurrentL2")]),t._v(" "),v("td",[t._v("Instantenous current L2")]),t._v(" "),v("td",[t._v("v4.04 and up")]),t._v(" "),v("td",[t._v("A")])]),t._v(" "),v("tr",[v("td",[t._v("eInstantCurrentL3")]),t._v(" "),v("td",[t._v("Instantenous current L3")]),t._v(" "),v("td",[t._v("v4.04 and up")]),t._v(" "),v("td",[t._v("A")])]),t._v(" "),v("tr",[v("td",[t._v("eInstantPowerDeliveryL1")]),t._v(" "),v("td",[t._v("Instantenous active power delivery L1")]),t._v(" "),v("td",[t._v("v4.04 and up")]),t._v(" "),v("td",[t._v("kW")])]),t._v(" "),v("tr",[v("td",[t._v("eInstantPowerDeliveryL2")]),t._v(" "),v("td",[t._v("Instantenous active power delivery L2")]),t._v(" "),v("td",[t._v("v4.04 and up")]),t._v(" "),v("td",[t._v("kW")])]),t._v(" "),v("tr",[v("td",[t._v("eInstantPowerDeliveryL3")]),t._v(" "),v("td",[t._v("Instantenous active power delivery L3")]),t._v(" "),v("td",[t._v("v4.04 and up")]),t._v(" "),v("td",[t._v("kW")])]),t._v(" "),v("tr",[v("td",[t._v("eInstantPowerProductionL1")]),t._v(" "),v("td",[t._v("Instantenous active power production L1")]),t._v(" "),v("td",[t._v("v4.04 and up")]),t._v(" "),v("td",[t._v("kW")])]),t._v(" "),v("tr",[v("td",[t._v("eInstantPowerProductionL2")]),t._v(" "),v("td",[t._v("Instantenous active power production L2")]),t._v(" "),v("td",[t._v("v4.04 and up")]),t._v(" "),v("td",[t._v("kW")])]),t._v(" "),v("tr",[v("td",[t._v("eInstantPowerProductionL3")]),t._v(" "),v("td",[t._v("Instantenous active power production L3")]),t._v(" "),v("td",[t._v("v4.04 and up")]),t._v(" "),v("td",[t._v("kW")])]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Gas meter values")])]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("gDeviceType")]),t._v(" "),v("td",[t._v("Device Type")]),t._v(" "),v("td",[t._v("v3.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("gEquipmentId")]),t._v(" "),v("td",[t._v("Equipment identifier")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("gValueTS")]),t._v(" "),v("td",[t._v("Timestamp of the last measurement (local time)")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td",[t._v("Date & time")])]),t._v(" "),v("tr",[v("td",[t._v("gNumberOfValues")]),t._v(" "),v("td",[t._v("Number of values available for gValue en gValue"),v("em",[t._v("X")])]),t._v(" "),v("td",[t._v("v3.0")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("gUnit")]),t._v(" "),v("td",[t._v("Unit of the values")]),t._v(" "),v("td",[t._v("v3.0")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("gValue")]),t._v(" "),v("td",[t._v("Delivery of:"),v("br"),t._v("-Last hour (v3.0 / v4.0 and up)"),v("br"),t._v("-Last 24 hours (v2.1 / v2.2)")]),t._v(" "),v("td",[t._v("All versions"),v("sup",[t._v("2")])]),t._v(" "),v("td",[t._v("m3")])]),t._v(" "),v("tr",[v("td",[t._v("gValueX")]),t._v(" "),v("td",[t._v("Meter reading "),v("em",[t._v("X")]),t._v(" of the buffer (hourly period)")]),t._v(" "),v("td",[t._v("v3.0"),v("sup",[t._v("2")]),v("br"),v("em",[t._v("X")]),t._v(" is a value [2-10]"),v("br"),t._v("Higher values are older")]),t._v(" "),v("td",[t._v("m3")])]),t._v(" "),v("tr",[v("td",[t._v("gProfileStatus")]),t._v(" "),v("td",[t._v("Unknown")]),t._v(" "),v("td",[t._v("v3.0")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("gRecordingPeriod")]),t._v(" "),v("td",[t._v("Duration of a value recording")]),t._v(" "),v("td",[t._v("v3.0")]),t._v(" "),v("td",[t._v("minutes")])]),t._v(" "),v("tr",[v("td",[t._v("gValueCompensated")]),t._v(" "),v("td",[t._v("Temperature compensated delivery of the last 24 hours")]),t._v(" "),v("td",[t._v("v2.1 and v2.2")]),t._v(" "),v("td",[t._v("m3")])]),t._v(" "),v("tr",[v("td",[t._v("gValvePosition")]),t._v(" "),v("td",[t._v("Valve position")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Heating meter values")])]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("hDeviceType")]),t._v(" "),v("td",[t._v("Device Type")]),t._v(" "),v("td",[t._v("v3.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("hEquipmentId")]),t._v(" "),v("td",[t._v("Equipment identifier")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("hValueTS")]),t._v(" "),v("td",[t._v("Timestamp of the last measurement (local time)")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td",[t._v("Date & time")])]),t._v(" "),v("tr",[v("td",[t._v("hValue")]),t._v(" "),v("td",[t._v("Last hour delivery")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td",[t._v("GJ")])]),t._v(" "),v("tr",[v("td",[t._v("hValvePosition")]),t._v(" "),v("td",[t._v("Valve position")]),t._v(" "),v("td",[t._v("v3.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Cooling meter values")])]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("cDeviceType")]),t._v(" "),v("td",[t._v("Device Type")]),t._v(" "),v("td",[t._v("v3.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("cEquipmentId")]),t._v(" "),v("td",[t._v("Equipment identifier")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("cValueTS")]),t._v(" "),v("td",[t._v("Timestamp of the last measurement (local time)")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td",[t._v("Date & time")])]),t._v(" "),v("tr",[v("td",[t._v("cValue")]),t._v(" "),v("td",[t._v("Last hour delivery")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td",[t._v("GJ")])]),t._v(" "),v("tr",[v("td",[t._v("cValvePosition")]),t._v(" "),v("td",[t._v("Valve position")]),t._v(" "),v("td",[t._v("v3.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Cooling meter values")])]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("wDeviceType")]),t._v(" "),v("td",[t._v("Device Type")]),t._v(" "),v("td",[t._v("v3.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("wEquipmentId")]),t._v(" "),v("td",[t._v("Equipment identifier")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("wValueTS")]),t._v(" "),v("td",[t._v("Timestamp of the last measurement (local time)")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td",[t._v("Date & time")])]),t._v(" "),v("tr",[v("td",[t._v("wValue")]),t._v(" "),v("td",[t._v("Last hour delivery")]),t._v(" "),v("td",[t._v("All versions")]),t._v(" "),v("td",[t._v("m3")])]),t._v(" "),v("tr",[v("td",[t._v("wValvePosition")]),t._v(" "),v("td",[t._v("Valve position")]),t._v(" "),v("td",[t._v("v3.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Generic meter values")])]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("genericDeviceType")]),t._v(" "),v("td",[t._v("Device Type")]),t._v(" "),v("td",[t._v("v3.0")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("genericEquipmentId")]),t._v(" "),v("td",[t._v("Equipment identifier")]),t._v(" "),v("td",[t._v("v3.0")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("genericValue")]),t._v(" "),v("td",[t._v("Last hour delivery")]),t._v(" "),v("td",[t._v("v3.0")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("genericValvePosition")]),t._v(" "),v("td",[t._v("Valve/Switch position")]),t._v(" "),v("td",[t._v("v3.0")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[v("strong",[t._v("Slave electricity meter values")])]),t._v(" "),v("td"),t._v(" "),v("td"),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("seDeviceType")]),t._v(" "),v("td",[t._v("Device Type")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("seEquipmentId")]),t._v(" "),v("td",[t._v("Equipment identifier")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")]),t._v(" "),v("tr",[v("td",[t._v("seValueTS")]),t._v(" "),v("td",[t._v("Timestamp of the last measurement (local time)")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td",[t._v("Date & time")])]),t._v(" "),v("tr",[v("td",[t._v("seValue")]),t._v(" "),v("td",[t._v("Last hour delivery")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td",[t._v("kWh")])]),t._v(" "),v("tr",[v("td",[t._v("seSwitchPosition")]),t._v(" "),v("td",[t._v("Switch position")]),t._v(" "),v("td",[t._v("v4.0 and up")]),t._v(" "),v("td")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("sup",[this._v("1")]),this._v(" This item isn't part of any specification, but the ITRON ACE4000 GTMM Mk3 does use this value."),e("br"),this._v(" "),e("sup",[this._v("2")]),this._v(" Gas values for DSMR v3.0 are available in a list of max. 10 entries. The binding assumes the first value is the most recent (and thus available in "),e("code",[this._v("gValue")]),this._v(")")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Examples")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"item-configuration-examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#item-configuration-examples","aria-hidden":"true"}},[this._v("#")]),this._v(" Item configuration examples")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-dsl"}},[v("code",[v("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),v("span",{attrs:{class:"token class-name"}},[t._v("P1_Actual_Delivery")]),t._v(" "),v("span",{attrs:{class:"token string"}},[t._v('"Actual usage [%.3f kW]"')]),t._v(" "),v("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("dsmr"),v("span",{attrs:{class:"token operator"}},[t._v("=")]),v("span",{attrs:{class:"token string"}},[t._v('"eActualDelivery"')]),v("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),v("span",{attrs:{class:"token class-name"}},[t._v("P1_Meter_DeliveryLow")]),t._v(" "),v("span",{attrs:{class:"token string"}},[t._v('"Meterstand reading low tariff [%.3f kWh]"')]),t._v(" "),v("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("dsmr"),v("span",{attrs:{class:"token operator"}},[t._v("=")]),v("span",{attrs:{class:"token string"}},[t._v('"eDeliveryTariff1"')]),v("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{attrs:{class:"token keyword"}},[t._v("Number")]),t._v(" "),v("span",{attrs:{class:"token class-name"}},[t._v("P1_Meter_DeliveryNormal")]),t._v(" "),v("span",{attrs:{class:"token string"}},[t._v('"Meter reading normal tariff[%.3f kWh]"')]),t._v(" "),v("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("dsmr"),v("span",{attrs:{class:"token operator"}},[t._v("=")]),v("span",{attrs:{class:"token string"}},[t._v('"eDeliveryTariff2"')]),v("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"notes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#notes","aria-hidden":"true"}},[this._v("#")]),this._v(" Notes")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"logging"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logging","aria-hidden":"true"}},[this._v("#")]),this._v(" Logging")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("To increase verbosity of the logging for debugging purposes, set the\n"),e("code",[this._v("org.openhab.binding.dsmr")]),this._v(" log level to DEBUG. Reduce back to INFO or DEFAULT\nafter capturing the desired logs.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"test-results"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#test-results","aria-hidden":"true"}},[this._v("#")]),this._v(" Test results")])},function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("table",[v("thead",[v("tr",[v("th",[t._v("Meter")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("DSMR version")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Electricity")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Gas")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Water")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Heating")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Cooling")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("General")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("Slave electricity")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("ISKRA MT382")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3.0")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")])]),t._v(" "),v("tr",[v("td",[t._v("ISKRA AM550")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("5.0")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Unknown")])]),t._v(" "),v("tr",[v("td",[t._v("Itron ACE4000 GTMM Mk3")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("NTA8130")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")])]),t._v(" "),v("tr",[v("td",[t._v("Kaifa E0003")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4.04")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")])]),t._v(" "),v("tr",[v("td",[t._v("Kaifa MA304")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("4.04")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")])]),t._v(" "),v("tr",[v("td",[t._v("Kamstrup 162JxC")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3.0")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")])]),t._v(" "),v("tr",[v("td",[t._v("Landys + Gyr E350")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("3.0")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("OK")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("Not tested")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("N/A")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"crc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#crc","aria-hidden":"true"}},[this._v("#")]),this._v(" CRC")])}],!1,null,null,null);a.options.__file="readme.md";e.default=a.exports}}]);