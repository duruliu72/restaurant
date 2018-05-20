$(document).ready(function () {
    var scrolllink = $('.scroll');

    //    Smoth scrolling
    scrolllink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.scroll').click(function () {
        $('.navbar-collapse').collapse('hide');
    });
    //    Active link switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrolllink.each(function () {
            var sectionOffset = $(this.hash).offset().top;
            if (sectionOffset <= scrollbarLocation) {
                console.log(this);
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });
});
//fixed menu
$(function () {
    var headerbottom = document.getElementById('bg');
    window.onscroll = function () {
        if (window.pageYOffset <= 513) {
            headerbottom.style.background = "rgba(0,0,0,0.0)";
        } else {
            headerbottom.style.background = "#000";
        }
    }
});