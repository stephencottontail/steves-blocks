export default function SpoilerButton( { stem, ...rest } ) {
	const { onClick, isRevealed } = rest;

	return (
		<button
			className={ `${stem}__toggle ${ isRevealed ? 'is-revealed' : '' }` }
			onClick={ onClick }
		>
			<i
				className={ `dashicons dashicons-hidden` }
			/>
			<span
				className={ `${stem}__toggle-text` }
			>
				Spoiler
			</span>
		</button>
	);
}
