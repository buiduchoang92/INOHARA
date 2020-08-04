window.addEventListener('scroll', _handleScroll, false);
function _handleScroll() {
	$('header').css({
		'left' : -window.scrollX + 'px'
	});
}

/*click pagetop */
var topModoru = $('#footer .pagetop a');
topModoru.on('click', function() {
	$("html, body").animate({
		scrollTop: 0
	}, 500);
});

/* click toggle */
function toggleMenu() {
	$("#header #toggle").on("click", function () {
	  $("#gNav").toggleClass("is_open");
	  $(this).toggleClass("on");
	});
  }
  function removeMemuOnSp() {
	var windowSize = window.innerWidth;
	if ($("#gNav.is_open").length > 0 && windowSize > 768) {
	  $("#gNav").removeClass("is_open");
	  $("#toggle").removeClass("on");
	}
  }
  toggleMenu();
  $(window).resize(function () {
	removeMemuOnSp();
  });
