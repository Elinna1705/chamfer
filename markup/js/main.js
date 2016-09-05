$(function(){
	$('#gallery').slick({
		slidesToShow: 2,
		slidesToScroll: 2,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}

		]
	});

	
})

