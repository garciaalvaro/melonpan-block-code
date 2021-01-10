<?php

namespace MELONPANBLOCKCODE;

// Exit if accessed directly.
if (!defined("ABSPATH")) {
	exit();
}

/**
 * Utility that returns the dependencies of a given Prism language.
 *
 * @since 1.0.0
 */
function getLangDependencies($lang)
{
	$languages_dependencies = getLangDependenciesData();

	$deps = isset($languages_dependencies[$lang])
		? $languages_dependencies[$lang]
		: null;

	if (empty($deps)) {
		return [];
	}

	$deps = castArray($deps);
	$deps_array = [];

	foreach ($deps as $key => $dep) {
		$dep_deps = getLangDependencies($dep);

		$deps_array = array_merge($dep_deps, [$dep]);
	}

	return array_unique($deps_array);
}
