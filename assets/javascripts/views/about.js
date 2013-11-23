define(['jquery',
		'underscore',
		'backbone',
		'text!templates/about.html'],
	function($, _, Backbone, indexTemplate){
		About = Backbone.View.extend({
			template: _.template(indexTemplate),
			initialize: function() {
				this.$el.html(this.template())
		  	  	$('.navbar-nav a[href="#about"]').tab('show') } })
		return { About: About }
	})