(function () {

    "use strict";

    $(document).ready(function () {

        // Off-Canvas Navigation
        $("#justacy-nav").navigation({
            offCanvasSide: "right",
            effect: "slide"
        });

        // Sticky Nav
        $('.unveiled-navigation').unveiledNavigation({
            unveilAtBottom: false,
            unveilAtTop: true,
            acceleration: 10,
            topClass: 'at-top',
        });

        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 20) {
                $("#top-nav").addClass("ct-nav-fixed");
            } else {
                $("#top-nav").removeClass("ct-nav-fixed");
            }
        });

        // Back to Top Button
        var btn = $('#top-button');
        $(window).scroll(function () {
            if ($(window).scrollTop() > 300) {
                btn.addClass('show');
            } else {
                btn.removeClass('show');
            }
        });

        btn.on('click', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, '300');
        });

        // Side Navigation
        var openclick = $('.open-offcanvas');
        var closeclick = $('.closebtn');
        openclick.on('click', function (e) {
            e.preventDefault();
            $('#mySidenav').fadeIn();
            document.getElementById("innar-side").style.right = "0";
        });

        closeclick.on('click', function (e) {
            e.preventDefault();
            $('#mySidenav').fadeOut();
            document.getElementById("innar-side").style.right = "-350px";
        });

        $(document).click(function () {
            $('#mySidenav').fadeOut();
            document.getElementById("innar-side").style.right = "-350px";
        });

        $(".sidenav-menu").click(function (e) {
            e.stopPropagation();
        });

        $(".open-offcanvas").click(function (e) {
            e.stopPropagation();
        });

        $('.close-overlay').click(function (e) {
            $('.search-overlay').fadeOut();
            e.preventDefault();
        });

        $('.open-search').click(function (e) {
            $('.search-overlay').fadeIn();
            e.preventDefault();
        });

        // Sidebar SLider
        $('.side-slider').slick({
            autoplay: true,
            autoplaySpeed: 2000,
            arrows: false
        });

        // Testimonial SLider
        $('.testimonial-slider').slick({
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: false,
            dots: true
        });

        // Counter 
        if ($('.counter').length) {
            $('.counter').counterUp();
        }

        // Hover Active Class
        if ($(".feature-layout-two").length > 0) {
            $(".feature-layout-two .col-md-4").on("mouseenter mouseleave", function (event) {
                if (event.type === "mouseenter") {
                    $('.feature-item').removeClass('active')
                    $(this)
                        .children()
                        .addClass("active");
                }

                if (event.type === "mouseleave") {
                    $(".feature-layout-two .col-md-4")
                        // .not(this)
                        .children()
                        .removeClass("active");
                }
            });
        }

        // Hover Active Class
        if ($(".feature-layout-three").length > 0) {
            $(".feature-layout-three .col-md-3").on("mouseenter mouseleave", function (event) {
                if (event.type === "mouseenter") {
                    $('.feature-item').removeClass('active')
                    $(this)
                        .children()
                        .addClass("active");
                }

                if (event.type === "mouseleave") {
                    $(".feature-layout-three .col-md-3")
                        // .not(this)
                        .children()
                        .removeClass("active");
                }
            });
        }

        // Hover Active Class
        if ($(".practice-layout-two").length > 0) {
            $(".practice-layout-two .col-md-4").on("mouseenter mouseleave", function (event) {
                if (event.type === "mouseenter") {
                    $('.practice-item').removeClass('active')
                    $(this)
                        .children()
                        .addClass("active");
                }

                if (event.type === "mouseleave") {
                    $(".practice-layout-two .col-md-4")
                        // .not(this)
                        .children()
                        .removeClass("active");
                }
            });
        }

        // Hover Active Class
        if ($(".choose-left").length > 0) {
            $(".choose-left .col-md-6").on("mouseenter mouseleave", function (event) {
                if (event.type === "mouseenter") {
                    $('.choose-item').removeClass('active')
                    $(this)
                        .children()
                        .addClass("active");
                }

                if (event.type === "mouseleave") {
                    $(".choose-left .col-md-6")
                        // .not(this)
                        .children()
                        .removeClass("active");
                }
            });
        }

        // Responsive Dropdown Tabs
        var $nav = $('.nav-pills');

        var _this = this;

        $nav.each(function () {
            var $this = $(this),
                $active = $this.find('a.active'),
                $field = $('<h6 class="nav-current">' + $active.html() + '</h6>');

            $this.wrapAll('<div class="nav-wrapper"></div>')

            $this.before($field);

            $field.on('click', function () {
                if (!$this.is('.open')) $this.stop(true, true).slideDown(250).addClass('open');
                else $this.stop(true, true).slideUp(150).removeClass('open');
            });

            $this.on('click', 'a', function () {
                $field.html($(this).html());
            });

            $('body').on('click', function (event) {
                var $target = $(event.target);

                if (!$target.closest($field).length && $this.is('.open')) {
                    $this.stop(true, true).slideUp(150).removeClass('open');
                }
            });
        });

        // Team carousel
        $('.team-carousel').slick({
            arrows: false,
            dots: true,
            centerPadding: '0',
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true,
                    centerPadding: '0',
                    slidesToShow: 1
                }
            }]
        });

        // Case Filter 
        if ($('.case-items').length) {
            var $grid = $('.case-items').isotope({
                itemSelector: '.mix',
                layoutMode: 'fitRows'
            });

            // bind filter button click
            $('.filters-button-group').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            // change is-checked class on buttons
            $('.filters-button-group').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });
        }

    });

    // Revulation Slider - Home 1
    var revapi348,
        tpj = jQuery;

    tpj(document).ready(function () {
        if (tpj("#rev_slider_348_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_348_1");
        } else {
            revapi348 = tpj("#rev_slider_348_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "//server.local/revslider/wp-content/plugins/revslider/public/assets/js/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 6000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    arrows: {
                        style: "metis",
                        enable: true,
                        hide_onmobile: false,
                        hide_onleave: false,
                        tmp: '',
                        left: {
                            h_align: "left",
                            v_align: "bottom",
                            h_offset: 250,
                            v_offset: 0
                        },
                        right: {
                            h_align: "left",
                            v_align: "bottom",
                            h_offset: 310,
                            v_offset: 0
                        }
                    }
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [868, 768, 960, 720],
                lazyType: "smart",
                parallax: {
                    type: "scroll",
                    origo: "slidercenter",
                    speed: 400,
                    speedbg: 1500,
                    speedls: 1000,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 60, 46, -10, -15, -20, -25, -30, 55],
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }

        try {
            initSocialSharing("348")
        } catch (e) {}
    });

    // Revulation Slider - Home 2
    var tpj = jQuery;
    var revapi26;
    tpj(document).ready(function () {
        if (tpj("#rev_slider_26_1").revolution == undefined) {
            revslider_showDoubleJqueryError("#rev_slider_26_1");
        } else {
            revapi26 = tpj("#rev_slider_26_1").show().revolution({
                sliderType: "standard",
                jsFileLocation: "revolution/js/",
                sliderLayout: "fullscreen",
                dottedOverlay: "none",
                delay: 9000,
                navigation: {
                    keyboardNavigation: "off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    mouseScrollReverse: "default",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        touchOnDesktop: "off",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style: "metis",
                        enable: true,
                        hide_onmobile: true,
                        hide_under: 778,
                        hide_onleave: false,
                        tmp: '',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 20,
                            v_offset: 0
                        }
                    }
                },
                responsiveLevels: [1240, 1024, 778, 480],
                visibilityLevels: [1240, 1024, 778, 480],
                gridwidth: [1240, 1024, 778, 480],
                gridheight: [868, 768, 960, 720],
                lazyType: "none",
                parallax: {
                    type: "scroll",
                    origo: "slidercenter",
                    speed: 2000,
                    levels: [5, 10, 15, 20, 25, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
                },
                shadow: 0,
                spinner: "off",
                stopLoop: "off",
                stopAfterLoops: -1,
                stopAtSlide: -1,
                shuffle: "off",
                autoHeight: "off",
                fullScreenAutoWidth: "off",
                fullScreenAlignForce: "off",
                fullScreenOffsetContainer: "",
                fullScreenOffset: "0",
                hideThumbsOnMobile: "off",
                hideSliderAtLimit: 0,
                hideCaptionAtLimit: 0,
                hideAllCaptionAtLilmit: 0,
                debugMode: false,
                fallbacks: {
                    simplifyAll: "off",
                    nextSlideOnWindowFocus: "off",
                    disableFocusListener: false,
                }
            });
        }
    });

})()