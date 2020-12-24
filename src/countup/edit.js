import { PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import CountUpAnimation from './CountUpAnimation';

export default function Edit( { attributes, setAttributes, className } ) {
	const { beforeText, targetNumber, afterText } = attributes;

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
			<div
				className={ className }
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
				<CountUpAnimation
					targetNumber={ targetNumber || 100 }
					className={ className }
				/>
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
		</>
	);
}
