

// href=”#”のaタグを取得（→その後、href属性からid名を抜き出す）
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
// for文を回して、aタグそれぞれに対してクリックイベント

// -- 繰り返し処理 1 回目 --
// 1) 初期化式で変数 i に 0 が代入される
// 2) 条件式 i < smoothScrollTrigger.length が true
// 3) console.log("i = " + i); が実行される
// 4) 変化式 i++ が実行されて変数 i の値が 1 となる
  for (let i = 0; i < smoothScrollTrigger.length; i++){
    smoothScrollTrigger[i].addEventListener('click', (e) => {
      e.preventDefault();
      let href = smoothScrollTrigger[i].getAttribute('href');
      let targetElement = document.getElementById(href.replace('#', ''));
      // ターゲットの位置を取得
      const rect = targetElement.getBoundingClientRect().top;
      const offset = window.pageYOffset;
      const gap = 80;
      const target = rect + offset - gap;
      // スムースにスクロールする
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


});

	
