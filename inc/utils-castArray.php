<?php

namespace MELONPANBLOCKCODE;

// Exit if accessed directly.
if (!defined("ABSPATH")) {
	exit();
}

/**
 * Utility that returns an array.
 * If the provided value is not an array the function will wrap it in one.
 *
 * @since 1.0.0
 */
function castArray($value)
{
	if (is_array($value)) {
		return $value;
	}

	if (is_string($value) || is_int($value) || is_bool($value)) {
		return [$value];
	}

	return [];
}
