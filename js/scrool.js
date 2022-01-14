window.addEventListener('scroll', function(){
	let nav = document.querySelector('div');
	let windowPosition = window.scrollY > 0;
	nav.classList.toggle('sticky', windowPosition);
})


