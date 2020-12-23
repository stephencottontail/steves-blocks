import { forwardRef, useEffect, useState, useRef } from '@wordpress/element';
import { PanelBody, TextControl } from '@wordpress/components';
import { InspectorControls, RichText } from '@wordpress/block-editor';
import { Waypoint } from 'react-waypoint';

const animationDuration = 2000;
const frameDuration = 1000 / 60;
const totalFrames = Math.round( animationDuration / frameDuration );

const CountUpAnimation = forwardRef( function( props, ref ) {
	const { className, targetNumber } = props;
	const [ count, setCount ] = useState( 0 );

	useEffect( () => {
		if ( ! ref.current === true ) {
			return;
		}
	
		let frame = 0;

		const counter = setInterval( () => {
			frame++;

			const progress = frame / totalFrames;
			setCount( targetNumber * progress );

			if ( frame === totalFrames ) {
				clearInterval( counter );
			}
		}, frameDuration );
	}, [count] );

	return (
		<span
			className={ `${className}__number` }
			ref={ ref }
		>
			{ Math.round( count ) }
		</span>
	);
} );

export default function Edit( { attributes, setAttributes, className } ) {
	const { beforeText, targetNumber, afterText } = attributes;
	const el = useRef( false );

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
					el.current = true;
				} }
			>
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
						ref={ el }
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
			</Waypoint>
		</>
	);
}
