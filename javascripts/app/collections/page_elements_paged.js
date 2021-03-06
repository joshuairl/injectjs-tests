/*! app/collections/page_elements_paged
* 	@requires: app,app/collection_paged,app/model
* 	@extends: app.Collection_paged
* 	@exports: app.collections.Page_elements_paged
*/
define("app/collections/Page_elements_paged",function(require,app) {
	var Page_elementModel = require("app/models/page_element");

	app.collections.Page_elements_paged = app.Collection_paged.extend({
			initialize: function() {},
		    paginator_core: {
		      type: 'get',
		      dataType: 'json',
		      url: '/api/page_elements/'
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
		    model: Page_elementModel
		});

	exports.app = app;
});
