define(['jquery',
        'underscore',
        'backbone',
        'views/index',
        'text!templates/contacts.html'],
  function($, _, Backbone, indexView, contactsTemplate) {

    Nav = Backbone.Router.extend({
      routes: {
        "": "index",
        "about": "about",
        "service": "service",
        "shop": "shop",
        "order": "order", 
    	"*actions": "index" },

      initialize: function() {
        // Render contacts templates and activate popover
        $("#info").html(_.template(contactsTemplate))
        $('#contacts').popover()
      },

      index: function() {
	  	$('.navbar-nav a[href="#"]').tab('show')
	  	var index_view = new indexView.Index()
	  		index_view.render() },

      about: function() {
	  	$('.navbar-nav a[href="#about"]').tab('show')
	  	$('#content').empty() },

      service: function() {
	  	$('.navbar-nav a[href="#service"]').tab('show')
	  	$('#content').empty() },

      shop: function() {
	  	$('.navbar-nav a[href="#shop"]').tab('show')
	  	$('#content').empty() },

      order: function() {
	  	$('.navbar-nav a[href="#order"]').tab('show')
	  	$('#content').empty() } })

    return { Nav: Nav }
  }
)