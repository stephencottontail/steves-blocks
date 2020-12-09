import { registerBlockType } from '@wordpress/blocks';
import edit from './spoiler/edit.js';
import save from './spoiler/save.js';

registerBlockType( 'scbc/spoiler', {
	title: 'Spoiler Block',
	description: 'Hide the contents of the block with an overlay',
	category: 'scbc',
	icon: 'hidden',
	edit,
	save
} );
