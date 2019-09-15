var cursor = $(".cursor"),
	follower = $(".follow");

var posX = 0,
	posY = 0;

var mouseX = 0,
	mouseY = 0;

TweenMax.to({}, 0.016, {
	repeat: -1,
	onRepeat: function() {
		posX += (mouseX - posX) / 9;
		posY += (mouseY - posY) / 9;

		TweenMax.set(follower, {
			css: {    
				left: posX - 12,
				top: posY - 12
			}
		});

		TweenMax.set(cursor, {
			css: {    
				left: mouseX,
				top: mouseY
			}
		});
	}
});

$(document).on("mousemove", function(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
});

$("a").on("mouseenter", function() {
	cursor.addClass("active");
	follower.addClass("active");
});
$("a").on("mouseleave", function() {
	cursor.removeClass("active");
	follower.removeClass("active");
});

ScrollReveal().reveal('.menu', { delay: 200 });

ScrollReveal().reveal('.back-button', { delay: 100 });
ScrollReveal().reveal('.card1', { delay: 200 });
ScrollReveal().reveal('.card2', { delay: 400 });
ScrollReveal().reveal('.card3', { delay: 600 });
ScrollReveal().reveal('.card4', { delay: 800 });
ScrollReveal().reveal('.card5', { delay: 1000 });
ScrollReveal().reveal('.card6', { delay: 1200 });
ScrollReveal().reveal('.card7', { delay: 1400 });
ScrollReveal().reveal('.card8', { delay: 1600 });

/* Work details */
$(window).scroll(function() {
	var wScroll = $(this).scrollTop();
	$(".logo").css({
	  transform: "translate(0px, " + wScroll / 2 + "%)"
	});
	$(".back-bird").css({
	  transform: "translate(0px, " + wScroll / 4 + "%)"
	});
	 $('.fore-bird').css({
	 'transform':'translate(0px, -'+ wScroll / 40 +'%)'
   });
  });
  
/* full page scroll */
