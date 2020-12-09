<?php
	/**
	 * Plugin Name: Steve's Blocks
	 * Plugin URL: https://github.com/stephencottontail/steves-blocks.git
	 * Description: I made some blocks
	 * Author: Stephen Dickinson <stephencottontail@me.com>
	 * Version: 1.0.0
	 * License: GPLv2
	 */

	add_action( 'init', function() {
		$blocks = scandir( plugin_dir_path( __FILE__ ) . '/src' );

		foreach( $blocks as $block ) {
			if ( '.' == $block || '..' == $block ) {
				continue;
			}

			if ( file_exists( plugin_dir_path( __FILE__ ) . "/dist/$block.asset.php" ) ) {
				$assets = require( plugin_dir_path( __FILE__ ) . "/dist/$block.asset.php" );
			}

			if ( file_exists( plugin_dir_path( __FILE__ ) . "/src/$block.js" ) ) {
				wp_register_script( "scbc-$block-editor-script", plugins_url( "dist/$block.js", __FILE__ ), $assets['dependencies'], $assets['version'], true );
				wp_register_style( "scbc-$block-editor-style", plugins_url( "dist/$block.editor.css", __FILE__ ) );
				wp_register_style( "scbc-$block-style", plugins_url( "dist/$block.css", __FILE__ ) );

				register_block_type( "scbc/$block", array(
					'editor_script' => "scbc-$block-editor-script",
					'editor_style'  => "scbc-$block-editor-style",
					'style'         => "scbc-$block-style"
				) );
			}
		}
	} );

	add_filter( 'block_categories', function( $categories, $post ) {
		return array_merge( $categories, array(
			array(
				'title' => 'Steve\'s Blocks',
				'slug'  => 'scbc'
			)
		) );
	}, 10, 2 );
