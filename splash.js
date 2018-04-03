document.addEventListener('DOMContentLoaded',e=>{
	let flash = document.getElementById('flash');
	let splash = document.getElementById('splash');
	flash.onclick = function(e) {
		console.log('test');
		splash.src='night.mp4';
		this.className = 'night';
	}
});
