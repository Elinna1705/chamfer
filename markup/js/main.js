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


createNovigation("#main-nav");

createNovigation("#portfolio-nav");

function createNovigation(id)
{
	var nav = $(id);
	$("<select class='nav-select visible-xs' />").appendTo(nav);
	var select = nav.find("select");

	// Populate dropdown with menu items
	nav.find("a").each(function() {
		var el = $(this);
			$("<option />", {
			"value"   : el.attr("href"),
			"text"    : el.text()
		}).appendTo(id + " select");
	});

	$(id + " select").change(function() {
		window.location = $(this).find("option:selected").val();
	});
}