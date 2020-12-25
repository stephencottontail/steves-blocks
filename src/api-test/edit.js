import apiFetch from '@wordpress/api-fetch';
import { withState } from '@wordpress/compose';

const Container = withState( {
	themesLoaded: false
} )( function( { themesLoaded, setState } ) {
	let child;

	/**
	 * can't figure out why this doesn't work but curl'ing to the same URL does
	 */
	apiFetch( { url: 'https://api.wordpress.org/themes/info/1.1/?action=query_themes' } ).then( themes => {
		console.log( JSON.parse( themes ) );
		setState( { themesLoaded: true } );
	} );

	if ( themesLoaded ) {
		child = <p>There was stuf.</p>;
	} else {
		child = <p>Nothing</p>;
	}
	
	return (
		<div
			className={ 'container' }
		>
			{ child }
		</div>
	);
} );
	 
function Edit() {
	return (
		<Container />
	);
}

export default Edit;
