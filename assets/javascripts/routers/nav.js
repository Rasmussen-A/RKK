define(['jquery',
        'underscore',
        'backbone',
        'text!templates/contacts.html'],
  function($, _, Backbone, contactsTemplate) {
    // Where to render content
    var target = undefined

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
        target = el
      },

      index: function() {
        require(['views/index'], 
          function(indexView){ var index = new indexView.Index({el: target}) }) },

      about: function() {
  	  	require(['views/about'],
          function(aboutView){ var about = new aboutView.About({el: target}) }) },

      service: function() {
  	  	require(['views/service'],
          function(serviceView){ var service = new serviceView.Service({ el: target }) }) },

      shop: function() {
  	  	$('.navbar-nav a[href="#shop"]').tab('show')
  	  	target.empty() },

      order: function() {
  	  	$('.navbar-nav a[href="#order"]').tab('show')
  	  	target.empty() } })

    return { Nav: Nav }
  })