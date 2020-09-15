sap.ui.define([
	"sap/m/MessageBox"
], function (MessageBox) {
	"use strict";

	return {
		sayHello: function () {
			MessageBox.show("Hello", {
				title: "Message",
				actions: sap.m.MessageBox.Action.OK
			});
		}
		
	};
});