$('.slick_area').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerMode: true,

  responsive: [

    {
      breakpoint: 768, 
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480, 
      settings: {
        slidesToShow: 1,
      },
    },
  ],
  
});