$(document).ready(function() {

    // feed
    var $json = 'https://api.instagram.com/v1/tags/DENTSUATWORK/media/recent?access_token=1828642866.1677ed0.79d9608c2a8a46db9db35304d9ce43fa&callback=?';

    $.getJSON($json, {
            format: "json"
        })
        .done(function(el) {
            var html = '', date;
            $.each(el.data, function(i, item) {
                date = new Date(item.created_time * 1000);
                // console.log(item)
                // $('<img>').attr("src", item.images.standard_resolution.url).appendTo(".test");
                html += '<div><div class="instafeed__slide"><div class="instafeed__img"><img src="' + item.images.standard_resolution.url + '"></div>';
                html += '<div class="instafeed__text">';
                html += '<ul class="instafeed__topline">';
                html += '<li><a href="#"><i class="icon-insta is-graph"></i><span>#DENTSUATWORK</span></a></li>';
                html += '<li><a href="#"><div class="instafeed__photo is-graph"><img src="'+ item.user.profile_picture +'" alt=""></div><span>' + item.user.username + '</span></a></li>';
                html += '<li><a href="#"><i class="icon-clock is-graph"></i><span>2m ago</span></a></li>';
                html += '</ul>';
                html += '<div class="instafeed__caption">' + item.caption.text + '</div>';
                html += '</div></div></div>';
                if(i === 20) return false;
            })
            // console.log( html);
            $('.js-slider-instafeed').html(html);
            $('.js-slider-instafeed').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            });
        });
});
