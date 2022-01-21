window.addEventListener('scroll', function(){
	let nav = document.querySelector('div');
	let windowPosition = window.scrollY > 0;
	nav.classList.toggle('sticky', windowPosition);
})


function cambiarClase(){
	document.getElementById("headingOne").classList.toggle("btn btn-link collapsed");
}
document.getElementById("boton").onclick = funtion();{
	canbiarClase();
}

