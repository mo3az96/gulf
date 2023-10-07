$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  sal({
    once: true,
  });
  /************************************ Side Menu ************************************/
  if ($(window).width() <= 767) {
    $(".menu-btn").on("click", () => {
      $(".menu-overlay").fadeIn(500);
      $(".header-nav").addClass("active");
      $("body").addClass("overflow");
    });

    $(".menu-close,.menu-overlay").on("click", () => {
      $(".menu-overlay").fadeOut(500);
      $(".header-nav").removeClass("active");
      $("body").removeClass("overflow");
    });

    $(".has-children>a").click(function (e) {
      e.preventDefault();
      e.stopPropagation();
      $(".has-children>a").not(this).removeClass("active");
      $(this).toggleClass("active");
      if ($(this).siblings().css("display") == "none") {
        $(this).siblings().slideDown(500);
      } else {
        $(this).siblings().slideUp(500);
      }
      $(".has-children>a").not(this).siblings().slideUp(500);
    });
  }

  /************************************ Main Slider ************************************/
  var mainSwiper = new Swiper(".main-slider .swiper", {
    a11y: {
      enabled: false,
    },
    spaceBetween: 10,
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
    },
    // effect: "fade",
    navigation: {
      nextEl: ".main-slider .swiper-button-next",
      prevEl: ".main-slider .swiper-button-prev",
    },
    pagination: {
      el: ".main-slider .swiper-pagination",
      clickable: true,
    },
  });
  /************************************ Products Sliders ************************************/
  var cat1Swiper = new Swiper(".cat1-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 29,
      },
    },
    pagination: {
      el: ".cat1-slider .swiper-pagination",
      clickable: true,
    },
  });
  var cat2Swiper = new Swiper(".cat2-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 29,
      },
    },
    pagination: {
      el: ".cat2-slider .swiper-pagination",
      clickable: true,
    },
  });
  var relatedSwiper = new Swiper(".related-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 29,
      },
    },
    pagination: {
      el: ".related-slider .swiper-pagination",
      clickable: true,
    },
  });
  /************************************ Products Sliders ************************************/
  var partnerSwiper = new Swiper(".partners-slider .swiper", {
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
      767: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 28,
      },
      1199: {
        slidesPerView: 6,
        spaceBetween: 28,
      },
    },
    pagination: {
      el: ".partners-slider .swiper-pagination",
      clickable: true,
    },
  });

  /************************************ Arrow Top ************************************/
  $(window).scroll(function () {
    $(this).scrollTop() >= 500
      ? $(".arrow-top").fadeIn(500)
      : $(".arrow-top").fadeOut(500);
  });
  $(".arrow-top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });

  /************************************ Product Imgs ************************************/
  var productThumbs = new Swiper(".product-thumbs", {
    // loop: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    breakpoints: {
      0: {
        spaceBetween: 4,
        slidesPerView: 3,
      },
      767: {
        spaceBetween: 4,
        slidesPerView: 4,
      },
      992: {
        spaceBetween: 4,
        slidesPerView: 3,
      },
      1199: {
        spaceBetween: 4,
        slidesPerView: 4,
      },
    },
  });

  var productImgs = new Swiper(".product-imgs .swiper", {
    spaceBetween: 15,
    // loop: true,
    thumbs: {
      swiper: productThumbs,
    },
    navigation: {
      nextEl: ".product-imgs .swiper-button-next",
      prevEl: ".product-imgs .swiper-button-prev",
    },
  });

  /************************************ Accordion ************************************/
  $(".accordion-head").click(function () {
    $(".accordion-head").not(this).removeClass("active");
    if ($(this).siblings().css("display") == "none") {
      $(this).addClass("active").siblings().slideDown(500);
    } else {
      $(this).removeClass("active").siblings().slideUp(500);
    }
    $(".accordion-head").not(this).siblings().slideUp(500);
  });
});
