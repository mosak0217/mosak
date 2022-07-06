'use strict';

$('.slick_area').slick({
  dots: true,
  infinite: true,
  autoplay: true,
  fade: true,
  speed: 400,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true,
  prevArrow: '<button class="slide-arrow prev-arrow"></button>',
    nextArrow: '<button class="slide-arrow next-arrow"></button>',
  
 
  
  
  
      responsive: [
        {
          breakpoint: 1024, // 768〜1023px以下のサイズに適用
          settings: {
            fade: true,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 768, // 480〜767px以下のサイズに適用
          settings: {
            fade: true,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 480, // 〜479px以下のサイズに適用
          settings: {
            fade: true,
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 380, // 〜479px以下のサイズに適用
          settings: {
            fade: true,
            slidesToShow: 1,
          },
        },
      ],
  });







	$('.q').click(function(){
  $(this).siblings('.a').stop().slideToggle();
  $('.q').not($(this)).siblings('.a').slideUp();
  $(this).toggleClass('active');
  $('.q').not($(this)).removeClass('active');
});


// ハンバーガーメニューのクリックイベント
$('.hamberger_btn').on('click', function() {
  // #headerにopenクラスが存在する場合
  if ($('#header').hasClass('open')) {
    // openクラスを削除
    // openクラスを削除すると、openクラスのCSSがはずれるため、
    // メニューが非表示になる
    $('#header').removeClass('open');

  // #headerにopenクラスが存在しない場合
  } else {
    // openクラスを追加
    // openクラスを追加すると、openクラスのCSSが適応されるため、
    // メニューが表示される
    $('#header').addClass('open');
  }
});

// メニューが表示されている時に画面をクリックした場合
$('#mask').on('click', function() {
  // openクラスを削除して、メニューを閉じる
  $('#header').removeClass('open');
});

// メニューが表示されている時に画面をクリックした場合
$('.header_nav_item').on('click', function() {
  // openクラスを削除して、メニューを閉じる
  $('#header').removeClass('open');
});


$(document).ready(function ($){
  // フェードイン
  $(window).scroll(function () {
      $('.fadeIn').each(function () {
          var scroll = $(window).scrollTop(); // 現在のスクロール位置
          var offset = $(this).offset().top; // 対象の上からの位置
          var windowHeight = $(window).height(); // ウィンドウの高さ
          if (scroll > offset - windowHeight + 150) {
              $(this).addClass("scrollIn");
          }
      });
  });
});

	
