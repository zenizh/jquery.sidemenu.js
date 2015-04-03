;(function($) {
  var settings = {
    direction: 'left',
    speed:     1000
  };

  var methods = {
    open: function(object) {
      $(object.hash).show();
    },
    close: function(object) {
      $(object.hash).hide();
    },
    toggle: function(object) {
      if ($(object.hash).is(':visible')) {
        this.close(object);
      } else {
        this.open(object);
      }
    }
  };

  $.sidemenu = function(options) {
    settings = $.extend(settings, options);
  };

  $.fn.sidemenu = function(name) {
    name = name || 'open';

    methods[name](this);
  };

  $(document).ready(function() {
    $('[data-role="sidemenu"]').hide();

    $('[data-role="sidemenu-toggle"]').on('click', function() {
      $(this).sidemenu.call(this, 'toggle');
    });
  });
})(jQuery);
