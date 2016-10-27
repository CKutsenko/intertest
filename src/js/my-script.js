window.$ = window.jQuery =  require('jquery');
window.slick =              require('./vendor/bower/slick');

jQuery(document).ready(function($){

  /* Hamburger */
  $('.hamburger').click(function(e){
    e.preventDefault();
    $('.nav__list-wrapper').toggle();
  });

  /* City list */
  $('.city__name').click(function(){
    $('.city__dropdown').toggle();
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

// Set map
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 8
  });
}

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


  /* Gratitude in the modal window */
  $('.gratitude__link').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
    $(this).closest('.gratitude__slide').find('.gratitude__modal').clone().appendTo($('.overlay'))
    .show()
    .animate({opacity: 1}, 200);
  });
  /* Close the modal window */
  $('.overlay').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).find('.gratitude__modal')
      .animate({opacity: 0}, 200,
        function(){
          $(this).remove();
          $('.overlay').fadeOut(400);
        }
      );
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

  /* Side fixed menu showing */
  $(".side-fixed-menu").animate({right: 0}, 1000)

  $('.side-fixed-menu__link--toggle').click(function(e){
    e.preventDefault();
    var sideFixedDetails = $(this).siblings($('.side-fixed-details'));
    if($(sideFixedDetails).is(":visible")){
      $(sideFixedDetails).hide();
    } else if($('.side-fixed-details:not(sideFixedDetails)').is(":visible")) {
      $('.side-fixed-details').hide();
      $(sideFixedDetails).show();
    } else {
      $(sideFixedDetails).show();
    }
  });

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
  /* Gratitude in the modal window */
  $('.reviews__link').click( function(e){
    e.preventDefault();
    $('body').css({"overflow":"hidden"});
    $('.overlay').show();
    $(this).closest('.reviews__slide').find('.reviews__modal').clone().appendTo($('.overlay'))
    .show()
    .animate({opacity: 1}, 200);
  });
  /* Close the modal window */
  $('.overlay').click( function(){
    $('body').css({"overflow":"auto"});
    $(this).find('.reviews__modal')
      .animate({opacity: 0}, 200,
        function(){
          $(this).remove();
          $('.overlay').fadeOut(400);
        }
      );
  });


});


