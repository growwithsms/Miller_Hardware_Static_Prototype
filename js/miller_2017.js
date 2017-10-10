
// Home Page Specific Scripts
if( $('.home-page').length ) {
    // Home Page announcements
    var current = 0,
        slides = document.getElementsByClassName('featured-announcement');

    setInterval(function() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].classList.remove('active');
        }
        current = (current != slides.length - 1) ? current + 1 : 0;
        slides[current].classList.add('active');
    }, 6000);


    // Home Page Carousels
    var featuredPromotions = document.querySelector('.featured-promotions');
    var promotions = new Flickity(featuredPromotions, {
        // options
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        arrowShape: {
    		x0: 25,
    		x1: 60, y1: 30,
    		x2: 65, y2: 20,
    		x3: 40
    	}
    });

    var featuredBrands = document.querySelector('.featured-brands');
    var brands = new Flickity(featuredBrands, {
        // options
        cellAlign: 'left',
        imagesLoaded: true,
        prevNextButtons: true,
        pageDots: false,
        groupCells: true,
        wrapAround: true,
        arrowShape: {
    		x0: 25,
    		x1: 60, y1: 30,
    		x2: 65, y2: 20,
    		x3: 40
    	}
    });

}


// Seasons Page Specific Scripts
if( $('.seasons-page').length ) {

    var seasonsHero = document.querySelector('.seasons-hero');
    var heroSlider = new Flickity(seasonsHero, {
        // options
        cellAlign: 'left',
        imagesLoaded: true,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: true,
        cellSelector: '.seasons-hero-slide',
        arrowShape: {
            x0: 25,
            x1: 60, y1: 30,
            x2: 65, y2: 20,
            x3: 40
        }
    });

}

// Mobile Optimizations
checkSize();
$(window).resize(checkSize);
function checkSize(){
    if ($('.navbar-toggle').css('display') == 'none' ){
        // on large screens, do these things
        $('.js-move-to-courtesy-on-mobile').appendTo('.secondary-navbar .nav');
    } else {
        // on small screens, do these things
        $('.js-move-to-courtesy-on-mobile').appendTo('.navbar-right');
    }
}


// Map Tabs
$('.map-tabs').on('click', 'a', function(e){
    e.preventDefault();
    var $mapPanel = $(this).attr('href');
    $('.map-panel').removeClass('active');
    $($mapPanel).addClass('active');
    $('.map-tabs a').removeClass('active');
    $(this).addClass('active');
});