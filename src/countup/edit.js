import { useRef } from '@wordpress/element';
import { Panel, PanelBody, PanelRow, TextControl } from '@wordpress/components';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import { Waypoint } from 'react-waypoint';

export default function Edit( { attributes, setAttributes, className } ) {
	const { beforeText, targetNumber, afterText } = attributes;
	const el = useRef();

	return (
		<>
			<InspectorControls>
				<PanelBody
					title='Number'
					initialOpen={ true }
				>
					<TextControl
						label='Target Number'
						type='number'
						value={ targetNumber }
						placeholder='100'
						onChange={ ( value ) => {
							setAttributes( { targetNumber: value } )
						} }
					/>
				</PanelBody>
			</InspectorControls>
			<Waypoint
				onEnter={ () => {
					const number = el.current.querySelector( `.${className}__number` );

					console.log( number.innerHTML );
				} }
			>
				<div
					className={ className }
					ref={ el }
				>
					<div
						className={ `${className}__before` }
					>
						<RichText
							value={ beforeText }
							placeholder='We increased our productivity by'
							keepPlaceholderOnFocus
							multiline={ false }
							onChange={ ( value ) => {
								setAttributes( { beforeText: value } );
							} }
						/>
					</div>
					<span
						className={ `${className}__number` }
					>
						{ targetNumber || '100' }
					</span>
					<div
						className={ `${className}__after` }
					>
						<RichText
							value={ afterText }
							placeholder='percent!'
							keepPlaceholderOnFocus
							multiline={ false }
							onChange={ ( value ) => {
								setAttributes( { afterText: value } );
							} }
						/>
					</div>
				</div>
			</Waypoint>
		</>
	);
}
