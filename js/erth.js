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


ScrollReveal().reveal('.delay', { delay: 3000 });
ScrollReveal().reveal('.resume-image', { delay: 100 });
ScrollReveal().reveal('.exp1', { delay: 200 });
ScrollReveal().reveal('.exp2', { delay: 400 });
ScrollReveal().reveal('.exp3', { delay: 600 });
ScrollReveal().reveal('.resume2', { delay: 400 });
ScrollReveal().reveal('.resume3', { delay: 400 });
ScrollReveal().reveal('.resume4', { delay: 400 });

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
	 transform: "translate(0px, -'+ wScroll / 40 +'%)"
   });
  });
  
/* Text Wrapper */
// Wrap every letter in a span
var textWrapper = document.querySelector('.ml11 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
  setTimeout(
	function() 
	{
	    $('.ml11').remove();
	}, 3000);
