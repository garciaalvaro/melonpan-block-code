<?php

namespace MELONPANBLOCKCODE;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Utility that returns the full script name given a Prism language name.
 *
 * @since 1.0.0
 */
function generateLangDepName( $languages ) {

	$deps = array();

	foreach ( $languages as $language ) {
		$deps[] = PLUGIN_NAME . '-prism_language-' . $language;
	}

	return $deps;
};
