/*
 * jquery.sidemenu.js
 * https://github.com/kami30k/jquery.sidemenu.js
 *
 * Copyright 2015 kami.
 * Released under the MIT license.
 */

;(function($) {
  var settings = {
    side:  'left',
    speed: 400
  };

  var $html,
      $body,
      $menu;

  $.sidemenu = function(options) {
    settings = $.extend(settings, options);
  };

  $.fn.sidemenu = function(name) {
    name = name || 'toggle';

    $html = $('html');
    $body = $('body');
    $menu = $(this);

    methods[name]();
  };

  $(document).ready(function() {
    $('[data-role="sidemenu"]').css(settings.side, '-240px');

    $('[data-role="sidemenu-toggle"]').on('click', function() {
      $(this).sidemenu.call($(this.hash));
    });
  });

  var methods = {
    open: function() {
      $body.css({
        overflowX: 'hidden',
        position:  'absolute',
        width:     $html.width()
      });

      $body.animate(_.hash(settings.side, '240px'), settings.speed);
      $menu.animate(_.hash(settings.side, '0px'),   settings.speed);
    },
    close: function() {
      $body.animate(_.hash(settings.side, '0px'),    settings.speed, function() { $(this).removeAttr('style') });
      $menu.animate(_.hash(settings.side, '-240px'), settings.speed);
    },
    toggle: function() {
      if ($menu.css(settings.side) == '0px') {
        this.close();
      } else {
        this.open();
      }
    }
  };

  var _ = {
    hash: function(key, value) {
      var hash = {};
      hash[key] = value;
      return hash;
    }
  };
})(jQuery);
