$(document).ready(function() {

    // go js
    $('.js-slider-instafeed').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    });
    // feed
    var $json = 'https://api.instagram.com/v1/tags/snowy/media/recent?access_token=1828642866.1677ed0.79d9608c2a8a46db9db35304d9ce43fa&callback=?';

    $.getJSON($json, function(el) {
        $.each(el, function(i, key) {
        	console.log(el);
        })
    });
});
