function countdown(){if(document.getElementById("js-sec")){var e=new Date,t=new Date("05 Mar 2018 08:00");e.setTime(Date.parse(t));var s=Math.floor(-(+new Date-e)/1e3/60/60/24),a=Math.floor(-(+new Date-e)/1e3/60/60),o=Math.floor(-(+new Date-e)/1e3/60),n=Math.floor(-(+new Date-e)/1e3)-60*o;o-=60*a,a-=24*s,s<0&&(s="0",a="0",o="0",n="0"),s<=9&&(s="0"+s),a<=9&&(a="0"+a),o<=9&&(o="0"+o),n<=9&&(n="0"+n),document.layers?(document.layers.doc_time.document.write(n),document.layers.doc_time.document.write(o),document.layers.doc_time.document.write(a),document.layers.doc_time.document.write(s),document.layers.doc_time.document.close()):document.getElementById("js-sec").innerHTML=n,document.getElementById("js-min").innerHTML=o,document.getElementById("js-hours").innerHTML=a,document.getElementById("js-days").innerHTML=s,setTimeout("countdown()",1e3)}}countdown(),$(".js-header").css("min-height",$(".js-header-content").outerHeight(!0)+$(".js-menu-row").outerHeight(!0)+parseInt($(".js-header").css("padding-top"))+parseInt($(".js-header").css("padding-bottom"))),$(".js-header-bounty").css("min-height",$(".js-header-content-bounty").outerHeight(!0)+$(".js-menu-row").outerHeight(!0)+parseInt($(".js-header-bounty").css("padding-top"))+parseInt($(".js-header-bounty").css("padding-bottom"))),$(".js-header-content-wrap").css("height",$(".js-header").outerHeight(!0)-parseInt($(".js-header").css("padding-top"))-$(".js-menu-row").outerHeight(!0)),$(window).resize(function(){$(".js-header").css("min-height",$(".js-header-content").outerHeight(!0)+$(".js-menu-row").outerHeight(!0)+parseInt($(".js-header").css("padding-top"))+parseInt($(".js-header").css("padding-bottom"))),$(".js-header-bounty").css("min-height",$(".js-header-content-bounty").outerHeight(!0)+$(".js-menu-row").outerHeight(!0)+parseInt($(".js-header-bounty").css("padding-top"))+parseInt($(".js-header-bounty").css("padding-bottom"))),$(".js-header-content-wrap").css("height",$(".js-header").outerHeight(!0)-parseInt($(".js-header").css("padding-top"))-$(".js-menu-row").outerHeight(!0))}),objectFit.polyfill({selector:".js-news-img",fittype:"cover",disableCrossDomain:"true"}),objectFit.polyfill({selector:".js-team-img",fittype:"cover",disableCrossDomain:"true"}),objectFit.polyfill({selector:".js-panel-avatar",fittype:"cover",disableCrossDomain:"true"}),objectFit.polyfill({selector:".js-news-block-img",fittype:"cover",disableCrossDomain:"true"}),$(window).on("load",function(){function e(e){var t=$(".roadmap-item:nth-child("+e+") .roadmap-item__title h3").text();$(".roadmap__dots li:nth-child("+e+") button").text(t)}if($preloader=$(".js-loader"),$loader=$preloader.find(".loader__img"),$loader.fadeOut(),$preloader.delay(0).fadeOut("slow"),$(".js-menu-btn").click(function(e){$(".js-menu-content").slideToggle(),e.stopPropagation(),$(".js-menu-content > li span + ul").slideUp(),$(".js-menu-content > li span").removeClass("open"),$(".js-menu-btn").toggleClass("open")}),$(document).mouseup(function(e){var t=$(".js-menu li");0===t.has(e.target).length&&($(".js-menu-content > li span + ul").slideUp(),$(".js-menu-content > li span").removeClass("open"),$(".js-menu-content > li").removeClass("active"),$(".js-menu-content > li:first-child").addClass("active")),0===(t=$(".js-menu")).has(e.target).length&&$(window).width()<"480"&&($(".js-menu-content").slideUp(),$(".js-menu-btn").removeClass("open"))}),$(function(){$.myfn=function(e){$(e+" > span").on("click",function(){var t=$(this).siblings("ul");$(e+" span + ul").not(t).slideUp(),$(this).siblings("ul").slideToggle(),$(e+" span").not(this).removeClass("open"),$(this).toggleClass("open"),$(e).not(this).removeClass("active"),$(this).parent().toggleClass("active")})},$.myfn(".js-menu-content > li"),$.myfn(".js-menu-content > li > ul > li")}),$(".js-menu").on("click",".js-menu-scroll",function(e){e.preventDefault();var t=$(this).attr("href"),s=$(t).offset().top;$("body,html").animate({scrollTop:s},500)}),function(e){e(function(){e(".js-modal").styler()})}(jQuery),$(".js-roadmap-slider").slick({dots:!0,infinite:!1,fade:!0,speed:700,dotsClass:"roadmap__dots",arrows:!0,slidesToShow:1,adaptiveHeight:!0,prevArrow:'<button type="button" class="roadmap__arrows roadmap__arrows_prev"><span>Previous</span></button>',nextArrow:'<button type="button" class="roadmap__arrows roadmap__arrows_next"><span>Next</span></button>',responsive:[{breakpoint:820,settings:{fade:!1}}]}),$(".js-roadmap-item.slick-active").height()<$(".roadmap__dots").height()?$(".js-roadmap-slider").css("padding-top",($(".roadmap__dots").height()-$(".js-roadmap-item.slick-active").height())/2):$(".js-roadmap-slider").css("padding-top","10px"),$(".js-roadmap-slider").on("swipe",function(e,t,s,a){$(".js-roadmap-item.slick-active").height()<$(".roadmap__dots").height()?$(".js-roadmap-slider").css("padding-top",($(".roadmap__dots").height()-$(".js-roadmap-item.slick-active").height())/2):$(".js-roadmap-slider").css("padding-top","10px")}),$(".roadmap__dots li").click(function(){$(".js-roadmap-slider").trigger("swipe",[])}),$(window).resize(function(){$(".js-roadmap-slider").trigger("swipe",[])}),$(".js-news-slider").slick({dots:!1,infinite:!1,centerMode:!1,variableWidth:!0,slidesToShow:2,prevArrow:'<button type="button" class="news__arrows news__arrows_prev"><span>Previous</span></button>',nextArrow:'<button type="button" class="news__arrows news__arrows_next"><span>Next</span></button>',responsive:[{breakpoint:1285,settings:{centerMode:!0,slidesToShow:1}},{breakpoint:670,settings:{variableWidth:!1,slidesToShow:1}}]}),$(".js-videos-slider").slick({dots:!1,infinite:!1,centerMode:!1,variableWidth:!0,slidesToShow:3,prevArrow:'<button type="button" class="videos__arrows videos__arrows_prev js-youtube-stop"><span>Previous</span></button>',nextArrow:'<button type="button" class="videos__arrows videos__arrows_next js-youtube-stop"><span>Next</span></button>',responsive:[{breakpoint:1285,settings:{centerMode:!0,slidesToShow:1}}]}),$(window).resize(function(){if($(window).width()>="820"){for(i=1;i<=$(".js-roadmap-slider").find(".roadmap-item").length;i++)e(i);$(".js-roadmap").css("min-height",$(".roadmap__dots").height()+$(".js-roadmap-title").outerHeight(!0)+2*parseInt($(".js-roadmap").css("padding-top"))+"px")}else $(".js-roadmap").css("min-height","auto")}),$(window).width()>="820"){for(i=1;i<=$(".js-roadmap-slider").find(".roadmap-item").length;i++)e(i);$(".js-roadmap").css("min-height",$(".roadmap__dots").height()+$(".js-roadmap-title").outerHeight(!0)+2*parseInt($(".js-roadmap").css("padding-top"))+"px")}else $(".js-roadmap").css("min-height","auto");$(".js-nav-left-btn").click(function(){$(".js-nav-left-btn").toggleClass("open"),$(".js-nav-left").toggleClass("open")}),$(document).mouseup(function(e){var t=$(e.target);0==t.closest(".js-nav-left").length&&0==t.closest(".js-nav-left-btn").length&&$(".js-nav-left").hasClass("open")&&($(".js-nav-left-btn").toggleClass("open"),$(".js-nav-left").toggleClass("open"))}),$(".js-account-menu button").click(function(e){e.preventDefault(),$(".js-account-menu .active").removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-href");$(".tab").not(t).css({display:"none"}),$(t).fadeIn(400),localStorage.setItem("activeContent",t),$(".js-nav-left-btn").toggleClass("open"),$(".js-nav-left").toggleClass("open")});var t=localStorage.getItem("activeContent");t&&($(".js-account-menu .active").removeClass("active"),$('.js-account-menu button[data-href="'+t+'"]').addClass("active"),$(".tab").not(t).css({display:"none"}),$(t).fadeIn(400));var s;$.ajax({url:"https://nodes.wavesnodes.com/assets/balance/3PB9TyoBkRmnzHUSsWPhGeAEka81esmFRNS/Ci4x7rkRo37H3LxMC4bpVfusk8qkcspXTXFSFNSWaajj",success:function(e){$("#tokenssold").html(1e11-e.balance),s=100-e.balance/1e9,a()},dataType:"json"});var a=function(){if($(".js-progress-bar").is(":visible")){var e=($(".js-progress-bar").outerWidth()-6)/($(".js-progress-bar li").outerWidth()+5);for($(".js-progress-bar").empty(),i=0;i<e-1;i++)$("<li></li>").appendTo($(".js-progress-bar"));var t=e/(100/s),a=$(".js-progress-bar li");for(i=0;i<t-1;i++)$(a[i]).addClass("active");s>=2.4&&$(".progress__stage-item:first-child").addClass("progress__stage-item_active")}};a(),$(".js-buy-btn").on("click",function(){a()}),$(window).resize(function(){a()}),$(".js-user-btn").on("click",function(){$(".js-user-menu").toggle(),$(".js-user-btn").toggleClass("panel__user_open")}),$(".js-language-btn").on("click",function(){$(".js-language-menu").toggle(),$(".js-language-btn").toggleClass("panel__language_open")}),jQuery(function(e){e(document).mouseup(function(t){var s=e(".js-user-btn");s.is(t.target)||0!==s.has(t.target).length||(e(".js-user-menu").hide(),e(".js-user-btn").removeClass("panel__user_open")),(s=e(".js-language-btn")).is(t.target)||0!==s.has(t.target).length||(e(".js-language-menu").hide(),e(".js-language-btn").removeClass("panel__language_open")),t.stopPropagation()})}),!$(".js-transactions-list tbody").children("tr").length>0?($(".js-block-transactions").removeClass("block-transactions_yes"),$(".js-block-transactions").addClass("block-transactions_no")):($(".js-block-transactions").removeClass("block-transactions_no"),$(".js-block-transactions").addClass("block-transactions_yes")),new Clipboard(".js-clipboard"),$(document).on("closed",".remodal",function(e){$(".js-login-form")[0].reset(),$(".js-registration-form")[0].reset(),$(".js-modal-form")[0].reset(),$(".js-forgot-form")[0].reset()});var o,n,r=912.38;switch($("input[name=method]:checked").val()){case"dash":o="dash",n="dash",r=912.38;break;case"etherium":o="eth",n="eth",r=$(".js-eth-value").attr("value");break;case"litecoin":o="ltc",n="ltc",r=922.38;break;case"bitcoin":o="btc",n="btc",r=$(".js-btc-value").attr("value");break;case"bitcoinCash":o="bch",n="bch",r=923.38;break;case"waves":o="waves",n="waves",r=$(".js-waves-value").attr("value")}$(".js-send-img div").attr("class",""),$(".js-send-img div").addClass("block-calculate__exchange-img block-calculate__exchange-img_"+o),$(".js-send-text").removeClass("dash eth ltc btc bch waves"),$(".js-send-text").addClass(n),$(".js-send-text-rate").html(n),$(".js-send-value-rate").html(r);var l=$(".js-send").val()*r;if($(".js-recelve").val(l),$("input[name=method]").change(function(){var e,t,s=912.38;switch($("input[name=method]:checked").val()){case"dash":e="dash",t="dash",s=912.38;break;case"etherium":e="eth",t="eth",s=$(".js-eth-value").attr("value");break;case"litecoin":e="ltc",t="ltc",s=922.38;break;case"bitcoin":e="btc",t="btc",s=$(".js-btc-value").attr("value");break;case"bitcoinCash":e="bch",t="bch",s=923.38;break;case"waves":e="waves",t="waves",s=$(".js-waves-value").attr("value");break;default:alert("ничего не выбрано")}$(".js-send-img div").attr("class",""),$(".js-send-img div").addClass("block-calculate__exchange-img block-calculate__exchange-img_"+e),$(".js-send-text").removeClass("dash eth ltc btc bch waves"),$(".js-send-text").addClass(t),$(".js-send-text-rate").html(t),$(".js-send-value-rate").html(s);var a=$(".js-send").val()*s;$(".js-recelve").val(a.toFixed(2))}),$(".js-next-btn").on("click",function(){$(".js-block-payment").slideUp(),$(".js-block-calculate").slideDown(),$(".js-block-copy").slideDown()}),$(".js-back-btn").on("click",function(){$(".js-block-payment").slideDown(),$(".js-block-calculate").slideUp(),$(".js-block-copy").slideUp(),$(".js-calculate")[0].reset(),a()}),$(".js-send").on("input",function(){var e=912.38;switch($("input[name=method]:checked").val()){case"dash":e=912.38;break;case"etherium":e=$(".js-eth-value").attr("value");break;case"litecoin":e=922.38;break;case"bitcoin":e=$(".js-btc-value").attr("value");break;case"bitcoinCash":e=923.38;break;case"waves":e=$(".js-waves-value").attr("value");break;default:alert("ничего не выбрано")}var t=$(".js-send").val()*e;$(".js-recelve").val(t.toFixed(2))}),$(function(){$(".js-youtube").each(function(){$(this).css("background-image","url(http://i.ytimg.com/vi/"+this.id+"/sddefault.jpg)"),$(this).append($("<div/>",{class:"slider-videos__play"})),$(document).delegate("#"+this.id,"click",function(){var e="https://www.youtube.com/embed/"+this.id+"?autoplay=1&autohide=1&enablejsapi=1";$(this).data("params")&&(e+="&"+$(this).data("params"));var t=$("<iframe/>",{id:this.id,class:"youtube",frameborder:"0",allowfullscreen:"allowfullscreen",src:e,width:$(this).width(),height:$(this).height()});$(this).replaceWith(t)})})}),window.addEventListener("resize",function(){var e=$(".js-youtube-wrap").height(),t=$(".js-youtube-wrap").width();$("iframe").css("height",e),$("iframe").css("width",t)},!1),$(".js-youtube-wrap").click(function(){if($(".js-youtube-wrap iframe").is(".youtube")){var e=$(".js-youtube-wrap iframe").attr("id"),t="background-image: url(http://i.ytimg.com/vi/"+e+"/sddefault.jpg",s=$("<div></div",{id:e,class:"slider-videos__youtube js-youtube",style:t});$(".js-youtube-wrap iframe").after(s);var a=$("<div></div",{class:"slider-videos__play"});$(".js-youtube").append(a),$(".js-youtube-wrap iframe").remove()}}),$(document).on("click",".js-youtube-stop",function(){jQuery("iframe").each(function(){jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")})}),$(".js-videos-slider").on("swipe",function(e,t,s){jQuery("iframe").each(function(){jQuery(this)[0].contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}',"*")})}),$(".js-nav-left").mCustomScrollbar({documentTouchScroll:!0}),$(".js-team-text").mCustomScrollbar({documentTouchScroll:!0,theme:"dark"}),(new WOW).init(),$("*").is(".game-img")&&$(window).width()>="768"){$(".game-img").hide();var c=$(window),d=$("#news");c.scroll(function(){c.scrollTop()+c.height()>=d.offset().top&&(c.unbind("scroll"),$(".game-img").show(),$(".game-img").addClass("animated fadeInLeft"))})}$(".js-game-img-close").click(function(){$(".game-img").addClass("animated fadeOutLeft")}),setTimeout(function(){$(".js-overflow").dotdotdot({})},1e3),$(window).resize(function(){setTimeout(function(){$(".js-overflow").dotdotdot({})},1e3)})});