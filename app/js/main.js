var siteNavigation = (function() {

	return {

		init: function() {
			var menu = $('.menu');
			var button = $('.icon-menu2');

			button.on('click', function() {
				menu.fadeToggle();
			});

			$(window).resize(function(){
				if ($(window).width() >= 1200) {
					menu.fadeIn(.1);
				}

				if ($(window).width() < 1200) {
					menu.fadeOut(.1);
				}	
			});
			
		}
	}
})();


$(document).ready(function() {
	siteNavigation.init();
});