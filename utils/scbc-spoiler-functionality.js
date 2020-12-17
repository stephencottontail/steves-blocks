( function() {
	var stem = 'wp-block-scbc-spoiler';
	var revealers = document.querySelectorAll( '.' + stem + '__toggle' );

	revealers.forEach( function( el ) {
		el.addEventListener( 'click', function() {
			var content = el.nextSibling;

			el.classList.toggle( 'is-revealed' );
			if ( el.classList.contains( 'is-revealed' ) ) {
				content.setAttribute( 'aria-hidden', false );
			} else {
				content.setAttribute( 'aria-hidden', true );
			}
		} );
	} );
} )();
