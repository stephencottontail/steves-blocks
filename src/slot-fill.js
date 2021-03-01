import { registerBlockType } from '@wordpress/blocks';
import edit from './slot-fill/edit.js';
import save from './slot-fill/save.js';

registerBlockType( 'scbc/slot-fill', {
	title: 'Slot-Fill Experiment',
	description: 'How does this thing even work?',
	category: 'scbc',
	icon: 'share-alt2',
	edit,
	save
} );
