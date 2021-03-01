import { createContext, useContext, useState } from '@wordpress/element';

export default function Edit( { attributes, setAttributes } ) {
	let buttons = [];

	const FilterContext = createContext();

	const Title = ( props ) => {
		const { children } = props;

		return (
			<h2
				{ ...props }
			>
				{ children }
			</h2>
		);
	}

	const Grid = () => {
		const { isFiltering } = useContext( FilterContext );

		if ( isFiltering ) {
			let filtered = [];
			let display;

			filtered = buttons.filter( button => button.props['data-filter'] % 2 == 0 );

			if ( filtered?.length ) {
				display = filtered.map( ( el, index ) => (
					<div
						key={ index }
					>
						{ el.props['data-filter'].toString() }
					</div>
				) );
			}

			return display;
		}

		return null;
	}

	const Layout = ( props ) => {
		const { children } = props;
		const [ isFiltering, setFilter ] = useState( false );

		for ( let i = 0; i < 12; i++ ) {
			buttons = (
				<button
					style={ {
						flex: '1 0 calc( 100% / 4 )'
					} }
					key={ i }
					data-filter={ i }
					onClick={ () => setFilter( ! isFiltering ) }
				>
					{ i.toString() }
				</button>
			);
		}

		return (
			<FilterContext.Provider value={{ isFiltering, setFilter }}>
				{ children }
			</FilterContext.Provider>
		);
	}

	return (
		<Layout>
			<Title
				style={ {
					textAlign: 'center'
				} }
			>
				{ 'Buttons' }
			</Title>
			<div
				style={ {
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'space-between'
				} }
			>
				{ buttons }
			</div>
			<Title
				style={ {
					textAlign: 'center'
				} }
			>
				{ 'Filtered Buttons' }
			</Title>
			<Grid />
		</Layout>
	);
}
