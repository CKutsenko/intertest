// window.$ = window.jQuery =  require('jquery');
// window.slick =              require('./vendor/bower/slick');

jQuery(document).ready(function($){

  /* Hamburger */
  $('.nav__hamburger').click(function(e){
    e.preventDefault();
    $('.nav__list').toggle();
    $('.nav__hamburger').toggleClass('hamburger-active');
  });

  $('.nav__subhamburger-1').click(function(e){
    e.preventDefault();
    $('.nav__sub-menu--1').toggle();
    $('.nav__subhamburger-1').toggleClass('subhamburger-active');
  });

    $('.nav__subhamburger-2').click(function(e){
    e.preventDefault();
    $('.nav__sub-menu--2').toggle();
    $('.nav__subhamburger-2').toggleClass('subhamburger-active');
  });


    $('.search__icon').click(function(e){
   e.preventDefault();
   $('.search__form').toggle();
  });


    // var map = new GMaps({
    //     el: '.office__map',
    //     lat: 56.8378081,
    //     lng: 60.5950772,
    //     scrollwheel: false
    // });
    // map.addMarker({
    //     lat: 56.8378081,
    //     lng: 60.5950772,
    // });

  $('.faq__subtitle').click(function(e){
    e.preventDefault();
    if($(this).next('.faq__subtext').is(":visible")) {
      $(this).next('.faq__subtext').slideUp();
      $(this).addClass('subtitle-close');
    } else {
      $(this).closest('.faq__accordion').find('.faq__subtext').slideUp();
      $(this).closest('.faq__accordion').find('.faq__subtitle').addClass('subtitle-close');
      $(this).next('.faq__subtext').slideDown();
      $(this).removeClass('subtitle-close');
    }
  });

  var link_href;
$('.form-inner__tabs-link a').on('click', function(e){
  e.preventDefault();

  $(this)
    .closest('.form-inner__tabs-list')
    .find('.form-inner__tabs-link.active')
    .removeClass('active');
  $(this)
   .closest('.form-inner__tabs-link')
   .addClass('active');

  $(this)
   .closest('.form-inner__tabs')
   .find('.form-inner__tab-item.active')
   .removeClass('active');
  link_href = $(this).attr('href');
  $(link_href).addClass('active');
});

$('.page-about-us__tabs-link a').on('click', function(e){
  e.preventDefault();

  $(this)
    .closest('.page-about-us__tabs-list')
    .find('.page-about-us__tabs-link.active')
    .removeClass('active');
  $(this)
   .closest('.page-about-us__tabs-link')
   .addClass('active');

  $(this)
   .closest('.page-about-us__tabs')
   .find('.page-about-us__tab-item.active')
   .removeClass('active');
  link_href = $(this).attr('href');
  $(link_href).addClass('active');
});

  /* Scroll to top */

  $(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 102) {
            $('.totop').fadeIn();
        } else {
            $('.totop').fadeOut();
        }
    });

    $('.totop').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});


  /* галерея About-us */
  $('.page-about-us__img-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 1
  });


  /* галерея Promo slider */
  $('.promo-slider').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    speed: 500,
    fade: true,
     cssEase: 'linear'
  });


  /* галерея "с нами уже работают" */
  if ($(window).width() <= 480) {
    $('.reviews-block__wrapper').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else if ($(window).width() <= 768) {
    $('.reviews-block__wrapper').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 2,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  } else {
    $('.reviews-block__wrapper').slick({
      infinite: true,
      arrows: true,
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0'
    });
  }


  /* кнопка "наверх" */
  $('.side-fixed-menu__link--up').click(function(e) {
      e.preventDefault();
      $('html, body').animate({scrollTop: 0},1000);
      return false;
  });

  /* галерея Reviews */
  $('.reviews__gallery').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    variableWidth: true
  });
    / Map /
    var map = new GMaps({
        el: '.map',
        lat: 56.8378081,
        lng: 60.5950772,
        scrollwheel: false
    });
    // map.addMarker({
    //     lat: 56.8378081,
    //     lng: 60.5950772
    // });
    map.drawOverlay({
        lat: 56.8378081,
        lng: 60.5950772,
        content: '<img src="img/map.png">'
});
  $(window).bind('scroll', function () {
    if ($(window).scrollTop() > 100) {
        $('.nav').addClass('fixed');
    } else {
        $('.nav').removeClass('fixed');
    }
});
});

