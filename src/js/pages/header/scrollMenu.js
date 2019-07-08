import $ from 'jquery';

export default $(() => {

	let navbarHeight = $('.header').outerHeight();
	const delta = 5;
	let lastScrollTop = 0;

	$(window).scroll(hasScrolled);

	function hasScrolled() {
		let scrollTop = $(this).scrollTop();

		if ( Math.abs(lastScrollTop - scrollTop) <= delta)
			return;

		if ( scrollTop > lastScrollTop && scrollTop > navbarHeight) {
			$('.header').removeClass('nav-dovn').addClass('nav-up');
		} else {
			if ( scrollTop + $(window).height() < $(document).height()) {
				$('.header').removeClass('nav-up').addClass('nav-down');
			}
		}

		lastScrollTop = scrollTop;

	};

	// const PREVSCROLLPOS = $(window).pageYOfset;
	// $(window).scroll = () => {
	// 	let currentScrollPos = $(window).pageYOfset;

	// 	if (PREVSCROLLPOS > currentScrollPos) {
	// 		$('.header').style.top = "0%";
	// 	} else {
	// 		$('.header').style.top = "-10%";
	// 	}

	// 	PREVSCROLLPOS = currentScrollPos

	// 	console.log(currentScrollPos);
	// }
})

