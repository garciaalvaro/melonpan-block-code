<?php

namespace MELONPANBLOCKCODE;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Block render function.
 *
 * @since 1.0.0
 */
add_action( 'init', __NAMESPACE__ . '\register_block' );
function register_block() {

    register_block_type(
		'melonpan-block/code',
		array(
			'editor_script'   => PLUGIN_NAME,
			'render_callback' => __NAMESPACE__ . '\render_callback'
		)
	);
}

/**
 * Enqueue Prism styles and scripts based on the current block
 * selected language and color theme.
 *
 * @since 1.0.0
 */
function render_callback( $attributes, $content ) {

	if ( is_admin() ) {
		return $content;
	}

	if ( ! empty( $attributes['theme'] ) ) {
		render_callback_enqueue_styles( $attributes['theme'] );
	} else {
		// The default theme value doesn't get saved.
		render_callback_enqueue_styles( 'tomorrow_night' );
	}

	if ( ! empty( $attributes['language'] ) ) {
		render_callback_enqueue_scripts( $attributes['language'] );
	}

    return $content;
}

/**
 * Enqueue Prism styles based on the current block color theme.
 *
 * @since 1.0.0
 */
function render_callback_enqueue_styles( $theme ) {

	wp_enqueue_style(
		PLUGIN_NAME . '-prism_theme-' . $theme,
		BUILD_DIR . 'prism_themes/' . PLUGIN_NAME . '-prism-' . $theme . '.css',
		array(),
		PLUGIN_VERSION
	);
}

/**
 * Enqueue Prism scripts based on the current block language.
 *
 * @since 1.0.0
 */
function render_callback_enqueue_scripts( $language ) {

	global $wp_scripts;

	$language_dependencies = getLangDependencies( $language );
	$languages_to_enqueue  = array_merge(
			$language_dependencies,
			array( $language )
		);
	$languages_to_enqueue_dep_name = generateLangDepName( $languages_to_enqueue );

	foreach ( $languages_to_enqueue as $key => $lang ) {

		$deps = array_merge(
			array_slice( $languages_to_enqueue_dep_name, 0, $key ),
			array( 'wp-hooks' )
		);

		wp_enqueue_script(
			PLUGIN_NAME . '-prism_language-' . $lang,
			BUILD_DIR . 'prism_languages/' . PLUGIN_NAME . '-prism-' . $lang . '.min.js',
			$deps,
			PLUGIN_VERSION,
			true // Enqueue in the footer.
		);
	}

	if ( isset( $wp_scripts->registered[ PLUGIN_NAME . '-front' ] ) ) {

		$deps   = $wp_scripts->registered[ PLUGIN_NAME . '-front' ]->deps;
		$deps[] = PLUGIN_NAME . '-prism_language-' . $language;

		wp_dequeue_script( PLUGIN_NAME . '-front' );

	} else {

		$deps = array(
			'wp-dom-ready',
			'wp-hooks',
			'wp-html-entities',
			'wp-i18n',
			PLUGIN_NAME . '-prism_language-' . $language,
		);
	}

	wp_enqueue_script(
		PLUGIN_NAME . '-front',
		BUILD_DIR . PLUGIN_NAME . '-front.js',
		$deps,
		PLUGIN_VERSION,
		true // Enqueue in the footer.
	);
}
