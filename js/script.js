window.addEventListener('scroll', _handleScroll, false);
function _handleScroll() {
	$('header').css({
		'left' : -window.scrollX + 'px'
	});
}

var topModoru = $('#footer .pagetop');
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
			"personal_name": {required:true},
            "email": {required:true,email:true},
			"content_contact": {required:true}
        },
        messages: {
            "personal_name":{required: "未入力です。"},
            "email": {required: "未入力です。", email: "入力に誤りがあります。"},
            "content_contact":{required: "未入力です。"}
        }
    });
});
