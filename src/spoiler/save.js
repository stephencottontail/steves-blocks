import { InnerBlocks } from '@wordpress/block-editor';
import SpoilerButton from './SpoilerButton';

export default function Save() {
	const className = 'wp-block-scbc-spoiler';
	
	return (
		<div>
			<SpoilerButton
				stem={ className }
			/>
			<div
				className={ `${className}__wrapper` }
				aria-live='polite'
				aria-hidden={ false }
				hidden={ false }
			>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
