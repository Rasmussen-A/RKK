// app.js

define(['jquery',
       'underscore',
       'backbone',
       'bootstrap'],
  function($, _, Backbone, Bootstrap) {
  	$('.navbar-nav a[href="#"]').tab('show')
  	$('body > .container').height( $(window).height() - 90 )
  }
)