define(['jquery',
		'underscore',
		'backbone',
		'text!templates/index.html'],
	function($, _, Backbone, indexTemplate){
		Index = Backbone.View.extend({
			el: $("#content"),
			template: _.template(indexTemplate),
			render: function() {
				this.$el.html(this.template()) } })
		return { Index: Index }
	})