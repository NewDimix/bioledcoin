function timer() {
  var element=document.getElementById('js-sec');
  if(!element){return;}

  var d = new Date();
  var x = new Date("01 Feb 2018 00:00");

  d.setTime(Date.parse(x));

  var days = Math.floor(-((+new Date - d) / 1000 / 60 / 60 / 24));
  var hours = Math.floor(-((+new Date - d) / 1000 / 60 / 60));
  var minutes = Math.floor(-((+new Date - d) / 1000 / 60));
  var seconds = (Math.floor(-((+new Date - d) / 1000))) - (minutes * 60);
  minutes = minutes - (hours * 60);
  hours = hours - (days * 24);

  if (days < 0) {
    days = "0";
    hours = "0";
    minutes = "0";
    seconds = "0";
  };

  if (days <= 9) days = "0" + days;
  if (hours <= 9) hours = "0" + hours;
  if (minutes <= 9) minutes = "0" + minutes;
  if (seconds <= 9) seconds = "0" + seconds;

  if (document.layers) {
    document.layers.doc_time.document.write(seconds);
    document.layers.doc_time.document.write(minutes);
    document.layers.doc_time.document.write(hours);
    document.layers.doc_time.document.write(days);
    document.layers.doc_time.document.close();
  } else
    document.getElementById("js-sec").innerHTML = seconds;
    document.getElementById("js-min").innerHTML = minutes;
    document.getElementById("js-hours").innerHTML = hours;
    document.getElementById("js-days").innerHTML = days;

  setTimeout("timer()", 1000);
};

timer();

objectFit.polyfill({
  selector: '.js-news-img',
  fittype: 'cover',
  disableCrossDomain: 'true'
});

objectFit.polyfill({
  selector: '.js-team-img',
  fittype: 'cover',
  disableCrossDomain: 'true'
});



$(window).on('load', function () {
  $preloader = $('.js-loader'),
  $loader = $preloader.find('.loader__img');
  $loader.fadeOut();
  $preloader.delay(0).fadeOut('slow');

  $('.js-menu-btn').click(function (event) {
    $('.js-menu-content').slideToggle();
    event.stopPropagation();
    $('.js-menu-content > li span + ul').slideUp();
    $('.js-menu-content > li span').removeClass('open');
    $('.js-menu-btn').toggleClass('open');
  });

  $(document).mouseup(function (e) {
    var container = $('.js-menu li');
    if (container.has(e.target).length === 0) {
      $('.js-menu-content > li span + ul').slideUp();
      $('.js-menu-content > li span').removeClass('open');
      $('.js-menu-content > li').removeClass('active');
      $('.js-menu-content > li:first-child').addClass('active');
    }
    container = $('.js-menu');
    if (container.has(e.target).length === 0) {
      if ($(window).width() < '480') {
        $('.js-menu-content').slideUp();
        $('.js-menu-btn').removeClass('open');
      }
    }
  });

  $(function () {
    $.myfn = function (li) {
      $(li + ' > span').on('click', function () {
        var thisContent = $(this).siblings('ul');
        $(li + ' span + ul').not(thisContent).slideUp();
        $(this).siblings('ul').slideToggle();

        $(li + ' span').not(this).removeClass('open');
        $(this).toggleClass('open');

        $(li).not(this).removeClass('active');
        $(this).parent().toggleClass('active');
      });
    };

    $.myfn('.js-menu-content > li');
    $.myfn('.js-menu-content > li > ul > li');
  });

  $(".js-menu").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 500);
  });

  (function($) {
    $(function() {
      $('.js-langauge').styler();
      $('.js-modal').styler();
    });
  })(jQuery);

  $('.js-roadmap-slider').slick({
    dots: true,
    infinite: true,
    fade: true,
    speed: 700,
    dotsClass: "roadmap__dots",
    arrows: false,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="roadmap__arrows roadmap__arrows_prev"><span>Previous</span></button>',
    nextArrow: '<button type="button" class="roadmap__arrows roadmap__arrows_next"><span>Next</span></button>',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
          arrows: true,
          fade: false
        }
      }
    ]
  });

  $('.js-news-slider').slick({
    dots: false,
    infinite: false,
    centerMode: false,
    variableWidth: true,
    slidesToShow: 2,
    prevArrow: '<button type="button" class="news__arrows news__arrows_prev"><span>Previous</span></button>',
    nextArrow: '<button type="button" class="news__arrows news__arrows_next"><span>Next</span></button>',
    responsive: [
      {
        breakpoint: 1284,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      },
      {
        breakpoint: 670,
        settings: {
          variableWidth: false,
          slidesToShow: 1
        }
      }
    ]
  });

//  $('.js-news2-slider').slick({
//    slidesPerRow: 3,
//    rows: 2,
//    adaptiveHeight: true,
//    responsive: [
//    {
//      breakpoint: 1284,
//      settings: {
//        slidesPerRow: 2,
//        variableWidth: false,
//        centerMode: true,
//        rows: 2,
//      }
//    }
//  ]
//});

//  $('.js-nav-left-btn').click(function (event) {
//    var width = parseInt($('.js-nav-left').css('left'),10);
//
//    $('.js-nav-left').animate({
//      left: (width == 0) ? -$('.js-nav-left').outerWidth() : 0
//    });
//
//    $('.js-nav-left-btn').toggleClass('open');
//  });

  var animateTest = function() {
    var left = parseInt($('.js-nav-left').css('left'),10);

    $(this).unbind('click');

    $('.js-nav-left').animate(
      {
        left: (left == 0) ? -$('.js-nav-left').outerWidth() : 0
      },
      400,
      (function(){
        $('.js-nav-left-btn').bind('click', animateTest);
      })
    );

    $('.js-nav-left-btn').toggleClass('open');
  };

  $.hideNav = function () {
    var left = parseInt($('.js-nav-left').css('left'),10);

    $('.js-nav-left-btn').unbind('click');

    $('.js-nav-left').animate({
        left: -$('.js-nav-left').outerWidth()
      },
      400,
      (function () {
        $('.js-nav-left-btn').bind('click', animateTest);
      })
    );

    $('.js-nav-left-btn').toggleClass('open');
  };

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var block = $(".js-nav-left");
      var left = parseInt($('.js-nav-left').css('left'), 10);
      var container = $('.js-account-menu');

      if ((!block.is(e.target) && block.has(e.target).length === 0) || (container.has(e.target).length != 0)) {
        if ($(window).width() < '768') {
          if (left === 0) {
            $.hideNav();
          }
        }
      }
      e.stopPropagation();
    });
  });

  $('.js-nav-left-btn').bind('click', animateTest);

  $('.js-account-menu button').click(function(e) {
    e.preventDefault();
    $('.js-account-menu .active').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('data-href');
    $('.tab').not(tab).css({'display':'none'});
    $(tab).fadeIn(400);
  });




  var progressValue = 33;

  var progress = function() {
    if ($('.js-progress-bar').is(":visible")) {
      var progressBar = $(".js-progress-bar").outerWidth();
      var progressItem = $(".js-progress-bar li").outerWidth() + 5;

      var amount = (progressBar - 6) / progressItem;

      $(".js-progress-bar").empty();

      for (i = 0; i < amount - 1; i++) {
        $("<li></li>").appendTo($(".js-progress-bar"));
      }

      var amountValue = amount / (100 / progressValue);
      var items = $('.js-progress-bar li');

      for (i = 0; i < amountValue - 1; i++) {
        $(items[i]).addClass("active");
      }
    }
  };

  progress();

 $('.js-buy-btn').on('click', function () {
    progress();
  });

  $(window).resize(function(){
    progress();
  });




  $('.js-user-btn').on('click', function () {
    $('.js-user-menu').slideToggle();
    $('.js-user-btn').toggleClass('panel__user_open');
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var block = $(".js-user-btn");

      if (!block.is(e.target) && block.has(e.target).length === 0) {
        $('.js-user-menu').slideUp();
        $('.js-user-btn').removeClass('panel__user_open');
      }
      e.stopPropagation();
    });
  });






  if(!$('.js-transactions-list').children('li').length > 0) {
    $('.js-block-transactions').removeClass('block-transactions_yes');
    $('.js-block-transactions').addClass('block-transactions_no');
  } else {
    $('.js-block-transactions').removeClass('block-transactions_no');
    $('.js-block-transactions').addClass('block-transactions_yes');
  }
});
