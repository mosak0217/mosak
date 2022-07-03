'use strict';

const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 80;
      const target = rect + offset - gap;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });

$('.slick_area').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true

});

	$('.q').click(function(){
  $(this).siblings('.a').stop().slideToggle();
  $('.q').not($(this)).siblings('.a').slideUp();
  $(this).toggleClass('active');
  $('.q').not($(this)).removeClass('active');
});

$('.hamberger_btn').on('click', function() {
  if ($('#header').hasClass('open')) {
    $('#header').removeClass('open');

  } else {
    $('#header').addClass('open');
  }
});

$('#mask').on('click', function() {
  $('#header').removeClass('open');
});

$('.header_nav_item').on('click', function() {
  // openクラスを削除して、メニューを閉じる
  $('#header').removeClass('open');
});


});

	
