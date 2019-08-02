<?php
/**
 * Plugin Name: Melonpan Block - Code
 * Plugin URI: https://wordpress.org/plugins/melonpan-block-code/
 * Description: Block to display code, with highlighted syntax, which can be copied to the clipboard.
 * Author: melonpan
 * Version: 1.0.0
 * License: GPL3+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 */

namespace MELONPANBLOCKCODE;

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) { exit; }

if ( ! defined( __NAMESPACE__ . '\PLUGIN_VERSION' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_VERSION', '1.0.0' );
}
if ( ! defined( __NAMESPACE__ . '\PLUGIN_NAME' ) ) {
	define( __NAMESPACE__ . '\PLUGIN_NAME', 'melonpan-block-code' );
}
if ( ! defined( __NAMESPACE__ . '\BUILD_DIR' ) ) {
	define( __NAMESPACE__ . '\BUILD_DIR', plugins_url( 'build/', __FILE__ ) );
}
if ( ! defined( __NAMESPACE__ . '\INC_DIR' ) ) {
	define( __NAMESPACE__ . '\INC_DIR', plugin_dir_path( __FILE__ ) . 'inc/' );
}

require_once INC_DIR . 'utils-castArray.php';
require_once INC_DIR . 'utils-generateLangDepName.php';
require_once INC_DIR . 'utils-getLangDependenciesData.php';
require_once INC_DIR . 'utils-getLangDependencies.php';
require_once INC_DIR . 'enqueue.php';
require_once INC_DIR . 'block_render.php';
