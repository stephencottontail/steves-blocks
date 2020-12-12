import { Component } from '@wordpress/element';
import { InnerBlocks } from '@wordpress/block-editor';
import SpoilerButton from './SpoilerButton';

class Spoiler extends Component {
	constructor() {
		super( ...arguments );
	}

	render() {
		const { attributes, setAttributes, className } = this.props;
		
		return (
			<div
				className={ className }
			>
				<SpoilerButton
					stem={ className }
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
}

export default Spoiler;
