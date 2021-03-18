$(document).ready(function () {
    var device = new MobileDetect(window.navigator.userAgent);
    //goTop
    goToTop();
    //stick
    // device detection

    //===== 此塊程式原本被註解掉，與美工js有異造成手機版座位圖旅客資料沒置頂 2019/02/20 Start =====
    if ($('.seat-passengers-wrapper').length > 0 && device.mobile()) {
        var timer1;
        var el = $('.seat-passengers-wrapper');
        var stickel = el.offset().top;
        $(window).scroll(function () {
            clearTimeout(timer1);
            timer1 = setTimeout(function () {
                sticky(el, stickel);
                $('.seat-passengers.-mobile-slider').slick('setPosition');
            }, 500);
        });
    }
    //===== 2019/02/20 End =====

    //popover
    $('[data-toggle="popover"]').popover({
        boundary: 'viewport',
        
    }).on('shown.bs.popover', function () {
        $('.popover-body').html($(this).data("content"));
    });

    var isAutoPlay = true; 
    var slickItemCount = getSlickItemCount($('.home-banner'));
    if (slickItemCount >= 2) {
        isAutoPlay = true;
    } else {
        isAutoPlay = false;
    }

    //home banner slider
    $('.home-banner').slick({
        centerMode: false,
        slidesToShow: 1,
        autoplay: isAutoPlay,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        variableWidth: true,
        accessibility: false,
        responsive: [
            {
                breakpoint: 1366,
                settings: {
                    centerMode: false,
                    variableWidth: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    variableWidth: false
                }
            }
        ]
    });
    
    //image promotions
    $('.-image-promotions .-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        accessibility: false,
        autoplay: true
    });
    //text promotions
    $('.-text-promotions .-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        accessibility: false,
        autoplay: true
    });
    //text promotions
    $('.home-news .-news').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        accessibility: false
    });

    //image news 
    $('.home-service .-services').slick({
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        cssEase: 'linear',
        accessibility: false,
        variableWidth: true,
        variableHeight: true
    });

    //magazine
    magazine();
    //Fix modal
    $('.modal').each(function () {
        $('body').append($(this));
    });
    var is_Vertical = window.innerHeight > window.innerWidth;
    if (device.mobile() || $(".open-desktop").length > 0) {
        if (device.tablet()) {
            if (device.is('iPad') && is_Vertical) {
                $('.open-landing:not(.-no-ipad)').modal('show');
            } else {
                if (!device.is('iPad')) {
                    $('.open-landing').modal('show');
                }
            }
        } else {
            $('.open-landing').modal('show');
        }
    }

    //steps
    var times = $('.stepwizard .stepwizard-row .stepwizard-step').length;
    var current = $('.stepwizard .stepwizard-row .current').index();
    $('.stepwizard .stepwizard-row').slick({
        slidesToShow: times,

        arrows: false,
        accessibility: false,
        infinite: false,
        dots: false,
        draggable: false,
        touchMove: false,
        swipeToSlide: false,
        swipe: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                centerMode: true,
                slidesToShow: 5,
                variableWidth: true
            }
        }]
    }).slick("goTo", current);


    //function seatSlide() {
    //    var active = $('.seat-passengers.-mobile-slider .-active').index();
    //    //demo for seat selection only do not use this code. Remove in porduction//
    //    /**/$('.seat-passengers.-mobile-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    //        if (!$(nextSlide).is('.-clicked')) {
    //            $(nextSlide).addClass('-clicked');
    //            $('.-latest:not(.-selected)').removeClass('-latest');
    //        }
    //        $(slick.$slides[currentSlide]).removeClass("-active");
    //        $(slick.$slides[nextSlide]).addClass("-active");
    //    });
    //    //end Demo code//
    //    if (!$('.seat-passengers.-mobile-slider').is('.slick-initialized')) {
    //        $('.seat-passengers.-mobile-slider').slick({
    //            slidesToShow: 1,
    //            accessibility: false,
    //            mobileFirst: true,
    //            responsive: [
    //                  {
    //                      breakpoint: 1023,//iphone x
    //                      settings: 'unslick'
    //                  }
    //            ]
    //        }).slick("goTo", active);
    //    }
    //}
    //seatSlide();



    //Form Label animation 
    $('input[type="text"],input[type="password"], select,textarea', $('.input-form')).each(function (e) {
        inpLabel($(this));
    });
    //passengerSize
    $('.select-passengers .item button').each(function (e) {
        $(this).click(function myfunction(e) {
            e.preventDefault();
            passengerSize($(this));
        });
    });

    //Datepicker(與現行萬年曆衝突，故拿掉美工js)
    //$('.datepicker-trigger').datepicker({
    //    onShow: function myfunction(dp, init) {
    //        if ($(dp.el).val() === "") {
    //            $(dp.el).val("-");
    //        }
    //    },
    //    onHide: function myfunction(dp, init) {
    //        if ($(dp.el).val() === "-") {
    //            $(dp.el).val("").blur();
    //        }
    //    },
    //    dateFormat: "yyyy/mm/dd"
    //});

    //bind date with js
    //var dp = $('.datepicker-trigger#inp12').focus().data('datepicker');
    //dp.selectDate(new Date('2000/09/08'));

    $('.interactive-cards input[type=radio]').change(function (e) {
        e.preventDefault();
        var $this = $(this);
        $('.-checked', $this.parents('.interactive-cards')).removeClass('-checked')
        $this.parents('.item').addClass('-checked');
    });


    $('.wrapper').on("click", ".accordion-header .-trigger", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");
        $('.-trigger').toggleClass("active");
        if ($(this).is('.-show-all')) {
            $('button[data-toggle="collapse"].collapsed', $(target)).trigger("click");
        } else {
            $('button[data-toggle="collapse"]', $(target)).not('.collapsed').trigger("click");
        }
    });
    $('.wrapper').on("click", ".scroll-box-wrapper .-show-more", function (e) {
        $(this).parent().toggleClass('-open');
        $(this).toggleClass('active');
    });

    //scroll-animations
    AOS.init({
        duration: 500
    });

    //dropdown animation
    $('.header .-lang-bar .dropdown').on('show.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(200);
    });

    $('.header .-lang-bar .dropdown').on('hide.bs.dropdown', function (e) {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(200);
    });

    //Close Cookie
    $('.close-cookie').click(function () {
        $('.cookie-warning').remove();
    });

    //calendar-list

    var $status = $('.-counter');
    $('.calendar-list').on(' init  reInit afterChange', function (event, slick, currentSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? (currentSlide / slick.options.slidesToScroll) : 0) + 1;
        $status.text(i + '/' + Math.ceil(slick.slideCount / slick.options.slidesToScroll));
    });
    // 重複呼叫導致列表頁異常
    //$('.calendar-list').slick({
    //    infinite: true,
    //    customPaging: function (i) {
    //        return (
    //          '<a>{pagination[i]}</a>'
    //        );
    //    },
    //    prevArrow: $('#prev-news'),
    //    nextArrow: $('#next-news')
    //});

    //resize window 
    var timer2;

    $(window).on('resize orientationchange', function () {
        clearTimeout(timer2);
        timer2 = setTimeout(function () {
            if ($(this).width() < 1023) {
                $('.stepwizard .stepwizard-row').slick("goTo", current);
                //seatSlide();
            }
        }, 1000);
    });
    console.log($('.travel-alert-content-item').length + '***')
    if ($('.travel-alert-content-item').length === 1) {
        $('.travel-alert-bat').css("background-image", "none");
        $('.travel-alert-content-item').eq(0).css({ top: '0' }).addClass("action");
    } else {
    var travel_alert_flag = false;
    var travel_alert_is_run = false;
        $('.travel-alert-content-item').eq(0).css({ top: '0' }).addClass("action");
    window.setInterval(function () {
        if (!travel_alert_flag && !travel_alert_is_run) {
            travel_alert_content_item_move('up',false);
        }
    }, 4000);
    $('.travel-alert-up').click(function () {
        if (!travel_alert_is_run){
            travel_alert_content_item_move('down', true);
        }
    });
    $('.travel-alert-down').click(function () {
        if (!travel_alert_is_run) {
            travel_alert_content_item_move('up', true);
        }
    });
    $('#travel-alert').mouseover(function () {
        var vw = $(window).width();
        if (vw > 1023) {
        travel_alert_flag = true;
        }
    });
    $('#travel-alert').mouseout(function () {
        var vw = $(window).width();
        if (vw > 1023) {
            travel_alert_flag = false;
        }
    });
    var click_is_travel_alert = false
    $(document).click(function (e) {
        var vw = $(window).width();
        if (vw < 1024) {
            if (click_is_travel_alert) {
                click_is_travel_alert = false
                travel_alert_flag = true;
                console.log(travel_alert_flag)
            } else {
                click_is_travel_alert = false
        travel_alert_flag = false;
                console.log(travel_alert_flag)
            }
        }
    });
    $('#travel-alert').click(function (e) {
        click_is_travel_alert = true
    });
    function travel_alert_content_item_move(upOrDown, isClickBat) {
        if (!travel_alert_is_run) {
            travel_alert_flag = true;
            travel_alert_is_run = true
            var itenIndex = $('.travel-alert-content-item').index($('.travel-alert-content-item.action'))
            var itemCount = $('.travel-alert-content-item').length - 1
            var nextIndex = 0;
                var move = "=1.2rem";
            var moveString = "";
            if (upOrDown === "up") {
                nextIndex = (itenIndex === itemCount) ? 0 : itenIndex + 1;
                moveString = "-" + move;
            } else {
                nextIndex = (itenIndex === 0) ? itemCount : itenIndex - 1;
                moveString = "+" + move;
            }
            indexItemDiv = $('.travel-alert-content-item').eq(itenIndex);
            nextItemDiv = $('.travel-alert-content-item').eq(nextIndex);
            if (upOrDown !== "up") {
                nextItemDiv.css({ top: '-1.2rem' });
            }
            indexItemDiv.animate({
                top: moveString
            }, 1000, function () {
                indexItemDiv.removeClass("action");
                indexItemDiv.css({ top: '1.2rem' });
                travel_alert_flag = (!isClickBat) ? false : true;
                travel_alert_is_run = false;
            });
            nextItemDiv.animate({
                top: moveString
            }, 1000, function () {
                nextItemDiv.addClass("action");
                travel_alert_flag = (!isClickBat) ? false : true;
                travel_alert_is_run = false;
            });
        }
        
    }
    }
});