import apiFetch from '@wordpress/api-fetch';
import { useRef, forwardRef, useState, useEffect } from '@wordpress/element';
import { addQueryArgs } from '@wordpress/url';
import ThemeSuggestionTextInput from './text-input';

export default function Edit( { className } ) {
	const [query, setQuery] = useState( '' );
	const [themesLoaded, setThemesLoaded] = useState( false );
	const [selectedTheme, setSelectedTheme] = useState( false );
	const [isSuggestionsVisible, setIsSuggestionsVisible] = useState( false );
	const textRef = useRef( null );

	const ThemeSuggestion = props => {
		return (
			<div>
				<ThemeSuggestionTextInput
					value={ query }
					onChange={ setQuery }
					ref={ textRef }
				/>
			</div>
		);
	}

	return (
		<div
			className={ className }
		>
			<ThemeSuggestion />
			{ themesLoaded ? <p>Yes</p> : <p>No</p> }
			{ query && <p>{ query.toString() }</p> }
		</div>
	);
}
