
jQuery(document).ready(function($) {
    var timeout;
    $(window).on("load resize", function () {
        if (timeout) {
            window.clearTimeout(timeout);
        }
        timeout = setTimeout(function () {
            $("#techlist > li").removeClass("first last").each(function () {
                if ($(this).next().length && $(this).offset().top < $(this).next().offset().top) {
                    $(this).addClass("last");
                }
                if ($(this).prev().length && $(this).offset().top > $(this).prev().offset().top) {
                    $(this).addClass("first");
                }
            });
        }, 0);
    });

    /*======= Skillset *=======*/
    $('.level-bar-inner').css('width', '0');
    $(window).on('load', function() {
        $('.level-bar-inner').each(function() {
            var itemWidth = $(this).data('level');
            //$(this).css('width', itemWidth);
            $(this).animate({ width: itemWidth }, 800);
        });



        $('.skills-soft li').find('svg').each(function(i) {
            var c, cbar, circle, percent, r;
            circle = $(this).children('.cbar');
            r = circle.attr('r');
            c = Math.PI * (r * 2);

            percent = $(this).parent().data('percent');
            cbar = ((100 - percent) / 100) * c;
            circle.css({
              'stroke-dashoffset': c,
              'stroke-dasharray': c
            });

            circle.delay(i * 150).animate({
              strokeDashoffset: cbar
            }, 1000, 'linear', function() {
              return circle.css({
                'transition-duration': '.3s'
              });
            });

            $(this).siblings('small').prop('Counter', 0).delay(i * 150).animate({
                  Counter: percent
                }, {
                  duration: 1000,
                  step: function(now) {
                    return $(this).text(Math.ceil(now) + '%');
                  }
                });
        });
    });



});