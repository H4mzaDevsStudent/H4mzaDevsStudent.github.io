(function($) {

  $(document).ready(function () {
    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

$(window).on('load', function() {
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
    aos_init();
  });
});



// Init AOS
function aos_init() {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false
  });
}
$(window).on('load', function() {
  aos_init();
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.collapse a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.collapse ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}

/* Rotating text */
if ($('.text-slider').length == 1) {
  var typed_strings = $('.text-slider-items').text();
  var typed = new Typed('.text-slider', {
    strings: typed_strings.split(','),
    typeSpeed: 80,
    loop: true,
    backDelay: 1100,
    backSpeed: 30
  });
}

/* Preloader */

$(window).on('load', function() {
  var preloaderFadeOutTime = 500;
  function hidePreloader() {
    var preloader = $('.preloader');
    setTimeout(function() {
      preloader.fadeOut(preloaderFadeOutTime);
    }, 500);
  }
  hidePreloader();
});


/* navbar */

$(window).on('scroll load', function() {
  if ($(".navbar").offset().top > 20) {
    $(".fixed-top").addClass("top-nav-collapse");
  } else {
    $(".fixed-top").removeClass("top-nav-collapse");
  }
  });


  $(function() {
		$(document).on('click', 'a.page-scroll', function(event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 600, 'easeInOutExpo');
			event.preventDefault();
		});
	});


  $(".navbar-nav li a").on("click", function(event) {
    if (!$(this).parent().hasClass('dropdown'))
        $(".navbar-collapse").collapse('hide');
    });



    $(".button, a, button").mouseup(function() {
      $(this).blur();
    });




  function onScroll(event){
      var scrollPos = $(document).scrollTop();
      $('.collapse a').each(function () {
          var currLink = $(this);
          var refElement = $(currLink.attr("href"));
          if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
              $('.collapse ul li a').removeClass("active");
              currLink.addClass("active");
          }
          else{
              currLink.removeClass("active");
          }
      });
  }

  const sections = [...document.querySelectorAll("section")];

  let options = {
    rootMargin: "0px",
    threshold: 0.25
  };
  
  const callback = (entries, observer) => {
    entries.forEach(entry => {
      const { target } = entry;
      console.log(entry, target)
      
      if (entry.intersectionRatio >= 0.25) {
        target.classList.add("is-visible");
      } else {
        target.classList.remove("is-visible");
      }
    });
  };

  
  const observer = new IntersectionObserver(callback, options);
  
  sections.forEach((section, index) => {
    observer.observe(section);
  });
  
  window.onload(removeClass());
})(jQuery);