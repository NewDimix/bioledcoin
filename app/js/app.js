// START countdown timer
function countdown() {
  var element=document.getElementById('js-sec');
  if(!element){return;}

  var d = new Date();
  var x = new Date("05 Apr 2018 08:00");

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

  setTimeout("countdown()", 1000);
};

countdown();
// END countdown timer



// START header height
function headerBountyHeight() {
if ($('.js-header-bounty').length === 0) return;

$('.js-header-bounty').css('min-height', $(".js-header-content-bounty").outerHeight(true)+$(".js-menu-row").outerHeight(true)+parseInt($(".js-header-bounty").css("padding-top"))+parseInt($(".js-header-bounty").css("padding-bottom")));
};

function headerHeight() {
if ($('.js-header').length === 0) return;

if ($(window).width() > '1100') {
  $('.js-header').css('min-height', $(".js-header-content").outerHeight(true)+$(".js-menu-row").outerHeight(true)+parseInt($(".js-header").css("padding-top"))+parseInt($(".js-header").css("padding-bottom")));

  if ($('.js-header-content').height() < $('.js-stages').innerHeight()) {
    $('.js-header-content').css('min-height', $('.js-stages').innerHeight());
  };

  $('.js-header-content-wrap').css('height', $(".js-header").outerHeight(true) - parseInt($(".js-header").css("padding-top")) - parseInt($(".js-header").css("padding-bottom")) - $(".js-menu-row").outerHeight(true));
} else {
  $('.js-header').css('min-height', 'none');
  $('.js-header-content').css('min-height', 'auto');
  $('.js-header-content-wrap').css('height', 'auto');
}
};

headerHeight();
headerBountyHeight();

$(window).resize(function () {
headerHeight();
headerBountyHeight();
});
// END header height



$(window).on('load', function () {
  // START preloader
  $preloader = $('.js-loader'),
  $loader = $preloader.find('.loader__img');
  $loader.fadeOut();
  $preloader.delay(0).fadeOut('slow');
  // END preloader



  // START menu nav
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
  // END menu nav



  // START smooth scrolling
  $(".js-menu").on("click",".js-menu-scroll", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),
        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 500);
  });
  // END smooth scrolling



  // START jquery.formstyler
  (function($) {
    $(function() {
      $('.js-modal').styler();
    });
  })(jQuery);
  // END jquery.formstyler



  // START slick
  $('.js-roadmap-slider').slick({
    dots: true,
    infinite: false,
    fade: true,
    speed: 700,
    dotsClass: "roadmap__dots",
    arrows: true,
    slidesToShow: 1,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="roadmap__arrows roadmap__arrows_prev"><span>Previous</span></button>',
    nextArrow: '<button type="button" class="roadmap__arrows roadmap__arrows_next"><span>Next</span></button>',
    responsive: [
      {
        breakpoint: 820,
        settings: {
          fade: false
        }
      }
    ]
  });

  if ($('.js-roadmap-item.slick-active').height() < $('.roadmap__dots').height()) {
    $('.js-roadmap-slider').css('padding-top', ($('.roadmap__dots').height() - $('.js-roadmap-item.slick-active').height()) / 2);
  } else {
    $('.js-roadmap-slider').css('padding-top', '10px');
  }

  $('.js-roadmap-slider').on('swipe', function(event, slick, currentSlide, nextSlide){
    if ($('.js-roadmap-item.slick-active').height() < $('.roadmap__dots').height()) {
      $('.js-roadmap-slider').css('padding-top', ($('.roadmap__dots').height() - $('.js-roadmap-item.slick-active').height()) / 2);
    } else {
      $('.js-roadmap-slider').css('padding-top', '10px');
    }
  });

  $('.roadmap__dots li').click(function(){
    $(".js-roadmap-slider").trigger("swipe", []);
  });

  $(window).resize(function() {
    $(".js-roadmap-slider").trigger("swipe", []);
  });

//  $('.js-roadmap-slider').on('swipe', function(event, slick, currentSlide, nextSlide){
//    var px2 = $('.roadmap__dots li').outerHeight(true);
//    var px3 = (($('.roadmap__dots li').outerHeight()-$('.roadmap-item__title').height())/2);
//    var numberSlides = $(".roadmap__dots li").length - 1;
//
//    if ($(window).width() < '820') {
//      px2 = 0;
//      px3 = 0;
//    }
//
//    if ($('.roadmap__dots li:first-child').hasClass("slick-active")) {
//      $('.js-roadmap-slider').css('padding-top', '10px');
//    }
//
//    if ($(window).width() < '880') {
//      if ($('.roadmap__dots li:first-child').hasClass("slick-active")) {
//        $('.js-roadmap-slider').css('padding-top', '0');
//      }
//    }
//
//    if ($('.roadmap__dots li:nth-child(2)').hasClass("slick-active")) {
//      $('.js-roadmap-slider').css('padding-top', px2*1+px3+'px');
//    }
//    if ($('.roadmap__dots li:nth-child(3)').hasClass("slick-active")) {
//      $('.js-roadmap-slider').css('padding-top', px2*2+px3+'px');
//    }
//    if ($('.roadmap__dots li:nth-child(4)').hasClass("slick-active")) {
//      $('.js-roadmap-slider').css('padding-top', px2*3+px3+'px');
//    }
//    if ($('.roadmap__dots li:nth-child(5)').hasClass("slick-active")) {
//      $('.js-roadmap-slider').css('padding-top', px2*4+px3+'px');
//    }
//    if ($('.roadmap__dots li:nth-child(6)').hasClass("slick-active")) {
//      $('.js-roadmap-slider').css('padding-top', px2*5+px3+'px');
//    }
//    if ($('.roadmap__dots li:nth-child(7)').hasClass("slick-active")) {
//      $('.js-roadmap-slider').css('padding-top', px2*6+px3+'px');
//    }
//    if ($('.roadmap__dots li:nth-child(8)').hasClass("slick-active")) {
//      $('.js-roadmap-slider').css('padding-top', px2*7+px3+'px');
//    }
//  });
//
//  $('.roadmap__dots li').click(function(){
//    $(".js-roadmap-slider").trigger("swipe", []);
//  });
//
//  $(window).resize(function() {
//    $(".js-roadmap-slider").trigger("swipe", []);
//  });


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
        breakpoint: 1285,
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

  $('.js-videos-slider').slick({
    dots: false,
    infinite: false,
    centerMode: false,
    variableWidth: true,
    slidesToShow: 3,
    prevArrow: '<button type="button" class="videos__arrows videos__arrows_prev js-youtube-stop"><span>Previous</span></button>',
    nextArrow: '<button type="button" class="videos__arrows videos__arrows_next js-youtube-stop"><span>Next</span></button>',
    responsive: [
      {
        breakpoint: 1285,
        settings: {
          centerMode: true,
          slidesToShow: 1
        }
      }
    ]
  });
  // END slick


  // START roadmap title and height
  $(window).resize(function() {
    if ($(window).width() >= '820') {
      for (i = 1; i <= $(".js-roadmap-slider").find('.roadmap-item').length; i++) {
        roadmapTitle(i);
      };

      $(".js-roadmap").css("min-height", ($(".roadmap__dots").height() + $(".js-roadmap-title").outerHeight(true)) + (parseInt($(".js-roadmap").css("padding-top")) * 2) + "px");
    } else {
      $(".js-roadmap").css("min-height", "auto");
    }
  });

  function roadmapTitle(x) {
    var title = $(".roadmap-item:nth-child(" + x + ") .roadmap-item__title h3").text();
    $(".roadmap__dots li:nth-child(" + x + ") button").text(title);
  };

  if ($(window).width() >= '820') {
    for (i = 1; i <= $(".js-roadmap-slider").find('.roadmap-item').length; i++) {
      roadmapTitle(i);
    };

    $(".js-roadmap").css("min-height", ($(".roadmap__dots").height() + $(".js-roadmap-title").outerHeight(true)) + (parseInt($(".js-roadmap").css("padding-top")) * 2) + "px");
  } else {
    $(".js-roadmap").css("min-height", "auto");
  }
  // END roadmap title and height



  // START menu nav left
  $('.js-nav-left-btn').click(function() {
    $('.js-nav-left-btn').toggleClass('open');
    $(".js-nav-left").toggleClass('open');
  });

  $(document).mouseup(function(e) {
    var $target = $(e.target);
    if ($target.closest(".js-nav-left").length == 0 && $target.closest(".js-nav-left-btn").length == 0) {
      if ($(".js-nav-left").hasClass("open")) {
        $('.js-nav-left-btn').toggleClass('open');
        $(".js-nav-left").toggleClass('open');
      }
    }
  });

  $('.js-account-menu button').click(function(e) {
    e.preventDefault();
    $('.js-account-menu .active').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('data-href');
    $('.tab').not(tab).css({'display':'none'});
    $(tab).fadeIn(400);
    localStorage.setItem('activeContent', tab);
    $('.js-nav-left-btn').toggleClass('open');
    $(".js-nav-left").toggleClass('open');
  });

  var activeContent = localStorage.getItem('activeContent');
  if (activeContent) {
    $('.js-account-menu .active').removeClass('active');
    $('.js-account-menu button[data-href="' + activeContent + '"]').addClass('active');
    $('.tab').not(activeContent).css({'display':'none'});
    $(activeContent).fadeIn(400);
  }
  // END menu nav left



  // START progress-bar
  var progressValue; // fill percentage
  $.ajax({
    url: "https://nodes.wavesnodes.com/assets/balance/3PB9TyoBkRmnzHUSsWPhGeAEka81esmFRNS/Ci4x7rkRo37H3LxMC4bpVfusk8qkcspXTXFSFNSWaajj",
    success: function (data) {
      $("#tokenssold").html(100000000000 - data.balance);
      progressValue = 100 * (100000000000 - data.balance) / 600000000;
      progress();
    },
    dataType: "json"
  });

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

      if (progressValue >= 2.4) {
        $('.progress__stage-item:first-child').addClass('progress__stage-item_active');
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
  // END progress-bar



  // START panel
  $('.js-user-btn').on('click', function () {
    $('.js-user-menu').toggle();
    $('.js-user-btn').toggleClass('panel__user_open');
  });

  $('.js-language-btn').on('click', function () {
    $('.js-language-menu').toggle();
    $('.js-language-btn').toggleClass('panel__language_open');
  });

  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var block = $(".js-user-btn");

      if (!block.is(e.target) && block.has(e.target).length === 0) {
        $('.js-user-menu').hide();
        $('.js-user-btn').removeClass('panel__user_open');
      }

      block = $(".js-language-btn");

      if (!block.is(e.target) && block.has(e.target).length === 0) {
        $('.js-language-menu').hide();
        $('.js-language-btn').removeClass('panel__language_open');
      }

      e.stopPropagation();
    });
  });
  // END panel



  // START transactions
  if(!$('.js-transactions-list tbody').children('tr').length > 0) {
    $('.js-block-transactions').removeClass('block-transactions_yes');
    $('.js-block-transactions').addClass('block-transactions_no');
  } else {
    $('.js-block-transactions').removeClass('block-transactions_no');
    $('.js-block-transactions').addClass('block-transactions_yes');
  };
  // END transactions



  // START clipboard
  new Clipboard('.js-clipboard');
  // END clipboard



  // START reset forms
  $(document).on('closed', '.remodal', function (e) {
    $('.js-login-form')[0].reset();
    $('.js-registration-form')[0].reset();
    $('.js-modal-form')[0].reset();
    $('.js-forgot-form')[0].reset();
  });
  // END reset forms



  // START buy page
  var value = $('input[name=method]:checked').val();
  var currency;
  var classText;
  var allClassText = "dash eth ltc btc bch waves";
  var rate = 912.38;

  switch (value) {
    case 'dash':
      currency = "dash";
      classText = 'dash';
      rate = 912.38;
      break;
    case 'etherium':
      currency = "eth";
      classText = 'eth';
      rate = $('.js-eth-value').attr("value");
      break;
    case 'litecoin':
      currency = "ltc";
      classText = 'ltc';
      rate = 922.38;
      break;
    case 'bitcoin':
      currency = "btc";
      classText = 'btc';
      rate = $('.js-btc-value').attr("value");
      break;
    case 'bitcoinCash':
      currency = "bch";
      classText = 'bch';
      rate = 923.38;
      break;
    case 'waves':
      currency = "waves";
      classText = 'waves';
      rate = $('.js-waves-value').attr("value");
      break;
  }

  $(".js-send-img div").attr("class", "");
  $(".js-send-img div").addClass('block-calculate__exchange-img block-calculate__exchange-img_' + currency);
  $(".js-send-text").removeClass(allClassText);
  $(".js-send-text").addClass(classText);

  $(".js-send-text-rate").html(classText);
  $(".js-send-value-rate").html(rate);

  var recelveValue = $('.js-send').val() * rate;
  $('.js-recelve').val(recelveValue);

  $("input[name=method]").change(function() {
    var value = $('input[name=method]:checked').val();
    var currency;
    var classText;
    var allClassText = "dash eth ltc btc bch waves";
    var rate = 912.38;

    switch (value) {
      case 'dash':
        currency = "dash";
        classText = 'dash';
        rate = 912.38;
        break;
      case 'etherium':
        currency = "eth";
        classText = 'eth';
        rate = $('.js-eth-value').attr("value");
        break;
      case 'litecoin':
        currency = "ltc";
        classText = 'ltc';
        rate = 922.38;
        break;
      case 'bitcoin':
        currency = "btc";
        classText = 'btc';
        rate = $('.js-btc-value').attr("value");
        break;
      case 'bitcoinCash':
        currency = "bch";
        classText = 'bch';
        rate = 923.38;
        break;
      case 'waves':
        currency = "waves";
        classText = 'waves';
        rate = $('.js-waves-value').attr("value");
        break;
      default:
        alert( 'ничего не выбрано' );
    }

    $(".js-send-img div").attr("class", "");
    $(".js-send-img div").addClass('block-calculate__exchange-img block-calculate__exchange-img_' + currency);
    $(".js-send-text").removeClass(allClassText);
    $(".js-send-text").addClass(classText);

    $(".js-send-text-rate").html(classText);
    $(".js-send-value-rate").html(rate);

    var recelveValue = $('.js-send').val() * rate;
    $('.js-recelve').val(recelveValue.toFixed(2));
  });

  $('.js-next-btn').on('click', function () {
    $('.js-block-payment').slideUp();
    $('.js-block-calculate').slideDown();
    $('.js-block-copy').slideDown();
  });

  $('.js-back-btn').on('click', function () {
    $('.js-block-payment').slideDown();
    $('.js-block-calculate').slideUp();
    $('.js-block-copy').slideUp();
    $('.js-calculate')[0].reset();

    progress();
  });

  $('.js-send').on('input', function(){
    var value = $('input[name=method]:checked').val();
    var rate = 912.38;

    switch (value) {
      case 'dash':
        rate = 912.38;
        break;
      case 'etherium':
        rate = $('.js-eth-value').attr("value");
        break;
      case 'litecoin':
        rate = 922.38;
        break;
      case 'bitcoin':
        rate = $('.js-btc-value').attr("value");
        break;
      case 'bitcoinCash':
        rate = 923.38;
        break;
      case 'waves':
        rate = $('.js-waves-value').attr("value");
        break;
      default:
        alert( 'ничего не выбрано' );
    }

    var recelveValue = $('.js-send').val() * rate;
    $('.js-recelve').val(recelveValue.toFixed(2));
  });
  // END buy page



  // START jquery.validate
//  $(".js-registration-form").validate({
//    errorPlacement: function(error, element) {
//      element.parent().append(error);
//    },
//    rules: {
//      nickname: {
//        regexp: /^[a-zA-Z0-9]+$/
//      },
//      email: {
//        regexp: /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.+@.+\..+)$/
//      },
//      password: {
//        regexp: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/
//      },
//      repeatpassword: {
//        equalTo: '#password',
//        regexp: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/
//      }
//    },
//    messages: {
//      nickname: {
//        regexp: "Nickname может содержать только латинские буквы или цифры и быть не более двадцати символов в длину"
//      },
//      email: {
//        regexp: "E-MAIL должен быть в формате name@domain.com"
//      },
//      password: {
//        regexp: "Пароль должен содержать минимум: 8 символов, одну цифру, одну букву в верхнем регистре и одну в нижнем"
//      },
//      repeatpassword: {
//        equalTo: "Пароли должны совпадать, повторите ввод",
//        regexp: "Пароли должны совпадать, повторите ввод"
//      }
//    }
//  });
//
//  $(".js-login-form").validate({
//    rules: {
//      email: {
//        regexp: /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.+@.+\..+)$/
//      },
//      password: {
//        regexp: /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*/
//      }
//    },
//    messages: {
//      email: {
//        regexp: "E-MAIL должен быть в формате name@domain.com"
//      },
//      password: {
//        regexp: "Пароль должен содержать минимум: 8 символов, одну цифру, одну букву в верхнем регистре и одну в нижнем"
//      }
//    }
//  });
//
//  $(".js-forgot-form").validate({
//    rules: {
//      email: {
//        regexp: /^(?!.*@.*@.*$)(?!.*@.*\-\-.*\..*$)(?!.*@.*\-\..*$)(?!.*@.*\-$)(.+@.+\..+)$/
//      }
//    },
//    messages: {
//      email: {
//        regexp: "E-MAIL должен быть в формате name@domain.com"
//      }
//    }
//  });
//
//  $.validator.addMethod('regexp', function(value, element, params) {
//    var expression = new RegExp(params);
//    return this.optional(element) || expression.test(value);
//  });
//
//  jQuery.extend(jQuery.validator.messages, {
//    required: "Это поле является обязательным для заполнения",
//    remote: "Please fix this field.",
//    email: "E-MAIL должен быть в формате name@domain.com",
//    url: "Please enter a valid URL.",
//    date: "Please enter a valid date.",
//    dateISO: "Please enter a valid date (ISO).",
//    number: "Please enter a valid number.",
//    digits: "Please enter only digits.",
//    creditcard: "Please enter a valid credit card number.",
//    equalTo: "Please enter the same value again.",
//    accept: "Please enter a value with a valid extension.",
//    maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
//    minlength: jQuery.validator.format("Please enter at least {0} characters."),
//    rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
//    range: jQuery.validator.format("Please enter a value between {0} and {1}."),
//    max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
//    min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
//  });
  // END jquery.validate



  // START youtube-load
  $(function() {
    $(".js-youtube").each(function() {
      $(this).css('background-image', 'url(http://i.ytimg.com/vi/' + this.id + '/sddefault.jpg)');
      $(this).append($('<div/>', {'class': 'slider-videos__play'}));

      $(document).delegate('#'+this.id, 'click', function() {
        var iframe_url = "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&enablejsapi=1";
        if ($(this).data('params')) iframe_url+='&'+$(this).data('params');
        var iframe = $('<iframe/>', {'id': this.id, 'class': 'youtube', 'frameborder': '0', 'allowfullscreen': 'allowfullscreen', 'src': iframe_url, 'width': $(this).width(), 'height': $(this).height() })
        $(this).replaceWith(iframe);
      });
    });
  });

  window.addEventListener("resize", function() {
    var height = $('.js-youtube-wrap').height();
    var width = $('.js-youtube-wrap').width();
    $('iframe').css('height', height);
    $('iframe').css('width', width);
  }, false);
  // END youtube-load



  // START stop youtube video
  $('.js-youtube-wrap').click(function() {
    if ($(".js-youtube-wrap iframe").is(".youtube")) {
      var id = $('.js-youtube-wrap iframe').attr('id');
      var bgi = 'background-image: url(http://i.ytimg.com/vi/' + id + '/sddefault.jpg';
      var div = $('<div></div', {'id': id, 'class': 'slider-videos__youtube js-youtube', 'style': bgi});
      $('.js-youtube-wrap iframe').after(div);
      var divplay = $('<div></div', {'class': 'slider-videos__play'});
      $('.js-youtube').append(divplay);
      $(".js-youtube-wrap iframe").remove();
    };
  });

  $(document).on('click', '.js-youtube-stop', function(){
    jQuery("iframe").each(function() {
      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    });
  });

  $('.js-videos-slider').on('swipe', function(event, slick, direction){
    jQuery("iframe").each(function() {
      jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
    });
  });
  // END stop youtube video



  // START mCustomScrollbar
  $(".js-nav-left").mCustomScrollbar({
    documentTouchScroll: true
  });

  $(".js-team-text").mCustomScrollbar({
    documentTouchScroll: true,
    theme: 'dark'
  });
  // END mCustomScrollbar



  // START mCustomScrollbar
  new WOW().init();
  // END mCustomScrollbar



  // START game-img
  if($('*').is('.game-img')) {
    if ($(window).width() >= '768') {
      $('.game-img').hide();

      var $win = $(window);
      var $marker = $('#news');

      $win.scroll(function() {
          if ($win.scrollTop() + $win.height() >= $marker.offset().top) {
              $win.unbind('scroll');
              $('.game-img').show();
              $('.game-img').addClass('animated fadeInLeft');
          }
      });
    }
  }

  $('.js-game-img-close').click(function() {
    $('.game-img').addClass('animated fadeOutLeft');
  });
  // END game-img



  // START dotdotdot
  setTimeout(function () {
    $(".js-overflow").dotdotdot({});
  }, 1000);

  $(window).resize(function() {
    setTimeout(function () {
      $(".js-overflow").dotdotdot({});
    }, 1000);
  });
  // END dotdotdot
});
