import apiFetch from '@wordpress/api-fetch';
import { TextControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';

export default function Edit( { className } ) {
	const [themesLoaded, setThemesLoaded] = useState( false );
	const [selectedTheme, setSelectedTheme] = useState( false );
	const [isSuggestionsVisible, setIsSuggestionsVisible] = useState( false );

	const ThemeSuggestion = function() {
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
				url: addQueryArgs( 'http://api.wordpress.org/themes/info/1.1/', {
					'action': 'query_themes',
					'request[search]': 'food'
				} )
			} )
				.then( res => res.json() )
				.then( data => {
					console.log( typeof data.themes[0].slug );
					console.log( data.themes[0].slug );
					setThemesLoaded( { themesLoaded: true } );
					setSelectedTheme( { selectedTheme: data.themes[0].slug } )
				} );
		}, [themesLoaded] );
		
		return (
			<div
				style={ { position: 'relative' } }
			>
				<TextControl
					label='Theme Slug'
					type='text'
					value={ themesLoaded && selectedTheme }
					placeholder=''
					onChange={ ( value ) => {
						console.log( value );
						setIsSuggestionsVisible( { isSuggestionsVisible: true } );
					} }
				/>
				{ isSuggestionsVisible && (
					<div
						style={ { position: 'absolute',
								  top: '0',
								  left: '0' } }
					>
						<button style={ { display: 'block' } }>Foo</button>
						<button style={ { display: 'block' } }>Foo</button>
						<button style={ { display: 'block' } }>Foo</button>
					</div>
				) }
			</div>
		);		
	}


	return (
		<div
			className={ className }
		>
			<ThemeSuggestion />
			{ themesLoaded ? <p>Yes</p> : <p>No</p> }
			<p>Here's some text.</p>
		</div>
	);
}
