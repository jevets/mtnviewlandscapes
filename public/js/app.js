$ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var gmaps = require('gmaps');

(function($) {

  var App = {};

  App.loadMap = function() {
    var div = $('#gmap');
    var title = $(div).data('marker-title');
    var lng = $(div).data('lng');
    var lat = $(div).data('lat');

    var map = new gmaps({
      div: '#gmap',
      lat: lat,
      lng: lng,
      scrollwheel: false,
      zoom: 10
    });

    map.addMarker({
      lat: lat,
      lng: lng,
      title: title
    });
  };

  App.init = function() {
    App.loadMap();
  };


  $(document).ready(function() {
    App.init();
  });

})(jQuery);