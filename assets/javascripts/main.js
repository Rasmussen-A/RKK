// main.js - require.js config file

require.config({
  paths: {
    jquery: 'https://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min',
    underscore: 'https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.5.2/underscore-min',
    backbone: 'https://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.0/backbone-min',
    bootstrap: 'https://netdna.bootstrapcdn.com/bootstrap/3.0.2/js/bootstrap.min',
    templates: '../templates'
  },
  shim: {
    jquery: { exports: '$' },
    underscore: { exports: '_' },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone' }
  }
});

require(['app'], function(App){
  //call app.js
})