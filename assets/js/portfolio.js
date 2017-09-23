
// mouseover effects for portfolio tab
	$('.div-image').mouseover(function() {
	  $(this).find('.text-in-image').css({
	  	"visibility" : "visible"
	  });
	  $(this).find("img").css({"opacity" : ".3"});
	});

	$('.div-image').mouseout(function() {
	  $(this).find('.text-in-image').css("visibility","hidden");
	  $(this).find("img").css({"opacity" : "1"});
	});


