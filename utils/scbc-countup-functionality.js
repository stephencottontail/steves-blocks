( function() {
	var countups = document.querySelectorAll( '.wp-block-scbc-countup' );
	var i;

	for ( i = 0; i < countups.length; i++ ) {
		new Waypoint( {
			element: countups[i],
			handler: function() {
				console.log( this.element.innerHTML );
				this.disable();
			},
			offset: '50%'
		} );
	}
} )();
