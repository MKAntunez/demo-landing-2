window.addEventListener('scroll', function(){
	let nav = document.querySelector('div');
	let windowPosition = window.scrollY > 0;
	nav.classList.toggle('sticky', windowPosition);
})

window.addEventListener('load', function(){
	new Glider(document.querySelector('.carousel__lista'), {
		slidesToShow: 1,
		slidesToScroll: 1,
		draggable: true,
		
		
		responsive: [
			{
			  // screens greater than >= 775px
			  breakpoint: 500,
			  settings: {
				// Set to `auto` and provide item width to adjust to viewport
				slidesToShow: 2,
				slidesToScroll: 2
			  }
			},{
			  // screens greater than >= 1024px
			  breakpoint: 992,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4
			  }
			}
		]
	});
});



  