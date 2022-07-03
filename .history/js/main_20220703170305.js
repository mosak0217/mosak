'use strict';

$(function(){
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

  $('#nav a').on('click', function() {
    $('#header').removeClass('open');
  });

  $('a[href^="#"]').click(function(){
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top;
    $("html, body").animate({scrollTop:position}, 600, "swing");
    return false;
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




	
