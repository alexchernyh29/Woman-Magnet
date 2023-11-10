import $ from 'jquery';
import slick from "slick-carousel";
import WOW from "wowjs";

$(() => {

  const wow = new WOW.WOW({
		live: false,
		boxClass: "wow",
	});

	wow.init();

  $('.sliders__wrap__list').slick({
    infinite: true, 
    slidesToShow: 3, 
    slidesToScroll: 1,
    vertical: false,
    variableWidth: true,
    speed: 200,
    centerMode: true,
    swipe: true,
    swipeToSlide: 1,
    prevArrow: $('.sliders__wrap__button-prev'),
    nextArrow: $('.sliders__wrap__button-next'),
  });

  $('.sliders__wrap__list').on('swipe', function(event, slick, direction){
    console.log(direction);
    // left
  });

  $('.sliders__slider').on('afterChange', function(event, slick, currentSlide){
    let currentSlideIndex = currentSlide + 1;
    let totalSlides = slick.slideCount;
    let counterText = currentSlideIndex + '/' + totalSlides;
    $('.sliders__slider__counter-number').text(counterText);
  });
    
  function initSlider() {
    $('.content__wrap__slider-content').slick({
      infinite: true, 
      slidesToShow: 1, 
      slidesToScroll: 1,
      vertical: false,
      variableWidth: true,
      speed: 200,
      centerMode: true,
      prevArrow: $('.content__wrap__button-prev'),
      nextArrow: $('.content__wrap__button-next'),
    });
  }

  function destroySlider() {
    // Если слайдер уже инициализирован, уничтожьте его
    if ($('.content__wrap__slider-content').hasClass('slick-initialized')) {
      $('.content__wrap__slider-content').slick('unslick');
    }
  }

  // Функция, которая будет вызвана при изменении размера окна
  function handleSliderBasedOnResolution() {
    if (window.innerWidth <= 768) {
      initSlider();
    } else {
      destroySlider();
    }
  }

  // Вызов функции при загрузке страницы
  handleSliderBasedOnResolution();

  // Добавление обработчика события на изменение размера окна
  $(window).on('resize', function () {
    handleSliderBasedOnResolution();
  });

  // $(".promo__list__card-link-text").on('click', function(event) {
  //   event.preventDefault();

  //   let promoCard = $(this).closest(".promo__list__card");
  //   let cardImageSrc = promoCard.find(".promo__list__card-img img").attr("src");
  //   let cardTitle = promoCard.find(".promo__list__card-title").text();
  //   let cardSubtitle = promoCard.find(".promo__list__card-subtitle").text();


  //   if (cardTitle && cardSubtitle && cardImageSrc) {
  //     $(".content__wrap__content-item-image").html('<img src="' + cardImageSrc + '" alt=""/>');
  //     $(".content__wrap__content-name").text(cardTitle);
  //     $(".content__wrap__content-surname").text(cardSubtitle);
  //   }
  // });
});
