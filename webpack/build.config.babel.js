import { name, version, description, homepage } from "../package.json";
import { BannerPlugin, DefinePlugin } from "webpack";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import nib from "nib";
import path from "path";

const SRC_DIR = path.join(__dirname, "../src");
const BUILD_DIR = path.join(__dirname, "../build");

export default {
	entry: {
		fromt: SRC_DIR + "/index-fromt.ts",
		editor: SRC_DIR + "/index-editor.ts",
	},

	output: {
		path: BUILD_DIR,
		filename: `${name}-[name].js`,
	},

	resolve: {
		alias: {
			Components: SRC_DIR + "/Components",
			utils: SRC_DIR + "/utils",
			init: SRC_DIR + "/init",
		},
	},

	// The following global variables are loaded by Gutenberg
	externals: {
		lodash: "lodash",
		react: "React",
		"react-dom": "ReactDOM",
		"@wordpress/block-editor": "wp.blockEditor",
		"@wordpress/blocks": "wp.blocks",
		"@wordpress/components": "wp.components",
		"@wordpress/data": "wp.data",
		"@wordpress/dom-ready": "wp.domReady",
		"@wordpress/element": "wp.element",
		"@wordpress/hooks": "wp.hooks",
		"@wordpress/html-entities": "wp.htmlEntities",
		"@wordpress/i18n": "wp.i18n",
	},

	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: "babel-loader",
				resolve: {
					extensions: [".tsx", ".ts", ".js", ".jsx"],
				},
			},

			{
				test: /\.(css|styl)$/,
				use: [
					MiniCssExtractPlugin.loader,

					"css-loader",

					{
						loader: "stylus-loader",
						options: {
							use: [nib()],
							import: ["~nib/index.styl"],
						},
					},
				],
			},
		],
	},

	plugins: [
		new DefinePlugin({
			// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
			l: (...args) => console.log(...args),
		}),

		new MiniCssExtractPlugin({
			filename: `${name}-[name].css`,
		}),

		new BannerPlugin({
			banner: [
				`/*! ${description} | ${version} | ${homepage} */`,
				"/*! copy-text-to-clipboard | https://github.com/sindresorhus/copy-text-to-clipboard | Sindre Sorhus | MIT License */",
				"/*! Prism | https://github.com/PrismJS/prism/ | Lea Verou | MIT License */",
			].join(""),
			raw: true,
			include: new RegExp(/.*?\.js/),
		}),

		new BannerPlugin({
			banner: `${description} | ${version} | ${homepage}`,
			include: new RegExp(/.*?\.css/),
		}),
	],

	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
	},
};
