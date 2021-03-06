/*! app/collections/sys_groupings_paged
* 	@requires: app,app/collection_paged,app/model
* 	@extends: app.Collection_paged
* 	@exports: app.collections.Sys_groupings_paged
*/
define("app/collections/Sys_groupings_paged",function(require,app) {
	var Sys_groupingModel = require("app/models/sys_grouping");

	app.collections.Sys_groupings_paged = app.Collection_paged.extend({
			initialize: function() {},
		    paginator_core: {
		      type: 'get',
		      dataType: 'json',
		      url: '/api/sys_groupings/'
		    },
		    paginator_ui: {
		      firstPage: 1,
		      currentPage: 1,
		      perPage: 15
		    },
		    parse: function(response) {
		      this.totalPages = Math.ceil(response.length / this.perPage);
		      return response;
		    },
		    model: Sys_groupingModel
		});

	exports.app = app;
});
