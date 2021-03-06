var siteNavigation = (function() {

	return {

		init: function() {
			var menu = $('.menu');
			var button = $('.icon-menu2');
			var menuWrap = $('.menu-wrap');

			button.on('click', function() {
				$that = $(this);
				var menu = $that.parent().find('.menu');
				menu.fadeToggle();
			});

			$(window).resize(function(){
				if ($(window).width() >= 992) {
					menu.fadeIn(.1);
				}

				if ($(window).width() < 992) {
					menu.fadeOut(.1);
				}

				var bg = $('.bg-fone-left');
				var containter = $('.containter');
				var body = $('body').width();

				bg.width(body/3 + containter.width()/6);
			});
			
		}
	}
})();


$(document).ready(function() {
	siteNavigation.init();
});