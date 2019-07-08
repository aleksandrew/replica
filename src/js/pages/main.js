import $ from 'jquery';

export default $(() => {
	const menuItems = $('#exploreWrap');

	scrollAnimate();

	function scrollAnimate() {
		menuItems.on('click', function (e) {
			let href = $(this).attr("href");
			let offsetTop = href === "#" ? 0 : $(href).offset().top;
			
			$('html, body').stop().animate({
				scrollTop: offsetTop
			}, 850);
			
			e.preventDefault();
		});
	}
})
