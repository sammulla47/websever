(function () {
 'use strict';
 var isMobile = {
  Android: function () {
   return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
   return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
   return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
   return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
   return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
   return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
  }
 }; /* iPad and iPod detection*/
 var isiPad = function () {
  return (navigator.platform.indexOf("iPad") != -1);
 };
 var isiPhone = function () {
  return ((navigator.platform.indexOf("iPhone") != -1) || (navigator.platform.indexOf("iPod") != -1));
 };
 var fullHeight = function () {
  if (!isMobile.any()) {
   $('.js-fullheight').css('height', $(window).height());
   $(window).resize(function () {
    $('.js-fullheight').css('height', $(window).height());
   });
  }
 };
 var mobileMenuOutsideClick = function () {
  $(document).click(function (e) {
   var container = $("#fh5co-offcanvas, .js-fh5co-nav-toggle");
   if (!container.is(e.target) && container.has(e.target).length === 0) {
    if ($('body').hasClass('offcanvas')) {
     $('body').removeClass('offcanvas');
     $('.js-fh5co-nav-toggle').removeClass('active');
    }
   }
  });
 };
 var contentWayPoint = function () {
  var i = 0;
  $('.animate-box').waypoint(function (direction) {
   if (direction === 'down' && !$(this.element).hasClass('animated-fast')) {
    i++;
    $(this.element).addClass('item-animate');
    setTimeout(function () {
     $('body .animate-box.item-animate').each(function (k) {
      var el = $(this);
      setTimeout(function () {
       var effect = el.data('animate-effect');
       if (effect === 'fadeIn') {
        el.addClass('fadeIn animated-fast');
       } else if (effect === 'fadeInLeft') {
        el.addClass('fadeInLeft animated-fast');
       } else if (effect === 'fadeInRight') {
        el.addClass('fadeInRight animated-fast');
       } else {
        el.addClass('fadeInUp animated-fast');
       }
       el.removeClass('item-animate');
      }, k * 200, 'easeInOutExpo');
     });
    }, 100);
   }
  }, {
   offset: '85%'
  });
 };
 var goToTop = function () {
  $('.js-gotop').on('click', function (event) {
   event.preventDefault();
   $('html, body').animate({
    scrollTop: $('html').offset().top
   }, 500, 'easeInOutExpo');
   return false;
  });
  $(window).scroll(function () {
   var $win = $(window);
   if ($win.scrollTop() > 200) {
    $('.js-top').addClass('active');
   } else {
    $('.js-top').removeClass('active');
   }
  });
 };
 var counterWayPoint = function () {
  if ($('#fh5co-counter').length > 0) {
   $('#fh5co-counter').waypoint(function (direction) {
    if (direction === 'down' && !$(this.element).hasClass('animated')) {
     setTimeout(counter, 400);
     $(this.element).addClass('animated');
    }
   }, {
    offset: '90%'
   });
  }
 };
 var couter = function () {
  const second = 1000,
   minute = second * 60,
   hour = minute * 60,
   day = hour * 24;
  let countDown = Date.parse('Aug 15, 2025 24:00:00');
  let x = setInterval(function () {
   let now = new Date().getTime();
   let distance = countDown - now;
   document.getElementById('days').innerText = Math.floor(distance / (day)), document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)), document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)), document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
  }, second)
 }
 $(function () {
  couter();
  fullHeight();
 });
})(jQuery);
