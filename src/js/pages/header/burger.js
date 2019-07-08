import $ from 'jquery';

export default $(() => {
  $('.burger-menu').on('click', () => {
    $('.burger-menu').toggleClass('open');
    $('.letter').toggleClass('white');
		$('.mobile-menu').toggleClass('on');
		$('body').toggleClass('overflow-hidden');
  })
})
