sap.ui.define([
	"com/bootcamp/sapui5/freestyle/utils/HomeService",
], function (HomeService) {
	"use strict";

	return {
		init: function (oNorthwindModel) {
			this._oNorthwindModel = oNorthwindModel;
		},

		getProposalBystatus: async function() {
            let oFilters = [];
            return HomeService.readProducts(this._oNorthwindModel, oFilters);
        }
	};
});