import { registerBlockType } from '@wordpress/blocks';
import edit from './api-test/edit.js';
import save from './api-test/save.js';

registerBlockType( 'scbc/api', {
	title: 'API Test',
	icon: 'editor-help',
	category: 'scbc',
	edit,
	save
} );
