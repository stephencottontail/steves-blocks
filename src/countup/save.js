import { RichText } from '@wordpress/block-editor';

export default function Save( { attributes } ) {
	let actualNumber;
	const { beforeText, targetNumber, afterText, prefix, suffix } = attributes;
	const className = 'wp-block-scbc-countup';

	actualNumber = <span>{ targetNumber || '100' }</span>;

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
				{ prefix }{ actualNumber }{ suffix }
			</span>
			<RichText.Content
				tagName='p'
				className={ `${className}__after` }		
				value={ afterText }
			/>
		</div>
	);
}
