$(function () {
    /*
     *锚点点击跳转
     */
    var href = "";
    var pos = 0;
    $(".nav-tags a").click(function (e) {
        $(".nav-tags li").each(function () {
            $(this).removeClass("active");
        });
        $(this).parent("li").addClass("active");
        e.preventDefault();
        href = $(this).attr("href");
        pos = $(href).position().top - 30;
        $("html,body").animate({ scrollTop: pos }, 500);
    });
    $(".nav-item.active").next().css("display", "block");

    $.fn.linkFavour = function () {
        var id = $(this).data("id"),
            action = $(this).data('action'),
            rateHolder = $(this).children('.count');
        if ($(this).hasClass('done')) {
            $(this).removeClass('done');
            var _this = $(this);
            var ajaxData = {
                linkId: id,
            };
            $.ajax({
                type: "POST",
                url: currentController + "/ajaxFavour",
                data: ajaxData,
                beforeSend: function () {
                    // _this.find('i').animate({
                    //     "fontSize": "15px"
                    // }, 1, function () {
                    //     $(this).animate({
                    //         "fontSize": "15px"
                    //     }, 1);
                    // });

                },
                success: function (data) {
                    $(rateHolder).html(data);
                }
            });
            return false;
        } else {
            $(this).addClass('done');
            var _this = $(this);
            var ajaxData = {
                linkId: id,
            };
            $.ajax({
                type: "POST",
                url: currentController + "/ajaxFavour",
                data: ajaxData,
                beforeSend: function () {
                    // _this.find('i').animate({
                    //     "fontSize": "15px"
                    // }, 1, function () {
                    //     $(this).animate({
                    //         "fontSize": "15px"
                    //     }, 1);
                    // });

                },
                success: function (data) {
                    $(rateHolder).html(data);
                }
            });
            return false;
        }
    };
    $(document).on("click", ".favour", function () {
        $(this).linkFavour();
    });

    $(".btn-mobile-sidenav").click(function () {
        $(".sidenav").addClass("show-sidenav");
        $(".sidenav").removeClass("hide-sidenav");
        $(".mobile-header-wrap").append("<div class='sidenav-mark'></div>");
        $('body').css({
            'overflow': 'hidden',
        });
    });
    $(".btn-mobile-close").click(function () {
        $(".sidenav").addClass("hide-sidenav");
        $(".sidenav").removeClass("show-sidenav");
        $(".mobile-header-wrap .sidenav-mark").animate({
            opacity: 0,
        }, 500, function () {
            $(this).remove();
        });
        $('body').css({
            'overflow': 'auto',
        });
    });

    var UA = navigator.userAgent.toLowerCase();
    var scrollWidth = 0;
    if (UA.indexOf("chrome") > 0 && UA.indexOf("edge") < 0) {
        scrollWidth = "4px";
    } else if (UA.indexOf("edge") > 0) {
        scrollWidth = "12px";
    } else {
        scrollWidth = "17px";
    }

    $(".sidenav").hover(
        function () {
            $('body').css({
                'overflow': 'hidden',
                'paddingRight': scrollWidth,
            });
        },
        function () {
            $('body').css({
                'overflow': 'auto',
                'paddingRight': "0px",
            });
        }
    );
    var x = 10;
    var y = 20;

    /**
     * Show Tooltip
     * start
     */
    $("a.link-tooltip").mousemove(function (e) {
        var linkTooltip = $("#link-tooltip");
        if (!linkTooltip.length) {
            this.tooltipTitle = this.title;
            this.title = "";
            linkTooltip = $("<div id='link-tooltip'><div class='tooltip-content'>" + this.tooltipTitle + "</div></div>");
            $("body").append(linkTooltip);
        }

        linkTooltip.css({
            "top": (e.pageY + y) + "px",
            "left": (e.pageX + x) + "px"
        }).show("fast");

    }).mouseout(function () {
        this.title = this.tooltipTitle;
        $("#link-tooltip").remove();
    });
    /**
     * Show Tooltip
     * end
     */

    $(".tool-img").each(function () {
        $(this).bind({
            mouseenter: function () {
                $(this).find(".tool-platform").slideDown(160);
            },
            mouseleave: function () {
                $(this).find(".tool-platform").slideUp(160);
            }
        });
    });
});

/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function ($) {
    $.fn.UItoTop = function (options) {
        var defaults = { text: 'To Top', min: 200, inDelay: 600, outDelay: 400, containerID: 'toTop', containerHoverID: 'toTopHover', scrollSpeed: 1200, easingType: 'linear' }, settings = $.extend(defaults, options), containerIDhash = '#' + settings.containerID, containerHoverIDHash = '#' + settings.containerHoverID; $('body').append('<a href="#" id="' + settings.containerID + '">' + settings.text + '</a>'); $(containerIDhash).hide().on('click.UItoTop', function () { $('html, body').animate({ scrollTop: 0 }, settings.scrollSpeed, settings.easingType); $('#' + settings.containerHoverID, this).stop().animate({ 'opacity': 0 }, settings.inDelay, settings.easingType); return false; }).prepend('<span id="' + settings.containerHoverID + '"></span>').hover(function () { $(containerHoverIDHash, this).stop().animate({ 'opacity': 1 }, 600, 'linear'); }, function () { $(containerHoverIDHash, this).stop().animate({ 'opacity': 0 }, 700, 'linear'); }); $(window).scroll(function () {
            var sd = $(window).scrollTop(); if (typeof document.body.style.maxHeight === "undefined") { $(containerIDhash).css({ 'position': 'absolute', 'top': sd + $(window).height() - 50 }); }
            if (sd > settings.min)
                $(containerIDhash).fadeIn(settings.inDelay); else
                $(containerIDhash).fadeOut(settings.Outdelay);
        });
    };
})(jQuery);