document.onkeydown = function(e) {
if(event.keyCode == 123) {
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
return false;
}
if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
return false;
}
}

// -------------- code for disable inspect element end------------//
function mytawktoFunction() {
  window.open("https://tawk.to/chat/5c6ff4bf3341d22d9ce59bd9/default", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=200,left=600,width=400,height=400");
}



jQuery(document).ready(function($){
"use strict";
  if($('.lazy').length > 0){
  $(function() {
       $('.lazy').Lazy();
   });
}
  $('body').bind('cut copy paste', function (e) {
       e.preventDefault();


   });

   //Disable mouse right click
   $("body").on("contextmenu",function(e){
       return false;
   });



     $(".Disclaimer .close").click(function() {
         $(".Disclaimer").fadeOut();
     });

if($('#WAButton').length > 0){
     $(function() {
       $('#WAButton').floatingWhatsApp({
         phone: '919168280680', //WhatsApp Business phone number International format-
         //Get it with Toky at https://toky.co/en/features/whatsapp.
         headerTitle: 'Chat with us on WhatsApp!', //Popup Title
         popupMessage: 'Hello, how can we help you?', //Popup Message
         showPopup: false, //Enables popup display
         buttonImage: '<img src="https://www.secure2pc.com/images/iconwhatsapp.png" />', //Button Image
         //headerColor: 'crimson', //Custom header color
         //backgroundColor: 'crimson', //Custom background button color
         position: "right"
       });
     });
   }


$('.readmore365').click(function(){
    $(".AMCBuyForm").hide();
    $(".Amc365Details").fadeToggle(500);

      // $(".Amc365Details").slideToggle(500);
      $(".Amc365Details").toggleClass("show");
      $('html, body').animate({
    scrollTop: $(".Amc365Details").offset().top - 200
  }, 1000)
})
$('.buynowbtn').click(function(){
    $(".Amc365Details").hide();
    $(".AMCBuyForm").fadeToggle(500);
      $(".AMCBuyForm").toggleClass("show");
      $('html, body').animate({
    scrollTop: $(".AMCBuyForm").offset().top - 200
  }, 1000)
});

  $(".icon").click(function() {
      $(".navigation").fadeToggle(500);
      $(".top-menu").toggleClass("top-animate");
      $(".mid-menu").toggleClass("mid-animate");
      $(".bottom-menu").toggleClass("bottom-animate");
  });

  $(function() {
      $('.showmenu').click(function() {
          $(this).toggleClass("active");
          $('.submenu').toggle();
      });
  });
  var getheight = $(window).height();
  var getheaderheight = $("#header").height();
  var getfooterheight = $("#footer-wrapper").height();
  var fullheight = getheight - getheaderheight - getfooterheight;
  $("#wrapper").css('min-height', fullheight - 42);


  if($('.assemble_slider').length > 0){
    $('.assemble_slider').on('init', function () {
      $('.assemble_slider').addClass("loaded");
      //console.log("initialized")
     });

      $('.assemble_slider').slick({
        dots: false,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        // appendArrows:'.slidePager',
        responsive: [
          {
            breakpoint: 1061,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },

          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              adaptiveHeight: true
            }
          }
            ]
      });


    }

    if($('.questionAnswer').length > 0){

//alert('hi');
$('.tabBtn').click(function() {
    $(this).toggleClass("active");
    $(this).next().stop().slideToggle();
  });
    }


    if ($('.accordianPannel').length > 0) {
  // $('.accordianRow:first-child .accordianTab').addClass('active');
  $('.accordianTab').click(function () {
      $(this).parent().addClass('active');
    $('.accordianRow .accordianinfo').stop().slideUp();
    $('.accordianRow').removeClass('active');
    var getthisid = $(this).next('.accordianinfo');
    if ($(getthisid).is(':hidden')) {
      $(getthisid).stop().slideToggle();
      $(this).parent().addClass('active');
    }
    if ($(window).width() < 767) {
  setTimeout(function(){
    $('html,body').animate({
       scrollTop: $(getthisid).offset().top-200
    }, 'slow');
  }, 1000);
  }

  });
}

    // $('body').bind('onload', function (e) {
    //   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    //   (function(){
    //   var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    //   s1.async=true;
    //   s1.src='https://embed.tawk.to/5c6ff4bf3341d22d9ce59bd9/default';
    //   s1.charset='UTF-8';
    //   s1.setAttribute('crossorigin','*');
    //   s0.parentNode.insertBefore(s1,s0);
    //   })();
    //
    //  });
});

/* Thanks to CSS Tricks for pointing out this bit of jQuery
https://css-tricks.com/equal-height-blocks-in-rows/
It's been modified into a function called at page load and then each time the page is resized. One large modification was to remove the set height before each new calculation. */

equalheight = function(container){

var currentTallest = 0,
     currentRowStart = 0,
     rowDivs = new Array(),
     $el,
     topPosition = 0;
 $(container).each(function() {

   $el = $(this);
   $($el).height('auto')
   topPostion = $el.position().top;

   if (currentRowStart != topPostion) {
     for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
       rowDivs[currentDiv].height(currentTallest);
     }
     rowDivs.length = 0; // empty the array
     currentRowStart = topPostion;
     currentTallest = $el.height();
     rowDivs.push($el);
   } else {
     rowDivs.push($el);
     currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
  }
   for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
     rowDivs[currentDiv].height(currentTallest);
   }
 });
}

$(window).on("orientationchange",function(){
  equalheight('.equal-height');
  tabletitle();
});

$(window).on("load", function() {
  equalheight('.equal-height');
tabletitle();
});


$(window).resize(function(){
  equalheight('.equal-height');
  tabletitle();
});

function tabletitle() {
var getheight = $('.equal-height').height();
$(".assemble_computerTitle").css('top', getheight + 41);
}
