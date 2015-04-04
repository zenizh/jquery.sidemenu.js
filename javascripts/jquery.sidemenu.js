;(function($) {
  var settings = {
    direction: 'left',
    speed:     400
  };

  var $html,
      $body,
      $menu;

  function hash(key, value) {
    var hash = {};
    hash[key] = value;
    return hash;
  }

  var methods = {
    open: function() {
      $body.css({
        overflowX: 'hidden',
        position:  'absolute',
        width:     $html.width()
      });

      $body.animate(hash(settings.direction, '240px'), settings.speed);
      $menu.animate(hash(settings.direction, '0px'),   settings.speed);
    },
    close: function() {
      $body.animate(hash(settings.direction, '0px'),    settings.speed, function() { $(this).removeAttr('style') });
      $menu.animate(hash(settings.direction, '-240px'), settings.speed);
    },
    toggle: function() {
      if ($menu.css(settings.direction) == '0px') {
        this.close();
      } else {
        this.open();
      }
    }
  };

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
    $('[data-role="sidemenu"]').css(settings.direction, '-240px');

    $('[data-role="sidemenu-toggle"]').on('click', function() {
      $(this).sidemenu.call($(this.hash));
    });
  });
})(jQuery);
