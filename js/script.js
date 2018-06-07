 $(document).ready(function () {
     $('#main-slider').owlCarousel({
         loop: true,
         margin: 10,
         nav: false,
         margin: 10,
         items: 1
     });
     $('#sp-offer').owlCarousel({
         loop: true,
         autoplay: true,
         margin: 10,
         responsive: {
             // breakpoint from 0 up
             0: {
                 items: 1
             },
             // breakpoint from 480 up
             480: {
                 items: 2,
             },
             // breakpoint from 768 up
             768: {
                 items: 4,
             }
         }
     });
     var containerEl = document.querySelector('.grid');
     var mixer = mixitup(containerEl);
     $('.cheaf-carousel').owlCarousel({
         loop: true,
         autoplay: true,
         margin: 15,
         responsive: {
             // breakpoint from 0 up
             0: {
                 items: 1
             },
             // breakpoint from 480 up
             480: {
                 items: 2,
             },
             // breakpoint from 768 up
             768: {
                 items: 4,
             }
         }
     });

     //    For scrolling
     var scrolllink = $('.scroll');
     //    smooth scrolling
     scrolllink.click(function (e) {
         e.preventDefault();
         $('body,html').animate({
             scrollTop: $(this.hash).offset().top - 50,
         }, 1000);
     });
     //    Active link switching
     $(window).scroll(function () {
         var scrollbarlocation = $(this).scrollTop() + 65;
         scrolllink.each(function () {
             var sectionoffset = $(this.hash).offset().top;
             if (sectionoffset <= scrollbarlocation) {
                 $(this).parent().addClass('active');
                 $(this).parent().siblings().removeClass('active');
             }
         });
     });
     //AOS Effect
     AOS.init();
 });
