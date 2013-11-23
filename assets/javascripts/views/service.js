define(['jquery',
		'underscore',
		'backbone',
		'leaflet',
		'text!templates/service.html'],
	function($, _, Backbone, L, serviceTemplate){
		Service = Backbone.View.extend({
			template: _.template(serviceTemplate),
			initialize: function() {
				this.$el.html(this.template())
		  	  	$('.navbar-nav a[href="#service"]').tab('show')
		  	  	var LatLon = [59.91529, 30.47963]
		  	  	var map = L.map('map').setView(LatLon, 16)
		  	  	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
		          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
				    }).addTo(map)
		  	  	var marker = L.marker(LatLon).addTo(map)
		  	  	marker.bindPopup(
		  	  		"<b>Ул. Подвойского, д. 26, к. 1</b>"
		  	  		).openPopup()
		  	  	 } })
		return { Service: Service }
	})