/*
 * jquery.sidemenu.js
 * https://github.com/kami30k/jquery.sidemenu.js
 *
 * Copyright 2015 kami.
 * Released under the MIT license.
 */

;(function($) {
  // Default settings
  var settings = {
    side:  'left', // Which side you want to show the side menu
    speed: 400     // Animation speed
  };

  // Global accessors
  var $html,
      $body,
      $menu;

  /**
   * Override default settings
   *
   * @param {Object} options Pairs of key and value for setting
   */
  $.sidemenu = function(options) {
    settings = $.extend(settings, options);
  };

  /**
   * Wrapper method of actions
   *
   * @param {String} name Action name (`open`, `close` or `toggle`)
   */
  $.fn.sidemenu = function(name) {
    name = name || 'toggle';

    // Initialize accessors
    $html = $('html');
    $body = $('body');
    $menu = $(this);

    methods[name]();
  };

  // Initialize when document has readied
  $(document).ready(function() {
    // Hide side menu
    $('[data-role="sidemenu"]').css(settings.side, '-240px');

    // Call action with selector which has id same as clicked selector's hash
    $('[data-role="sidemenu-toggle"]').on('click', function() {
      $(this).sidemenu.call($(this.hash));
    });
  });

  // Actions
  var methods = {
    // Open side menu
    open: function() {
      // Fix body position while showing side menu
      $body.css({
        overflowX: 'hidden',
        position:  'absolute',
        width:     $html.width()
      });

      // Animate
      animate($body, '240px');
      animate($menu, '0px');
    },

    // Close side menu
    close: function() {
      // Animate
      animate($body, '0px', function() { $(this).removeAttr('style') });
      animate($menu, '-240px');
    },

    // Open or close depends on the case
    toggle: function() {
      if ($menu.css(settings.side) == '0px') {
        this.close();
      } else {
        this.open();
      }
    }
  };

  /**
   * Animate side menu
   *
   * @param {Object} object Target of animation
   * @param {String} distance How long move the object
   * @param {Function} callback Callback when finished animating
   */
  function animate(object, distance, callback) {
    callback = callback || function() {};

    // Property for animating
    var properties = {};
    properties[settings.side] = distance;

    // Animate
    object.animate(properties, settings.speed, callback);
  }
})(jQuery);
