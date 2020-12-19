import { useRef } from '@wordpress/element';
import { Waypoint } from 'react-waypoint';

export default function Edit( { className } ) {
	const el = useRef();

	return (
		<Waypoint
			onEnter={ () => {
				console.log( el.current.innerHTML );
			} }
		>
			<div
				className={ className }
				ref={ el }
			>
				<p>Count Up block says hello!</p>
			</div>
		</Waypoint>
	);
}
