$(function () {

  // $('.menu__btn').on('click', function(){
  //   $('.menu__list').slideToggle();
  // }); Для бургера!

  $('.header__slider').slick({
    dots: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

   $('.slider__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    // asNavFor: '.slider__nav'
  });
  $('.slider__nav').slick({
    slidesToShow: 4,
    asNavFor: '.slider__big',
    variableWidth: true,
    centerMode: true,
    focusOnSelect: true
  });

  $('.header__menu-btn').on("click", function () {
    $('.header__menu > ul').slideToggle();
  });
  // $('.about__tabs .tab').on('click', function(event) {
  // var id = $(this).attr('data-id');
  //   $('.about__tabs').find('.tab-item').removeClass('active-tab').hide();
  //   $('.about__tabs .tabs').find('.tab').removeClass('active');
  //   $(this).addClass('active');
  //   $('#'+id).addClass('active-tab').fadeIn();
  //   return false; Табы
  // });

});