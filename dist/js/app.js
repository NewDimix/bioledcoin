function countdown(){if(document.getElementById("js-sec")){var e=new Date,s=new Date("26 Feb 2018 00:00");e.setTime(Date.parse(s));var t=Math.floor(-(+new Date-e)/1e3/60/60/24),a=Math.floor(-(+new Date-e)/1e3/60/60),o=Math.floor(-(+new Date-e)/1e3/60),n=Math.floor(-(+new Date-e)/1e3)-60*o;o-=60*a,a-=24*t,t<0&&(t="0",a="0",o="0",n="0"),t<=9&&(t="0"+t),a<=9&&(a="0"+a),o<=9&&(o="0"+o),n<=9&&(n="0"+n),document.layers?(document.layers.doc_time.document.write(n),document.layers.doc_time.document.write(o),document.layers.doc_time.document.write(a),document.layers.doc_time.document.write(t),document.layers.doc_time.document.close()):document.getElementById("js-sec").innerHTML=n,document.getElementById("js-min").innerHTML=o,document.getElementById("js-hours").innerHTML=a,document.getElementById("js-days").innerHTML=t,setTimeout("countdown()",1e3)}}countdown(),$(".js-header").css("min-height",$(".js-header-content").outerHeight(!0)+$(".js-menu").outerHeight(!0)+parseInt($(".js-header").css("padding-top"))),$(".js-header-bounty").css("min-height",$(".js-header-content-bounty").outerHeight(!0)+parseInt($(".js-header-bounty").css("padding-top"))),$(".js-header-content").css("min-height",$(".js-stages").outerHeight(!0)),$(window).resize(function(){$(".js-header").css("min-height",$(".js-header-content").outerHeight(!0)+$(".js-menu").outerHeight(!0)+parseInt($(".js-header").css("padding-top"))),$(".js-header-bounty").css("min-height",$(".js-header-content-bounty").outerHeight(!0)+parseInt($(".js-header-bounty").css("padding-top"))),$(".js-header-content").css("min-height",$(".js-stages").outerHeight(!0))}),objectFit.polyfill({selector:".js-news-img",fittype:"cover",disableCrossDomain:"true"}),objectFit.polyfill({selector:".js-team-img",fittype:"cover",disableCrossDomain:"true"}),objectFit.polyfill({selector:".js-panel-avatar",fittype:"cover",disableCrossDomain:"true"}),objectFit.polyfill({selector:".js-news-block-img",fittype:"cover",disableCrossDomain:"true"}),$(window).on("load",function(){for($preloader=$(".js-loader"),$loader=$preloader.find(".loader__img"),$loader.fadeOut(),$preloader.delay(0).fadeOut("slow"),$(".js-menu-btn").click(function(e){$(".js-menu-content").slideToggle(),e.stopPropagation(),$(".js-menu-content > li span + ul").slideUp(),$(".js-menu-content > li span").removeClass("open"),$(".js-menu-btn").toggleClass("open")}),$(document).mouseup(function(e){var s=$(".js-menu li");0===s.has(e.target).length&&($(".js-menu-content > li span + ul").slideUp(),$(".js-menu-content > li span").removeClass("open"),$(".js-menu-content > li").removeClass("active"),$(".js-menu-content > li:first-child").addClass("active")),0===(s=$(".js-menu")).has(e.target).length&&$(window).width()<"480"&&($(".js-menu-content").slideUp(),$(".js-menu-btn").removeClass("open"))}),$(function(){$.myfn=function(e){$(e+" > span").on("click",function(){var s=$(this).siblings("ul");$(e+" span + ul").not(s).slideUp(),$(this).siblings("ul").slideToggle(),$(e+" span").not(this).removeClass("open"),$(this).toggleClass("open"),$(e).not(this).removeClass("active"),$(this).parent().toggleClass("active")})},$.myfn(".js-menu-content > li"),$.myfn(".js-menu-content > li > ul > li")}),$(".js-menu").on("click",".js-menu-scroll",function(e){e.preventDefault();var s=$(this).attr("href"),t=$(s).offset().top;$("body,html").animate({scrollTop:t},500)}),function(e){e(function(){e(".js-modal").styler()})}(jQuery),$(".js-roadmap-slider").slick({dots:!0,infinite:!1,fade:!0,speed:700,dotsClass:"roadmap__dots",arrows:!0,slidesToShow:1,adaptiveHeight:!0,prevArrow:'<button type="button" class="roadmap__arrows roadmap__arrows_prev"><span>Previous</span></button>',nextArrow:'<button type="button" class="roadmap__arrows roadmap__arrows_next"><span>Next</span></button>'}),$(".js-roadmap-slider").on("swipe",function(e,s,t,a){var o=1090;$(window).width()<"880"&&(o=700),$(window).width()<"768"&&(o=0),$(".roadmap__dots li:first-child").hasClass("slick-active")&&$(".js-roadmap-slider").css("padding-top","10px"),$(window).width()<"880"&&$(".roadmap__dots li:first-child").hasClass("slick-active")&&$(".js-roadmap-slider").css("padding-top","0"),$(".roadmap__dots li:nth-child(2)").hasClass("slick-active")&&$(".js-roadmap-slider").css("padding-top",o/7*1+"px"),$(".roadmap__dots li:nth-child(3)").hasClass("slick-active")&&$(".js-roadmap-slider").css("padding-top",o/7*2+"px"),$(".roadmap__dots li:nth-child(4)").hasClass("slick-active")&&$(".js-roadmap-slider").css("padding-top",o/7*3+"px"),$(".roadmap__dots li:nth-child(5)").hasClass("slick-active")&&$(".js-roadmap-slider").css("padding-top",o/7*4+"px"),$(".roadmap__dots li:nth-child(6)").hasClass("slick-active")&&$(".js-roadmap-slider").css("padding-top",o/7*5+"px"),$(".roadmap__dots li:nth-child(7)").hasClass("slick-active")&&$(".js-roadmap-slider").css("padding-top",o/7*6+"px"),$(".roadmap__dots li:nth-child(8)").hasClass("slick-active")&&$(".js-roadmap-slider").css("padding-top",o+"px")}),$(".roadmap__dots li").click(function(){$(".js-roadmap-slider").trigger("swipe",[])}),$(window).resize(function(){$(".js-roadmap-slider").trigger("swipe",[])}),$(".js-news-slider").slick({dots:!1,infinite:!1,centerMode:!1,variableWidth:!0,slidesToShow:2,prevArrow:'<button type="button" class="news__arrows news__arrows_prev"><span>Previous</span></button>',nextArrow:'<button type="button" class="news__arrows news__arrows_next"><span>Next</span></button>',responsive:[{breakpoint:1285,settings:{centerMode:!0,slidesToShow:1}},{breakpoint:670,settings:{variableWidth:!1,slidesToShow:1}}]}),$(".js-videos-slider").slick({dots:!1,infinite:!1,centerMode:!1,variableWidth:!0,slidesToShow:3,prevArrow:'<button type="button" class="videos__arrows videos__arrows_prev js-youtube-stop"><span>Previous</span></button>',nextArrow:'<button type="button" class="videos__arrows videos__arrows_next js-youtube-stop"><span>Next</span></button>',responsive:[{breakpoint:1285,settings:{centerMode:!0,slidesToShow:1}}]}),$(".js-roadmap").css("min-height",$(".roadmap__dots").height()+240+"px"),$(window).resize(function(){$(".js-roadmap").css("min-height",$(".roadmap__dots").height()+240+"px")}),i=1;i<=$(".js-roadmap-slider").find(".roadmap-item").length;i++)!function(e){$(".roadmap__dots li:nth-child("+e+")").attr("data-name",$(".roadmap-item:nth-child("+e+") .roadmap-item__title h3").html()),$(".roadmap__dots li:nth-child("+e+")").addClass("title")}(i);$(".js-nav-left-btn").click(function(){$(".js-nav-left-btn").toggleClass("open"),$(".js-nav-left").toggleClass("open")}),$(document).mouseup(function(e){var s=$(e.target);0==s.closest(".js-nav-left").length&&0==s.closest(".js-nav-left-btn").length&&$(".js-nav-left").hasClass("open")&&($(".js-nav-left-btn").toggleClass("open"),$(".js-nav-left").toggleClass("open"))}),$(".js-account-menu button").click(function(e){e.preventDefault(),$(".js-account-menu .active").removeClass("active"),$(this).addClass("active");var s=$(this).attr("data-href");$(".tab").not(s).css({display:"none"}),$(s).fadeIn(400),localStorage.setItem("activeContent",s),$(".js-nav-left-btn").toggleClass("open"),$(".js-nav-left").toggleClass("open")});var e=localStorage.getItem("activeContent");e&&($(".js-account-menu .active").removeClass("active"),$('.js-account-menu button[data-href="'+e+'"]').addClass("active"),$(".tab").not(e).css({display:"none"}),$(e).fadeIn(400));$(".progress__stage-item:first-child").addClass("progress__stage-item_active");var s=function(){if($(".js-progress-bar").is(":visible")){var e=($(".js-progress-bar").outerWidth()-6)/($(".js-progress-bar li").outerWidth()+5);for($(".js-progress-bar").empty(),i=0;i<e-1;i++)$("<li></li>").appendTo($(".js-progress-bar"));var s=e/(100/33),t=$(".js-progress-bar li");for(i=0;i<s-1;i++)$(t[i]).addClass("active")}};s(),$(".js-buy-btn").on("click",function(){s()}),$(window).resize(function(){s()}),$(".js-user-btn").on("click",function(){$(".js-user-menu").toggle(),$(".js-user-btn").toggleClass("panel__user_open")}),$(".js-language-btn").on("click",function(){$(".js-language-menu").toggle(),$(".js-language-btn").toggleClass("panel__language_open")}),jQuery(function(e){e(document).mouseup(function(s){var t=e(".js-user-btn");t.is(s.target)||0!==t.has(s.target).length||(e(".js-user-menu").hide(),e(".js-user-btn").removeClass("panel__user_open")),(t=e(".js-language-btn")).is(s.target)||0!==t.has(s.target).length||(e(".js-language-menu").hide(),e(".js-language-btn").removeClass("panel__language_open")),s.stopPropagation()})}),!$(".js-transactions-list tbody").children("tr").length>0?($(".js-block-transactions").removeClass("block-transactions_yes"),$(".js-block-transactions").addClass("block-transactions_no")):($(".js-block-transactions").removeClass("block-transactions_no"),$(".js-block-transactions").addClass("block-transactions_yes")),new Clipboard(".js-clipboard"),$(document).on("closed",".remodal",function(e){$(".js-login-form")[0].reset(),$(".js-registration-form")[0].reset(),$(".js-modal-form")[0].reset(),$(".js-forgot-form")[0].reset()});var t,a,o=912.38;switch($("input[name=method]:checked").val()){case"dash":t="dash",a="dash",o=912.38;break;case"etherium":t="eth",a="eth",o=$(".js-eth-value").attr("value");break;case"litecoin":t="ltc",a="ltc",o=922.38;break;case"bitcoin":t="btc",a="btc",o=$(".js-btc-value").attr("value");break;case"bitcoinCash":t="bch",a="bch",o=923.38;break;case"waves":t="waves",a="waves",o=$(".js-waves-value").attr("value")}$(".js-send-img div").attr("class",""),$(".js-send-img div").addClass("block-calculate__exchange-img block-calculate__exchange-img_"+t),$(".js-send-text").removeClass("dash eth ltc btc bch waves"),$(".js-send-text").addClass(a),$(".js-send-text-rate").html(a),$(".js-send-value-rate").html(o);var n=$(".js-send").val()*o;$(".js-recelve").val(n),$("input[name=method]").change(function(){var e,s,t=912.38;switch($("input[name=method]:checked").val()){case"dash":e="dash",s="dash",t=912.38;break;case"etherium":e="eth",s="eth",t=$(".js-eth-value").attr("value");break;case"litecoin":e="ltc",s="ltc",t=922.38;break;case"bitcoin":e="btc",s="btc",t=$(".js-btc-value").attr("value");break;case"bitcoinCash":e="bch",s="bch",t=923.38;break;case"waves":e="waves",s="waves",t=$(".js-waves-value").attr("value");break;default:alert("ничего не выбрано")}$(".js-send-img div").attr("class",""),$(".js-send-img div").addClass("block-calculate__exchange-img block-calculate__exchange-img_"+e),$(".js-send-text").removeClass("dash eth ltc btc bch waves"),$(".js-send-text").addClass(s),$(".js-send-text-rate").html(s),$(".js-send-value-rate").html(t);var a=$(".js-send").val()*t;$(".js-recelve").val(a)}),$(".js-next-btn").on("click",function(){$(".js-block-progress").slideUp(),$(".js-block-payment").slideUp(),$(".js-block-calculate").slideDown(),$(".js-block-copy").slideDown()}),$(".js-back-btn").on("click",function(){$(".js-block-progress").slideDown(),$(".js-block-payment").slideDown(),$(".js-block-calculate").slideUp(),$(".js-block-copy").slideUp(),s()}),$(".js-send").on("input",function(){var e=912.38;switch($("input[name=method]:checked").val()){case"dash":e=912.38;break;case"etherium":e=$(".js-eth-value").attr("value");break;case"litecoin":e=922.38;break;case"bitcoin":e=$(".js-btc-value").attr("value");break;case"bitcoinCash":e=923.38;break;case"waves":e=$(".js-waves-value").attr("value");break;default:alert("ничего не выбрано")}var s=$(".js-send").val()*e;$(".js-recelve").val(s)}),$(function(){$(".js-youtube").each(function(){$(this).css("background-image","url(http://i.ytimg.com/vi/"+this.id+"/sddefault.jpg)"),$(this).append($("<div/>",{class:"slider-videos__play"})),$(document).delegate("#"+this.id,"click",function(){var e="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1&enablejsapi=1";$(this).data("params")&&(e+="&"+$(this).data("params"));var s=$("<iframe/>",{id:this.id,class:"youtube",frameborder:"0",allowfullscreen:"allowfullscreen",src:e,width:$(this).width(),height:$(this).height()});$(this).replaceWith(s)})})}),window.addEventListener("resize",function(){var e=$(".js-youtube-wrap").height(),s=$(".js-youtube-wrap").width();$("iframe").css("height",e),$("iframe").css("width",s)},!1),$(".js-youtube-wrap").click(function(){if($(".js-youtube-wrap iframe").is(".youtube")){var e=$(".js-youtube-wrap iframe").attr("id"),s="background-image: url(http://i.ytimg.com/vi/"+e+"/sddefault.jpg",t=$("<div></div",{id:e,class:"slider-videos__youtube js-youtube",style:s});$(".js-youtube-wrap iframe").after(t);var a=$("<div></div",{class:"slider-videos__play"});$(".js-youtube").append(a),$(".js-youtube-wrap iframe").remove()}}),$(document).on("click",".js-youtube-stop",function(){jQuery("iframe").each(function(){jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")})}),$(".js-videos-slider").on("swipe",function(e,s,t){jQuery("iframe").each(function(){jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")})}),$(".js-nav-left").mCustomScrollbar({documentTouchScroll:!0}),$(".js-team-text").mCustomScrollbar({documentTouchScroll:!0,theme:"dark"}),(new WOW).init(),$(".game-img").hide();var r=$(window),l=$(".news__title");r.scroll(function(){r.scrollTop()+r.height()>=l.offset().top&&(r.unbind("scroll"),$(".game-img").show(),$(".game-img").addClass("animated fadeInLeft"))}),$(".js-game-img-close").click(function(){$(".game-img").addClass("animated fadeOutLeft")}),setTimeout(function(){$(".js-overflow").dotdotdot({})},1e3),$(window).resize(function(){setTimeout(function(){$(".js-overflow").dotdotdot({})},1e3)})});