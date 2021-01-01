import apiFetch from '@wordpress/api-fetch';
import { useState, useEffect } from '@wordpress/element';

export default function Edit() {
	const [themesLoaded, setThemesLoaded] = useState( false );

	useEffect( () => {
		/**
		 * with the default options, requests to `url: api.wordpress.org` fail, but
		 * other URLs work correctly (e.g., `jsonplaceholder.typicode.com`, as
		 * you can see below). if you use plain `window.fetch` (or use `setFetchHandler`
		 * to force `apiFetch` to use plain `window.fetch` (which is the same thing
		 * really but at least you're using built-in functionality (which doesn't
		 * matter all that much))), it works correctly, so i suspect something in
		 * the default middlewares is acting up but i've looked at all the code there
		 * and nothing jumps out at me
		 */
		apiFetch( {
			url: 'https://jsonplaceholder.typicode.com/todos/1',
		} )
			.then( data => {
				console.log( 'this works with default apiFetch' );
				console.log( data );
			} );

		apiFetch.setFetchHandler( ( options ) => {
			const { url, path, data, method } = options;

			return window.fetch( url || path, {
				method,
				data
			} );
		} );

		apiFetch( {
			url: 'http://api.wordpress.org/themes/info/1.1/?action=query_themes',
		} )
			.then( res => res.json() )
			.then( data => {
				setThemesLoaded( { themesLoaded: true } );
				console.log( data );
			} );
	}, [] );

	return (
		<div
			className={ 'container' }
		>
			{ themesLoaded ? <p>Yes</p> : <p>No</p> }
		</div>
	);
}
