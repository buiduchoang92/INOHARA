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
	  $("#gNav").toggleClass("open");
	  $(this).toggleClass("on");
	});

  }
  function removeMemuOnSp() {
	var windowSize = window.innerWidth;
	if ($("#gNav.open").length > 0 && windowSize > 768) {
	  $("#gNav").removeClass("open");
	  $("#toggle").removeClass("on");
	}
  }
  toggleMenu();
  $(window).resize(function () {
	removeMemuOnSp();
  });
  $(document).ready(function() {
    $("#formContact").validate({
        rules: {
			personal_name: "requierd",
            email: "required",
			content_contact: "required"
        },
        messages: {
            personal_name: "未入力です。",
            email: "未入力です。",
            content_contact: "未入力です。"
        }
    });
});
