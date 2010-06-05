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
								this.value = Math.decimal(this.value, 3);
							});
					});
					
			});
		}
	});
})(jQuery);

(function($) {
    $.fn.extend({
        bubbleSpeech: function(options) {
            var defaults = {
                description : 'Hello World'
            };
           options = $.extend(defaults, options);
           return this.each(function() {
                var self = $(this); // [1]
                self.mouseover(function() {
                    var zIndex = self.css('z-index'); // [2]
                    $('<span class="bubble">').
                        attr({'zindex' : zIndex}). // [3]
                        html(options.description).
                        appendTo(self);
                    self.css({'z-index' : 10000000000}); // [4]
                }).mouseout(function() {
                    var bubble = self.find('span.bubble'); // [5]
                    var zIndex = bubble.attr('zindex'); // [6]
                    self.css({'z-index' : zIndex}). // [7]
                        find('span.bubble').remove(); // [8]
                });
            });
        }
    }); 
})(jQuery);
