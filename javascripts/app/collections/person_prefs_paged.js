/*! app/collections/person_prefs_paged
* 	@requires: app,app/collection_paged,app/model
* 	@extends: app.Collection_paged
* 	@exports: app.collections.Person_prefs_paged
*/
define("app/collections/Person_prefs_paged",function(require,app) {
	var Person_prefModel = require("app/models/person_pref");

	app.collections.Person_prefs_paged = app.Collection_paged.extend({
			initialize: function() {},
		    paginator_core: {
		      type: 'get',
		      dataType: 'json',
		      url: '/api/person_prefs/'
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
		    model: Person_prefModel
		});

	exports.app = app;
});