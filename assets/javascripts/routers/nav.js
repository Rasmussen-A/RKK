define(['jquery',
        'underscore',
        'backbone',
        'views/index',
        'views/about',
        'text!templates/contacts.html'],
  function($, _, Backbone, indexView, aboutView, contactsTemplate) {

    Nav = Backbone.Router.extend({
      routes: {
        "": "index",
        "about": "about",
        "service": "service",
        "shop": "shop",
        "order": "order", 
      	"*actions": "index" },

      initialize: function(el) {
        // Render contacts templates and activate popover
        $("#info").html(_.template(contactsTemplate))
        $('#contacts').popover()
        this.$el = el
      },

      index: function() {
	  	$('.navbar-nav a[href="#"]').tab('show')
	  	var index_view = new indexView.Index({el: this.$el}) },

      about: function() {
	  	$('.navbar-nav a[href="#about"]').tab('show')
	  	var about_view = new aboutView.About({el: this.$el}) },

      service: function() {
	  	$('.navbar-nav a[href="#service"]').tab('show')
	  	this.$el.empty() },

      shop: function() {
	  	$('.navbar-nav a[href="#shop"]').tab('show')
	  	this.$el.empty() },

      order: function() {
	  	$('.navbar-nav a[href="#order"]').tab('show')
	  	this.$el.empty() } })

    return { Nav: Nav }
  })