$('.slick_area').slick({
  infinite: true,
  autoplay: true,
  slidesToShow: 3,
  slidesToScroll: 3,
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