
// lodder-wapper js
$(window).on('load',function(){
    $('.lodder-wapper').delay(4700).fadeOut(1000)
})

$(document).ready(function () {
    // sidebar js
    $('#sidebar-open').click(function () {
        $('.sidebar').addClass('side-open').removeClass('side-close')
        $('.side-open-c').addClass('side-open-m')
        $('.side-d-block').addClass('side-block')
        $('.sidebar .menus .menu>ul>li>a>span').addClass('side-block')
        $('.sidebar .menus .menu .menu-ttl>h4>i').addClass('d-none')
        $('.xl-b-back-btn').addClass('xl-b-back-open')
    })

    $('#sidebar-close').click(function () {
        $('.sidebar').removeClass('side-open')
        $('.side-open-c').removeClass('side-open-m')
        $('.side-d-block').removeClass('side-block')
        $('.sidebar .menus .menu>ul>li>a>span').removeClass('side-block')
        $('.sidebar .menus .menu .menu-ttl>h4>i').removeClass('d-none')
    })

    $('.xl-b-back-btn').click(function(){
        $(this).removeClass('xl-b-back-open')
        $('.sidebar').removeClass('side-open').addClass('side-close')
        $('.md-menus-bar').removeClass('md-menusbar-open').addClass('md-menusbar-close')
    })

    // color-panel js
    $(".color-swatch").click(function () {
        var color = $(this).attr("id");
        $('#themecss').attr('href', 'css/' + color + '.css');
    })

    $('.h-fa-moon').click(function () {
        $('.h-fa-sun,.h-fa-moon').fadeToggle(1)
    });
    $('.h-fa-sun').click(function () {
        $('.h-fa-sun,.h-fa-moon').fadeToggle(1)
    })

    $('.clr-box').click(function () {
        $(this).addClass('clr-box-af')
        $('.clr-box').not($(this)).removeClass('clr-box-af')
    })

    // border js
    $('.border-btn').click(function () {
        $('.box').addClass('border')
    })
    $('.shadow-btn').click(function () {
        $('.box').removeClass('border')
    })

    // sidebar-menu-js
    $('.menu-link').click(function () {
        $(this).toggleClass('active');
        $('.menu-link').not($(this)).removeClass('active');
    // drop-menu-js
        $('.drop-menu').not($(this).next()).slideUp();
    // drop-menu-icon-js
        $('.faq-i').not($(this).children('span').children('.faq-i')).removeClass('i-t-90');
    });
    
    // drop-menu-js
    $('.dropdown').click(function () {
        $(this).next('.drop-menu').slideToggle(400);
        $('.drop-menu').not($(this).next()).slideUp();
    // drop-menu-icon-js
        $(this).children('span').children('.faq-i').toggleClass('i-t-90');
        $('.faq-i').not($(this).children('span').children('.faq-i')).removeClass('i-t-90');
    });

    // setting-bar js
    $('.stn-btn').click(function () {
        $('.setting-bar').addClass('stnbar-open').removeClass('stnbar-close');
        $('.b-back').addClass('b-back-open')
    });
    $('.stn-btn-close').click(function () {
        $('.setting-bar').addClass('stnbar-close').removeClass('stnbar-open');
        $('.b-back').removeClass('b-back-open')
    });

    // searchbar js
    $('.srcbar-open').click(function () {
        $('.searchbar').addClass('searchbar-open').removeClass('searchbar-close')
        $('.b-back').addClass('b-back-open')
    })
    $('.srcbar-close').click(function () {
        $('.searchbar').addClass('searchbar-close').removeClass('serchbar-open')
        $('.b-back').removeClass('b-back-open')
    })

    // flags js
    $('.flags-open').click(function () {
        $('.flags').slideToggle(400)
        $('.profilebar,.notification,.shoping-cart').hide()
    })

    // shoping-cart-open
    $('.shoping-cart-open').click(function () {
        $('.shoping-cart').show().addClass('shop-open').removeClass('shop-close')
        $('.b-back').addClass('b-back-open')
        $('.profilebar,.notification,.flags').hide()
    })

    // notification js
    $('.notification-open').click(function () {
        $('.notification').toggle(400)
        $('.profilebar,.shoping-cart,.flags').hide()
    })
    
    // profilebar-open js
    $('.profilebar-open').click(function () {
        $('.profilebar').toggle(400)
        $('.notification,.shoping-cart,.flags').hide()
    })
    
    // b-back js
    $('.b-back').click(function () {
        $('.b-back').removeClass('b-back-open')
        $('.searchbar').addClass('searchbar-close').removeClass('serchbar-open')
        $('.shoping-cart').removeClass('shop-open').addClass('shop-close')
        $('.setting-bar').addClass('stnbar-close').removeClass('stnbar-open')
    })

    // owl-carosel js
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 6,
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            1200:{
                items: 6,
            },
            992:{
                items: 4,
            },
            768:{
                items: 3,
            },
            576: {
                items: 2,
            },
            100: {
                items: 2,
            },
        },
    });
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [1000])
    })
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay')
    })

    // md-header js
    $('.md-icon-btn').click(function(){
        $('header .icons').toggleClass('md-icon-o')
    })
    // md-menus-bar-js
    $('#md-menusbar-btn').click(function(){
        $('.md-menus-bar').addClass('md-menusbar-open').removeClass('md-menusbar-close')
        $('.xl-b-back-btn').addClass('xl-b-back-open')
    })
    $('#md-menusbar-close').click(function(){
        $('.md-menus-bar').removeClass('md-menusbar-open').addClass('md-menusbar-close')
        $('.xl-b-back-btn').removeClass('xl-b-back-open')
    })
});