import { withState } from '@wordpress/compose';
import { InnerBlocks } from '@wordpress/block-editor';
import SpoilerButton from './SpoilerButton';

function Spoiler( { isRevealed, setState, className } ) {
	return (
		<div
			className={ className }
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
				aria-hidden={ false }
				hidden={ false }
			>
				<InnerBlocks
					allowedBlocks={ true }
					template={ [ [ 'core/paragraph', { placeholder: 'You can hide anything with this block.' } ] ] }
				/>
			</div>
		</div>
	);
}

export default withState( {
	isRevealed: false
} )( Spoiler );
