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