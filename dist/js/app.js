function timer(){if(document.getElementById("js-sec")){var e=new Date,s=new Date("01 Feb 2018 00:00");e.setTime(Date.parse(s));var t=Math.floor(-(+new Date-e)/1e3/60/60/24),n=Math.floor(-(+new Date-e)/1e3/60/60),a=Math.floor(-(+new Date-e)/1e3/60),o=Math.floor(-(+new Date-e)/1e3)-60*a;a-=60*n,n-=24*t,t<0&&(t="0",n="0",a="0",o="0"),t<=9&&(t="0"+t),n<=9&&(n="0"+n),a<=9&&(a="0"+a),o<=9&&(o="0"+o),document.layers?(document.layers.doc_time.document.write(o),document.layers.doc_time.document.write(a),document.layers.doc_time.document.write(n),document.layers.doc_time.document.write(t),document.layers.doc_time.document.close()):document.getElementById("js-sec").innerHTML=o,document.getElementById("js-min").innerHTML=a,document.getElementById("js-hours").innerHTML=n,document.getElementById("js-days").innerHTML=t,setTimeout("timer()",1e3)}}timer(),objectFit.polyfill({selector:".js-news-img",fittype:"cover",disableCrossDomain:"true"}),objectFit.polyfill({selector:".js-team-img",fittype:"cover",disableCrossDomain:"true"}),$(window).on("load",function(){$preloader=$(".js-loader"),$loader=$preloader.find(".loader__img"),$loader.fadeOut(),$preloader.delay(0).fadeOut("slow"),$(".js-menu-btn").click(function(e){$(".js-menu-content").slideToggle(),e.stopPropagation(),$(".js-menu-content > li span + ul").slideUp(),$(".js-menu-content > li span").removeClass("open"),$(".js-menu-btn").toggleClass("open")}),$(document).mouseup(function(e){var s=$(".js-menu li");0===s.has(e.target).length&&($(".js-menu-content > li span + ul").slideUp(),$(".js-menu-content > li span").removeClass("open"),$(".js-menu-content > li").removeClass("active"),$(".js-menu-content > li:first-child").addClass("active")),0===(s=$(".js-menu")).has(e.target).length&&$(window).width()<"480"&&($(".js-menu-content").slideUp(),$(".js-menu-btn").removeClass("open"))}),$(function(){$.myfn=function(e){$(e+" > span").on("click",function(){var s=$(this).siblings("ul");$(e+" span + ul").not(s).slideUp(),$(this).siblings("ul").slideToggle(),$(e+" span").not(this).removeClass("open"),$(this).toggleClass("open"),$(e).not(this).removeClass("active"),$(this).parent().toggleClass("active")})},$.myfn(".js-menu-content > li"),$.myfn(".js-menu-content > li > ul > li")}),$(".js-menu").on("click","a",function(e){e.preventDefault();var s=$(this).attr("href"),t=$(s).offset().top;$("body,html").animate({scrollTop:t},500)}),function(e){e(function(){e(".js-langauge").styler(),e(".js-modal").styler()})}(jQuery),$(".js-roadmap-slider").slick({dots:!0,infinite:!0,fade:!0,speed:700,dotsClass:"roadmap__dots",arrows:!1,slidesToShow:1,adaptiveHeight:!0,prevArrow:'<button type="button" class="roadmap__arrows roadmap__arrows_prev"><span>Previous</span></button>',nextArrow:'<button type="button" class="roadmap__arrows roadmap__arrows_next"><span>Next</span></button>',responsive:[{breakpoint:768,settings:{dots:!1,arrows:!0,fade:!1}}]}),$(".js-news-slider").slick({dots:!1,infinite:!1,centerMode:!1,variableWidth:!0,slidesToShow:2,prevArrow:'<button type="button" class="news__arrows news__arrows_prev"><span>Previous</span></button>',nextArrow:'<button type="button" class="news__arrows news__arrows_next"><span>Next</span></button>',responsive:[{breakpoint:1285,settings:{centerMode:!0,slidesToShow:1}},{breakpoint:670,settings:{variableWidth:!1,slidesToShow:1}}]}),$(".js-videos-slider").slick({dots:!1,infinite:!1,centerMode:!1,variableWidth:!0,touchMove:!1,slidesToShow:3,prevArrow:'<button type="button" class="videos__arrows videos__arrows_prev"><span>Previous</span></button>',nextArrow:'<button type="button" class="videos__arrows videos__arrows_next"><span>Next</span></button>',responsive:[{breakpoint:1285,settings:{centerMode:!0,slidesToShow:1}}]});var e=function(){var s=parseInt($(".js-nav-left").css("left"),10);$(this).unbind("click"),$(".js-nav-left").animate({left:0==s?-$(".js-nav-left").outerWidth():0},400,function(){$(".js-nav-left-btn").bind("click",e)}),$(".js-nav-left-btn").toggleClass("open"),$(".main__nav-left").css("box-shadow","0 0 50px 0px rgba(0, 0, 0, 0.4)")};$.hideNav=function(){parseInt($(".js-nav-left").css("left"),10);$(".js-nav-left-btn").unbind("click"),$(".js-nav-left").animate({left:-$(".js-nav-left").outerWidth()},400,function(){$(".js-nav-left-btn").bind("click",e)}),$(".js-nav-left-btn").toggleClass("open"),$(".main__nav-left").css("box-shadow","0 0 50px 0px rgba(0, 0, 0, 0.4)")},jQuery(function(e){e(document).mouseup(function(s){var t=e(".js-nav-left"),n=parseInt(e(".js-nav-left").css("left"),10),a=e(".js-account-menu");(!t.is(s.target)&&0===t.has(s.target).length||0!=a.has(s.target).length)&&e(window).width()<"768"&&0===n&&(e.hideNav(),e(".main__nav-left").css("box-shadow","0 0 50px 0px rgba(0, 0, 0, 0)")),s.stopPropagation()})}),$(".js-nav-left-btn").bind("click",e),$(".js-account-menu button").click(function(e){e.preventDefault(),$(".js-account-menu .active").removeClass("active"),$(this).addClass("active");var s=$(this).attr("data-href");$(".tab").not(s).css({display:"none"}),$(s).fadeIn(400)});var s=function(){if($(".js-progress-bar").is(":visible")){var e=($(".js-progress-bar").outerWidth()-6)/($(".js-progress-bar li").outerWidth()+5);for($(".js-progress-bar").empty(),i=0;i<e-1;i++)$("<li></li>").appendTo($(".js-progress-bar"));var s=e/(100/33),t=$(".js-progress-bar li");for(i=0;i<s-1;i++)$(t[i]).addClass("active")}};s(),$(".js-buy-btn").on("click",function(){s()}),$(window).resize(function(){s()}),$(".js-user-btn").on("click",function(){$(".js-user-menu").toggle(),$(".js-user-btn").toggleClass("panel__user_open")}),jQuery(function(e){e(document).mouseup(function(s){var t=e(".js-user-btn");t.is(s.target)||0!==t.has(s.target).length||(e(".js-user-menu").hide(),e(".js-user-btn").removeClass("panel__user_open")),s.stopPropagation()})}),$(".js-language-btn").on("click",function(){$(".js-language-menu").toggle(),$(".js-language-btn").toggleClass("panel__language_open")}),jQuery(function(e){e(document).mouseup(function(s){var t=e(".js-language-btn");t.is(s.target)||0!==t.has(s.target).length||(e(".js-language-menu").hide(),e(".js-language-btn").removeClass("panel__language_open")),s.stopPropagation()})}),!$(".js-transactions-list tbody").children("tr").length>0?($(".js-block-transactions").removeClass("block-transactions_yes"),$(".js-block-transactions").addClass("block-transactions_no")):($(".js-block-transactions").removeClass("block-transactions_no"),$(".js-block-transactions").addClass("block-transactions_yes")),new Clipboard(".js-clipboard"),$(document).on("closed",".remodal",function(e){$(".js-login-form")[0].reset(),$(".js-registration-form")[0].reset(),$(".js-modal-form")[0].reset()}),$("input[name=method]").change(function(){var e,s,t=912.38;switch($("input[name=method]:checked").val()){case"dash":e="url(../img/dash.png)",s="dash",t=912.38;break;case"etherium":e="url(../img/eth.png)",s="eth",t=954.38;break;case"litecoin":e="url(../img/ltc.png)",s="ltc",t=922.38;break;case"bitcoin":e="url(../img/btc.png)",s="btc",t=976.38;break;case"bitcoinCash":e="url(../img/bch.png)",s="bch",t=923.38;break;case"card":e="url(../img/card.png)",s="card",t=965.38;break;default:alert("ничего не выбрано")}$(".js-send-img").css("background-image",e),$(".js-send-text").removeClass("dash eth ltc btc bch card"),$(".js-send-text").addClass(s),$(".js-send-text-rate").html(s),$(".js-send-value-rate").html(t);var n=$(".js-send").val()*t;$(".js-recelve").val(n)}),$(".js-next-btn").on("click",function(){$(".js-block-progress").slideUp(),$(".js-block-payment").slideUp(),$(".js-block-calculate").slideDown(),$(".js-block-copy").slideDown()}),$(".js-back-btn").on("click",function(){$(".js-block-progress").slideDown(),$(".js-block-payment").slideDown(),$(".js-block-calculate").slideUp(),$(".js-block-copy").slideUp()}),$(".js-back-btn").on("click",function(){s()}),$(".js-send").on("input",function(){var e=912.38;switch($("input[name=method]:checked").val()){case"dash":e=912.38;break;case"etherium":e=954.38;break;case"litecoin":e=922.38;break;case"bitcoin":e=976.38;break;case"bitcoinCash":e=923.38;break;case"card":e=965.38;break;default:alert("ничего не выбрано")}var s=$(".js-send").val()*e;$(".js-recelve").val(s)})});