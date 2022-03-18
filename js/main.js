$(function () {
    
  $(".menu a, .go__top").on("click",function (e) {
		e.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
  
  $('.slider-blog__inner').slick({
    dots: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="images/left.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="images/right.svg" alt=""></button>',
     responsive: [
     {
      breakpoint: 769,
         settings: {
           arrows: false      
       }
     },
    ]
  });

  $('.menu__btn, .menu a').on('click', function () {
    $('.header__top-inner').toggleClass('header__top-inner--active')
  });


  var mixer = mixitup('.portfolio__content');
});