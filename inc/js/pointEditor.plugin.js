// Wtyczka jQuery tabs
// autor: Patryk yarpo Jar
// data: 25 maja 2010 r.
// wymaga jQuery [jquery.com]

// uzycie: $(id).tabs({interval: int, index: int, classActive : string})

(function($) {
	$.fn.extend({ 

		pointEditor: function(options) {

			//var options = $.extend(defaults, options);


			return this.each(function() {

				var tr = $(this).parent().parent();
				tr.
					find('input[type^="bu"]').fadeIn(2000).
					end().
					find('input[type^="te"]').each(function() {
						var self = $(this);
						self.
							css({background: '#ddd'}).
							focus(function() { this.value = this.title; }).
							blur(function() { 
								this.title = this.value; 
								this.value = Math.decimal(this.value, 3);
							});
					});
					
			});
		}
	});
})(jQuery);
