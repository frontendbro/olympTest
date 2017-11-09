document.addEventListener('DOMContentLoaded', onDomReady);

function onDomReady() {
	var buttonMenu = document.querySelector('#button-menu');
	var popover = document.querySelector('.menu-popover');
		
		
	buttonMenu.addEventListener('click', function(event) {
			buttonMenu.classList.add('button-menu_active');
			popover.style.display = 'inline-block';
			event.stopPropagation();
	});
	
	popover.addEventListener('click', function(event) {
			event.stopPropagation();
	});
	
	function closebc() {
		buttonMenu.classList.remove('button-menu_active');
		popover.style.display = 'none';
	}
	
	document.addEventListener('click', closebc);
};
