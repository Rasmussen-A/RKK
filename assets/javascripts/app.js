// app.js

define(['jquery',
       'underscore',
       'backbone',
       'bootstrap',
       'routers/nav'],
  function($, _, Backbone, Bootstrap, NavRouter) {
  	var navigation = new NavRouter.Nav()
  		Backbone.history.start()
  }
)