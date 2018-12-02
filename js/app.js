$(function() {
	$(window).scroll(function() {
		/* affix after scrolling 100px */
		if ($(document).scrollTop() > 100) {
			$("nav").addClass("shrink");
		} else {
			$("nav").removeClass("shrink");
		}
	});
	detectmob();
	// HIDING THE POPOVER IN A MOBILE VIEWPORT
	function detectmob() {
		if (window.innerWidth <= 800) {
			$('[data-toggle="popover"]').popover("hide");
			console.log("if popover");
		} else {
			return $('[data-toggle="popover"]').popover();
		}
		console.log("else popover");
	}
});
