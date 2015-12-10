$(document).ready(function() {

	// feed
	$('.js-instafeed').each(function() {
		var tag 	= $(this).data("hashtag"),
			$json 	= 'https://api.instagram.com/v1/tags/' + tag + '/media/recent?access_token=1828642866.1677ed0.79d9608c2a8a46db9db35304d9ce43fa&callback=?',
			mydiv 	= $(this);

		$.getJSON($json, {
				format: "json"
			})
			.done(function(el) {
				var html = '', date;
				$.each(el.data, function(i, item) {
					date = new Date(item.created_time * 1000);
					// console.log(item)
					html += '<div><div class="instafeed__slide"><div class="instafeed__img"><img src="' + item.images.standard_resolution.url + '"></div>';
					html += '<div class="instafeed__text">';
					html += '<ul class="instafeed__topline">';
					html += '<li class="is-tag"><i class="icon-insta is-graph"></i><span>#' + tag + '</span></li>';
					html += '<li><a href="//www.instagram.com/' + item.user.username + '" target="_blank"><div class="instafeed__photo is-graph" style="background-image: url('+ item.user.profile_picture +')"></div><span>' + item.user.username + '</span></a></li>';
					html += '<li><i class="icon-watch is-graph"></i><span>' + moment(date).startOf('day').fromNow() + '</span></li>';
					html += '</ul>';
					html += '<div class="instafeed__caption">' + item.caption.text + '</div>';
					html += '</div></div></div>';
					if(i === 20) return false;
				})

				mydiv.html(html);
				mydiv.slick({
					slidesToShow: 1,
					slidesToScroll: 1,
					arrows: false,
					autoplay: true,
					autoplaySpeed: 4500,
					fade: true,
					pauseOnHover: false
				});
			});
	});
	
});
