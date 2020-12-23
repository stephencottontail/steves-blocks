import { forwardRef, useCallback, useState, useEffect } from '@wordpress/element';

const animationDuration = 2000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round( animationDuration / frameDuration );

function CountUpAnimation( props, ref ) {
	const { className, targetNumber } = props;
	const [ count, setCount ] = useState( targetNumber );

	useEffect( () => {
		if ( ! ref.current ) {
			return;
		}

		console.log( 'we got here' );
		let frame = 0;

		const counter = setInterval( () => {
			frame++;

			const progress = frame / totalFrames;
			setCount( targetNumber * progress );

			if ( frame === totalFrames ) {
				clearInterval( counter );
			}
		}, frameDuration );
	}, [] );

	return (
		<span
			className={ `${className}__number` }
			ref={ el }
			onClick={ () => {
				setCount( 99 );
			} }
		>
			{ Math.round( count ) }
		</span>
	);
}

export default forwardRef( CountUpAnimation );
