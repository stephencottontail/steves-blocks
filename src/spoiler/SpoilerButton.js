export default function SpoilerButton( { stem } ) {
	return (
		<button
			className={ `${stem}__toggle` }
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
