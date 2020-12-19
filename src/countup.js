import { registerBlockType } from '@wordpress/blocks';
import edit from './countup/edit.js';
import save from './countup/save.js';

registerBlockType( 'scbc/countup', {
	title: 'Count Up',
	description: 'Draw attention to a number by counting up to it',
	category: 'scbc',
	icon: 'arrow-up-alt',
	attributes: {
		beforeText: {
			type: 'string',
			default: ''
		},
		targetNumber: {
			type: 'number',
			default: ''
		},
		afterText: {
			type: 'string',
			default: ''
		}
	},
	edit,
	save
} );
