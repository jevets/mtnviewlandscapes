$ = jQuery = require('jquery');
var bootstrap = require('bootstrap');

(function($) {

  var App = {};

  App.init = function() {
    console.log('init!');
  };


  $(document).ready(function() {
    App.init();
  });

})(jQuery);