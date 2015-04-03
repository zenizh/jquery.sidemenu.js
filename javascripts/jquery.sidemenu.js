;(function($) {
  $.sidemenu = function(options) {
    $.sidemenu.options = $.extend($.sidemenu.options, options);
  };

  $.sidemenu.options = {
    direction: 'left',
    speed:     1000
  };

  $.fn.sidemenu = function(action) {
    action = action || 'open';

    $(this.hash).show();
  };

  $(document).ready(function() {
    $('[data-role="sidemenu"]').hide();

    $('[data-role="sidemenu-toggle"]').on('click', function() {
      $(this).sidemenu.call(this, 'toggle');
    });
  });
})(jQuery);
