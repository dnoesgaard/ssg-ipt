// You can write custom js here and it will be injected into the bundle in the end

(function(){
	//if no map on this page, then do not execute
	if (!document.getElementById('map')) {
		return;
	}
	var publisherUrl = '//www.gbif.org/publisher/';
	var lang = {
		en: {
			installation: 'installation',
			installations: 'installations'
		}
	};
	var userLocation = undefined,
		map;

	L.mapbox.accessToken = 'pk.eyJ1IjoibW9ydGVuIiwiYSI6ImYyOTMzMWJiODZhY2I2M2U2YTMyMjhmMmM2MGQ2NWJmIn0.BOlgrjDyfFXnAO8afZT5mA';
	map = L.mapbox.map('map', 'mapbox.streets').setView([10, 0], 1);
	map.scrollWheelZoom.disable();

	$.getJSON("//freegeoip.net/json/", function(location) {
		map.setView([location.latitude, location.longitude], 3);
	});

	//load geojson with markers
	$.getJSON("//api.gbif.org/v1/installation/location/IPT_INSTALLATION", function(geojson) {
		var markers = new L.MarkerClusterGroup();
		markers.addLayer(L.geoJson(geojson, { style: L.mapbox.simplestyle.style }))
		map.addLayer(markers);

		map.fitBounds(markers.getBounds());

		//add popups
		markers.eachLayer(function(marker) {
			//get phrase in site language in plural or singular
			var inst = marker.feature.properties.count == 1 ? lang[GBIF.siteLanguage].installation : lang[GBIF.siteLanguage].installations;
			//Create popup html
			var content = '<h2><a href="' + publisherUrl + marker.feature.properties.key + '">'+marker.feature.properties.title+'</a><\/h2>';
			content += '<p>' + marker.feature.properties.count + ' ' + inst + '</p>';
	    	marker.bindPopup(content);
		});
	});

})();