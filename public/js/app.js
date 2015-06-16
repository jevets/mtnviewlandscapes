$ = jQuery = require('jquery');
var bootstrap = require('bootstrap');
var gmaps = require('gmaps');
var imagesLoaded = require('imagesloaded');
var isotope = require('isotope');


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
      zoom: 11
    });

    map.addMarker({
      lat: lat,
      lng: lng,
      title: title
    });
  };


  App.layoutGallery = function() {
    var grid = $('.grid');
    grid.isotope({
      itemSelector: '.grid-item',
      layoutMode: 'packery'
    });
    // grid.imagesLoaded().progress(function() {
    //   grid.isotope('layout');
    // });
  };



  $(document).ready(function() {
    App.loadMap();
    App.layoutGallery();
  });

})(jQuery);