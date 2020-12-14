( function() {
	var stem = 'wp-block-scbc-spoiler';
	var revealers = document.querySelectorAll( '.' + stem + '__toggle' );

	revealers.forEach( function( el ) {
		el.addEventListener( 'click', function() {
			el.classList.toggle( 'is-revealed' );
		} );
	} );
} )();
