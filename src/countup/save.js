import { RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	const { beforeText, targetNumber, afterText } = attributes;
	const className = 'wp-block-scbc-countup';

	return (
		<div>
			<RichText.Content
				tagName='p'
				className={ `${className}__before` }
				value={ beforeText }
			/>
			<span
				className={ `${className}__number` }
			>
				{ targetNumber || '100' }
			</span>
			<RichText.Content
				tagName='p'
				className={ `${className}__after` }		
				value={ afterText }
			/>
		</div>
	);
}
