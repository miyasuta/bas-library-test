/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library zlib.mylibrary.
 */
sap.ui.define(["sap/ui/core/library"], // library dependency
	function () {

		"use strict";

		/**
		 * 
		 *
		 * @namespace
		 * @name zlib.mylibrary
		 * @author SAP SE
		 * @version 1.0.0
		 * @public
		 */

		// delegate further initialization of this library to the Core
		sap.ui.getCore().initLibrary({
			name: "zlib.mylibrary",
			version: "1.0.0",
			dependencies: ["sap.ui.core"],
			types: [],
			interfaces: [],
			controls: [],
			elements: []
		});

		/* eslint-disable */
		return zlib.mylibrary;
		/* eslint-enable */

	}, /* bExport= */ false);