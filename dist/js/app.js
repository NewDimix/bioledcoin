function countdown(){if(document.getElementById("js-sec")){var e=new Date,t=new Date("01 Feb 2018 00:00");e.setTime(Date.parse(t));var s=Math.floor(-(+new Date-e)/1e3/60/60/24),n=Math.floor(-(+new Date-e)/1e3/60/60),a=Math.floor(-(+new Date-e)/1e3/60),o=Math.floor(-(+new Date-e)/1e3)-60*a;a-=60*n,n-=24*s,s<0&&(s="0",n="0",a="0",o="0"),s<=9&&(s="0"+s),n<=9&&(n="0"+n),a<=9&&(a="0"+a),o<=9&&(o="0"+o),document.layers?(document.layers.doc_time.document.write(o),document.layers.doc_time.document.write(a),document.layers.doc_time.document.write(n),document.layers.doc_time.document.write(s),document.layers.doc_time.document.close()):document.getElementById("js-sec").innerHTML=o,document.getElementById("js-min").innerHTML=a,document.getElementById("js-hours").innerHTML=n,document.getElementById("js-days").innerHTML=s,setTimeout("countdown()",1e3)}}countdown(),objectFit.polyfill({selector:".js-news-img",fittype:"cover",disableCrossDomain:"true"}),objectFit.polyfill({selector:".js-team-img",fittype:"cover",disableCrossDomain:"true"}),$(window).on("load",function(){for($preloader=$(".js-loader"),$loader=$preloader.find(".loader__img"),$loader.fadeOut(),$preloader.delay(0).fadeOut("slow"),$(".js-menu-btn").click(function(e){$(".js-menu-content").slideToggle(),e.stopPropagation(),$(".js-menu-content > li span + ul").slideUp(),$(".js-menu-content > li span").removeClass("open"),$(".js-menu-btn").toggleClass("open")}),$(document).mouseup(function(e){var t=$(".js-menu li");0===t.has(e.target).length&&($(".js-menu-content > li span + ul").slideUp(),$(".js-menu-content > li span").removeClass("open"),$(".js-menu-content > li").removeClass("active"),$(".js-menu-content > li:first-child").addClass("active")),0===(t=$(".js-menu")).has(e.target).length&&$(window).width()<"480"&&($(".js-menu-content").slideUp(),$(".js-menu-btn").removeClass("open"))}),$(function(){$.myfn=function(e){$(e+" > span").on("click",function(){var t=$(this).siblings("ul");$(e+" span + ul").not(t).slideUp(),$(this).siblings("ul").slideToggle(),$(e+" span").not(this).removeClass("open"),$(this).toggleClass("open"),$(e).not(this).removeClass("active"),$(this).parent().toggleClass("active")})},$.myfn(".js-menu-content > li"),$.myfn(".js-menu-content > li > ul > li")}),$(".js-menu").on("click","a",function(e){e.preventDefault();var t=$(this).attr("href"),s=$(t).offset().top;$("body,html").animate({scrollTop:s},500)}),function(e){e(function(){e(".js-modal").styler()})}(jQuery),$(".js-roadmap-slider").slick({dots:!0,infinite:!0,fade:!0,speed:700,dotsClass:"roadmap__dots",arrows:!1,slidesToShow:1,adaptiveHeight:!0,prevArrow:'<button type="button" class="roadmap__arrows roadmap__arrows_prev"><span>Previous</span></button>',nextArrow:'<button type="button" class="roadmap__arrows roadmap__arrows_next"><span>Next</span></button>',responsive:[{breakpoint:768,settings:{dots:!1,arrows:!0,fade:!1}}]}),$(".js-news-slider").slick({dots:!1,infinite:!1,centerMode:!1,variableWidth:!0,slidesToShow:2,prevArrow:'<button type="button" class="news__arrows news__arrows_prev"><span>Previous</span></button>',nextArrow:'<button type="button" class="news__arrows news__arrows_next"><span>Next</span></button>',responsive:[{breakpoint:1285,settings:{centerMode:!0,slidesToShow:1}},{breakpoint:670,settings:{variableWidth:!1,slidesToShow:1}}]}),$(".js-videos-slider").slick({dots:!1,infinite:!1,centerMode:!1,variableWidth:!0,touchMove:!1,slidesToShow:3,prevArrow:'<button type="button" class="videos__arrows videos__arrows_prev"><span>Previous</span></button>',nextArrow:'<button type="button" class="videos__arrows videos__arrows_next"><span>Next</span></button>',responsive:[{breakpoint:1285,settings:{centerMode:!0,slidesToShow:1}}]}),$(".js-roadmap").css("min-height",$(".roadmap__dots").height()+240+"px"),i=1;i<=$(".js-roadmap-slider").find(".roadmap-item").length;i++)!function(e){$(".roadmap__dots li:nth-child("+e+")").attr("data-name",$(".roadmap-item:nth-child("+e+") .roadmap-item__title h3").html()),$(".roadmap__dots li:nth-child("+e+")").addClass("title")}(i);var e=function(){var t=parseInt($(".js-nav-left").css("left"),10);$(this).unbind("click"),$(".js-nav-left").animate({left:0==t?-$(".js-nav-left").outerWidth():0},400,function(){$(".js-nav-left-btn").bind("click",e)}),$(".js-nav-left-btn").toggleClass("open"),$(".main__nav-left").css("box-shadow","0 0 50px 0px rgba(0, 0, 0, 0.4)")};$.hideNav=function(){parseInt($(".js-nav-left").css("left"),10);$(".js-nav-left-btn").unbind("click"),$(".js-nav-left").animate({left:-$(".js-nav-left").outerWidth()},400,function(){$(".js-nav-left-btn").bind("click",e)}),$(".js-nav-left-btn").toggleClass("open")},jQuery(function(e){e(document).mouseup(function(t){var s=e(".js-nav-left"),n=parseInt(e(".js-nav-left").css("left"),10),a=e(".js-account-menu");(!s.is(t.target)&&0===s.has(t.target).length||0!=a.has(t.target).length)&&e(window).width()<"768"&&0===n&&(e.hideNav(),e(".main__nav-left").css("box-shadow","0 0 50px 0px rgba(0, 0, 0, 0)")),t.stopPropagation()})}),$(".js-nav-left-btn").bind("click",e),$(".js-account-menu button").click(function(e){e.preventDefault(),$(".js-account-menu .active").removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-href");$(".tab").not(t).css({display:"none"}),$(t).fadeIn(400)});$(".progress__stage-item:first-child").addClass("progress__stage-item_active");var t=function(){if($(".js-progress-bar").is(":visible")){var e=($(".js-progress-bar").outerWidth()-6)/($(".js-progress-bar li").outerWidth()+5);for($(".js-progress-bar").empty(),i=0;i<e-1;i++)$("<li></li>").appendTo($(".js-progress-bar"));var t=e/(100/33),s=$(".js-progress-bar li");for(i=0;i<t-1;i++)$(s[i]).addClass("active")}};t(),$(".js-buy-btn").on("click",function(){t()}),$(window).resize(function(){t()}),$(".js-user-btn").on("click",function(){$(".js-user-menu").toggle(),$(".js-user-btn").toggleClass("panel__user_open")}),$(".js-language-btn").on("click",function(){$(".js-language-menu").toggle(),$(".js-language-btn").toggleClass("panel__language_open")}),jQuery(function(e){e(document).mouseup(function(t){var s=e(".js-user-btn");s.is(t.target)||0!==s.has(t.target).length||(e(".js-user-menu").hide(),e(".js-user-btn").removeClass("panel__user_open")),(s=e(".js-language-btn")).is(t.target)||0!==s.has(t.target).length||(e(".js-language-menu").hide(),e(".js-language-btn").removeClass("panel__language_open")),t.stopPropagation()})}),!$(".js-transactions-list tbody").children("tr").length>0?($(".js-block-transactions").removeClass("block-transactions_yes"),$(".js-block-transactions").addClass("block-transactions_no")):($(".js-block-transactions").removeClass("block-transactions_no"),$(".js-block-transactions").addClass("block-transactions_yes")),new Clipboard(".js-clipboard"),$(document).on("closed",".remodal",function(e){$(".js-login-form")[0].reset(),$(".js-registration-form")[0].reset(),$(".js-modal-form")[0].reset(),$(".js-forgot-form")[0].reset()}),$("input[name=method]").change(function(){var e,t,s=912.38;switch($("input[name=method]:checked").val()){case"dash":e="url(../img/dash.png)",t="dash",s=912.38;break;case"etherium":e="url(../img/eth.png)",t="eth",s=954.38;break;case"litecoin":e="url(../img/ltc.png)",t="ltc",s=922.38;break;case"bitcoin":e="url(../img/btc.png)",t="btc",s=976.38;break;case"bitcoinCash":e="url(../img/bch.png)",t="bch",s=923.38;break;case"card":e="url(../img/card.png)",t="card",s=965.38;break;default:alert("ничего не выбрано")}$(".js-send-img").css("background-image",e),$(".js-send-text").removeClass("dash eth ltc btc bch card"),$(".js-send-text").addClass(t),$(".js-send-text-rate").html(t),$(".js-send-value-rate").html(s);var n=$(".js-send").val()*s;$(".js-recelve").val(n)}),$(".js-next-btn").on("click",function(){$(".js-block-progress").slideUp(),$(".js-block-payment").slideUp(),$(".js-block-calculate").slideDown(),$(".js-block-copy").slideDown()}),$(".js-back-btn").on("click",function(){$(".js-block-progress").slideDown(),$(".js-block-payment").slideDown(),$(".js-block-calculate").slideUp(),$(".js-block-copy").slideUp(),t()}),$(".js-send").on("input",function(){var e=912.38;switch($("input[name=method]:checked").val()){case"dash":e=912.38;break;case"etherium":e=954.38;break;case"litecoin":e=922.38;break;case"bitcoin":e=976.38;break;case"bitcoinCash":e=923.38;break;case"card":e=965.38;break;default:alert("ничего не выбрано")}var t=$(".js-send").val()*e;$(".js-recelve").val(t)})});