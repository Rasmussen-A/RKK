define(['jquery',
		'underscore',
		'backbone',
		'text!templates/index.html'],
	function($, _, Backbone, indexTemplate){
		Index = Backbone.View.extend({
			template: _.template(indexTemplate),
			initialize: function() {
				this.$el.html(this.template()) } })
		return { Index: Index }
	})