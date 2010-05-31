// Wtyczka jQuery tabs
// autor: Patryk yarpo Jar
// data: 25 maja 2010 r.
// wymaga jQuery [jquery.com]

// uzycie: $(id).tabs({interval: int, index: int, classActive : string})

(function($) {
	$.fn.extend({ 

		tabs: function(options) {

			var defaults = {
				index       : 0,
				interval    : -1,
				classActive : 'active'
			};

			var options = $.extend(defaults, options);

			return this.each(function() {

				var aDivs = [],
					obj = $(this);

				function change(that) {

					var re = /([_\-\w]+$)/i,
						param = re.exec(that.href)[1],
						target = $('#' + param);

					if (target.size() == 0) {
						param = '#' + that;
						target = $(param);
					}

					if (target.size() > 0) {
						$('>div:visible', obj).hide();
						target.slideDown();
						$('>ul>li>a', obj).removeClass(options['classActive']);
						$('>ul>li>a[href="'+ param +'"]', obj).addClass(options['classActive']);
					}
				}

				// uruchamia czasowy przelacznik zakladek
				function switcher() {

					change(aDivs[options['index']]);
					options['index'] = (options['index']+1)%aDivs.length;
					window.setTimeout(arguments.callee, options['interval']);
				}

				(function initializePlugin() {

					$('>div', obj). // zlap wszystkie divy bezposrednie dzieci id
						each(function() {
							if ('undefined' !== typeof this.id) {
								aDivs.push(this.id); // pobierz id do tablicy
							}
						}).
						not(':eq(' + options['index'] + ')'). // wylacz ze zbioru wyswietlany
						hide(); // schowaj pozostale

					$('>ul>li>a', obj).click(function() {
						change(this);
						$(this).addClass(options['classActive']);
						return false;
					});

					if (-1 != options['interval']) {
						switcher();
					}
					else if ('undefined' !== typeof aDivs[0]) {
						change(aDivs[0]);
					}
				})();
			});
		}
	});
})(jQuery);
