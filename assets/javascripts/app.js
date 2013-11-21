// app.js

define(['jquery',
       'underscore',
       'backbone',
       'bootstrap',
       'routers/nav'],
  function($, _, Backbone, Bootstrap, NavRouter) {
  	$('body > .container').height( $(window).height() - 90 )
  	$('#contacts').popover()
  	var navigation = new NavRouter.Nav()
  		Backbone.history.start()
  }
)