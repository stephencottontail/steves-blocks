( function() {
	var countups = document.querySelectorAll( '.wp-block-scbc-countup' );
	var i;

	var animationDuration = 2000;
	var frameDuration = 1000 / 60;
	var totalFrames = Math.round( animationDuration / frameDuration );
	var easeOutQuad = t => t * ( 2 - t );

	for ( i = 0; i < countups.length; i++ ) {
		new Waypoint( {
			element: countups[i],
			offset: '50%',
			handler: function() {
				console.log( this.element );
				var frame = 0;
				var targetEl = this.element.querySelector( '.wp-block-scbc-countup__number span' );
				var targetNumber = parseInt( targetEl.innerHTML, 10 );

				var counter = setInterval( function() {
					frame++;

					var progress = easeOutQuad( frame / totalFrames );
					targetEl.innerHTML = Math.round( targetNumber * progress );

					if ( frame === totalFrames ) {
						clearInterval( counter );
					}
				}, frameDuration );

				this.disable();
			}
		} );
	}
} )();
