<?php

namespace MELONPANBLOCKCODE;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Enqueue the plugin styles and scripts in the front end.
 *
 * @since 1.0.0
 */
add_action( 'wp_enqueue_scripts', __NAMESPACE__ . '\enqueue_front' );
function enqueue_front() {

	wp_enqueue_style(
		PLUGIN_NAME . '-front',
		DIST_DIR . PLUGIN_NAME . '-front.css',
		array(),
		PLUGIN_VERSION
	);
}

/**
 * Enqueue the plugin styles and scripts in the editor.
 *
 * @since 1.0.0
 */
add_action( 'enqueue_block_editor_assets', __NAMESPACE__ . '\enqueue_editor' );
function enqueue_editor() {

	wp_enqueue_style(
		PLUGIN_NAME . '-editor',
		DIST_DIR . PLUGIN_NAME . '-editor.css',
		array(),
		PLUGIN_VERSION
	);

	wp_enqueue_style(
		PLUGIN_NAME . '-prism_themes',
		DIST_DIR . PLUGIN_NAME . '-prism_themes.css',
		array(),
		PLUGIN_VERSION
	);

	wp_enqueue_script(
		PLUGIN_NAME . '-prism_languages',
		DIST_DIR . PLUGIN_NAME . '-prism_languages.js',
		array(
			'wp-hooks',
		),
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);

	wp_enqueue_script(
		PLUGIN_NAME . '-editor',
		DIST_DIR . PLUGIN_NAME . '-editor.js',
		array(
			PLUGIN_NAME . '-prism_languages',
			'lodash',
			'wp-block-editor',
			'wp-blocks',
			'wp-components',
			'wp-data',
			'wp-element',
			'wp-hooks',
			'wp-i18n',
		),
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);
}
