$(document).ready(function() {

    // feed
    var tags = ['dentsuatwork', 'dentsuaegisnetwork'],
    // var tags = ['day', 'night'],
    	slides = [];

    (function loop(index) {
        if (index < tags.length) {
            var $json = 'https://api.instagram.com/v1/tags/' + tags[index] + '/media/recent?access_token=1828642866.1677ed0.79d9608c2a8a46db9db35304d9ce43fa&callback=?'
            $.getJSON($json, {
                    format: "json"
                })
                .done(function(el) {
                    var html = '',
                        date;
                    $.each(el.data, function(i, item) {
                        date = new Date(item.created_time * 1000);
                        // console.log(item)
                        html = '';
                        html += '<div><div class="instafeed__slide"><div class="instafeed__img"><img src="' + item.images.standard_resolution.url + '"></div>';
                        html += '<div class="instafeed__text">';
                        html += '<ul class="instafeed__topline">';
                        html += '<li><i class="icon-watch is-graph"></i><span>' + moment(date).fromNow() + '</span></li>';
                        html += '<li class="is-tag"><i class="icon-insta is-graph"></i><span>#' + tags[index] + '</span></li>';
                        html += '<li><a href="//www.instagram.com/' + item.user.username + '" target="_blank"><div class="instafeed__photo is-graph" style="background-image: url(' + item.user.profile_picture + ')"></div><span>' + item.user.username + '</span></a></li>';
                        html += '</ul>';
                        html += '<div class="instafeed__caption">' + item.caption.text + '</div>';
                        html += '</div></div></div>';
                        slides.push(html)
                        if (i === 19) return false;
                    })
                    loop(++index);
                })
        } else done();

    })(0);

    function done() {
    	var amt 	= slides.length / 2,
    		part 	= slides.splice(amt),
    		result 	= [], halfOne = [], halfTwo = [];

    	var cfg = {
    		slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 4500,
            fade: true,
            pauseOnHover: false
    	}

    	for(var i = 0; i < amt ; i++) {
	    	result.push(slides[i],part[i])
    	}

        halfOne = result.splice(0, amt);
        halfTwo = result;

        $('.js-instafeed1').html(halfOne.join(''));
        $('.js-instafeed1').slick(cfg);

        $('.js-instafeed2').html(halfTwo.join(''));
        $('.js-instafeed2').slick(cfg);
    }
});
