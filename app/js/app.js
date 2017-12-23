function timer() {
  var d = new Date();
  var x = new Date("01 Jan 2018 00:00");

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

  (function($) {
    $(function() {
      $('.js-langauge').styler();
    });
  })(jQuery);
});
