if (typeof $.fn.simpleScroll == "undefined")
{
	(function( $ ) {
	$.fn.simpleScroll = function(duration)
	{

	if (!duration)
		duration = 1000;

	if (typeof this.offset != "undefined" && this.offset() !== null)
		return $('html, body').animate({scrollTop: this.offset().top}, duration);

	return false;

	};
	})( jQuery );
}