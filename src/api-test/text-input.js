import apiFetch from '@wordpress/api-fetch';
import { forwardRef, useEffect } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';

const ThemeSuggestionTextInput = ( props, ref ) => {
	const { value, onChange } = props;

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
		apiFetch.setFetchHandler( ( options ) => {
			const { url, path, data, method } = options;

			return window.fetch( url || path, {
				method,
				data
			} );
		} );
		
		apiFetch( {
			url: addQueryArgs( 'https://api.wordpress.org/themes/info/1.1/', {
				action: 'query_themes',
				'request[search]': value
			} )
		} )
			.then( ( res ) => res.json() )
			.then( ( data ) => {
				console.log( 'came from text-input', data );
			} );
	}, [ value ] );

	useEffect( () => {
		ref.current.focus();
	}, [ ref ] );

	const onInputChange = ( e ) => {
		onChange( e.target.value );
	};

	return (
		<input
			ref={ ref }
			type="text"
			value={ value }
			placeholder={ '' }
			onChange={ onInputChange }
		/>
	);
};

export default forwardRef( ThemeSuggestionTextInput );
