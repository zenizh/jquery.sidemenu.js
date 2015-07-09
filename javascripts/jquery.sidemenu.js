/*
 * jquery.sidemenu.js
 * https://github.com/kami30k/jquery.sidemenu.js
 *
 * Copyright 2015 kami.
 * Released under the MIT license.
 */

;(function($) {
  /**
   * Initialize side menu.
   */
  function initialize() {
    $('[data-role=sidemenu-toggle]').on('click', function(e) {
      e.preventDefault();

      var container = $('[data-role=sidemenu-container]');

      container.toggleClass('is-active');

      if (container.hasClass('is-active')) {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
      }
    });
  }

  $(document).ready(function() {
    initialize();

    // Support for Turbolinks
    if (typeof Turbolinks !== 'undefined') {
      $(document).on('page:load', function() {
        initialize();
      });
    }
  });
})(jQuery);
