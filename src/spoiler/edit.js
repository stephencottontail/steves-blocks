import { withState } from '@wordpress/compose';
import { InnerBlocks } from '@wordpress/block-editor';
import SpoilerButton from './SpoilerButton';

// `scbcPlaceholderImage` comes from PHP
const TEMPLATE = [ [ 'core/columns', {}, [
	[ 'core/paragraph', { content: 'You can hide anything with this block...' } ],
	[ 'core/image', { url: scbcPlaceholderImage, caption: 'Like this picture of a tree.' } ]
] ] ];

function Spoiler( { isRevealed, setState, className } ) {
	return (
		<div
			className={ `${className}` }
		>
			<SpoilerButton
				stem={ className }
				onClick={ () => {
					setState( ( state ) => (
						{ isRevealed: ! state.isRevealed }
					) )
				} }
				isRevealed={ isRevealed }
			/>
			<div
				className={ `${className}__wrapper` }
				aria-live='polite'
				aria-hidden={ isRevealed ? false : true }
			>
				<InnerBlocks
					allowedBlocks={ true }
					template={ TEMPLATE }
				/>
			</div>
		</div>
	);
}

export default withState( {
	isRevealed: true
} )( Spoiler );
