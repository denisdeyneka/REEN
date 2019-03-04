// fixed bar
$(function(){
	createSticky($("#sticky-header"));
});

function createSticky(sticky) {
	
	if (typeof sticky !== "undefined") {
		var	pos = sticky.offset().top,
				win = $(window);
			
		win.on("scroll", function() {
    		win.scrollTop() >= pos ? sticky.addClass("fixed") : sticky.removeClass("fixed");      
		});			
	}
} 

// big slick-carousel

$('.big-carousel').slick({
	prevArrow: $('.big-prev'),
	nextArrow: $('.big-next'),
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	dots: true,
});

//small slick-carousel

$('.small-carousel').slick({
	prevArrow: $('.prev'),
	nextArrow: $('.next'),
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [
	{
		  breakpoint: 1024,
		  settings: {
		    slidesToShow: 3,
		    slidesToScroll: 3,
		    infinite: true,
		    dots: true,
	  }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//burger-menu

$('.menu-toggle').click(function() {
  $('ul').toggleClass('opening');
  $(this).toggleClass('open');
})

//scroll- up button

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("up-button").style.display = "block";
  } else {
    document.getElementById("up-button").style.display = "none";
  }
}

function topFunction() {
$('html,body').animate({
        scrollTop: $("header").offset().top},
        'slow');
}
