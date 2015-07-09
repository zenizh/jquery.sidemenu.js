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
      $('[data-role=sidemenu-container]').toggleClass('is-active');
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
