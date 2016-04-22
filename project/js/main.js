var hideMenu = function() {
		if ( document.getElementById("navigation").className.match(/(?:^|\s)hide-menu(?!\S)/) ) {
			document.getElementById("navigation").className =
				document.getElementById("navigation").className.replace
					( /(?:^|\s)hide-menu(?!\S)/g , '' )
			console.info('menu closed');
		}
		else {
			document.getElementById("navigation").className += " hide-menu";
			console.info('menu open');
		}
}

window.onload = function() {
	alert("You Changed the Page. Good for you. Have a cookie.");
	document.getElementById("menu-icon").addEventListener( 'click' , hideMenu );
}
