import { useEffect } from '@wordpress/element';
import { withState } from '@wordpress/compose';
import { Waypoint } from 'react-waypoint';

function CountUpAnimation( { targetNumber, className, setState, count, shouldCount } ) {
	const animationDuration = 2000;
	const frameDuration = 1000 / 60;
	const totalFrames = Math.round( animationDuration / frameDuration );
	const easeOutQuad = t => t * ( 2 - t );

	useEffect( () => {
		let frame = 0;

		const counter = setInterval( () => {
			frame++;

			const progress = easeOutQuad( frame / totalFrames );
			setState( { count: targetNumber * progress } );

			if ( frame === totalFrames ) {
				clearInterval( counter );
			}
		}, frameDuration );
	}, [ shouldCount ] );

	return (
		<Waypoint
			onEnter={ () => {
				setState( { shouldCount: true } );
			} }
		>
			<span
				className={ `${className}__number` }
			>
				{ Math.round( count ) }
			</span>
		</Waypoint>
	);
};

export default withState( {
	count: 0,
	shouldCount: false
} )( CountUpAnimation );
