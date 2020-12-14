export default function SpoilerButton( { stem, isRevealed = false, onClick, ...rest } ) {
	return (
		<button
			className={ `${stem}__toggle ${ isRevealed ? 'is-revealed' : '' }` }
			onClick={ onClick }
			{ ...rest }
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
