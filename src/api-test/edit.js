import { useRef, useState } from '@wordpress/element';
import ThemeSuggestion from './theme-suggestion';

export default function Edit( { className } ) {
	const [ query, setQuery ] = useState( '' );
	const [ themesLoaded, setThemesLoaded ] = useState( false );
	const [ selectedTheme, setSelectedTheme ] = useState( false );
	const [ isSuggestionsVisible, setIsSuggestionsVisible ] = useState( false );
	const textRef = useRef( null );

	return (
		<div
			className={ className }
		>
			<ThemeSuggestion
				value={ query }
				onChange={ setQuery }
				onClick={ setSelectedTheme }
				ref={ textRef }
			/>
			{ themesLoaded ? <p>Yes</p> : <p>No</p> }
			{ query && <p>{ query.toString() }</p> }
		</div>
	);
}
