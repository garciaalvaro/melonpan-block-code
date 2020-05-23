import { name, version, description, homepage } from "../package.json";
import { BannerPlugin } from "webpack";
import TerserJSPlugin from "terser-webpack-plugin";
import path from "path";

const SRC_DIR = path.join(__dirname, "../src");
const BUILD_DIR = path.join(__dirname, "../build");

export default [
	{
		entry: SRC_DIR + "/index-prism_languages.ts",

		output: {
			path: BUILD_DIR,
			filename: `${name}-prism_languages.js`,
		},

		module: {
			rules: [
				{
					test: /\.js$/,
					use: [
						{
							loader: "string-replace-loader",
							options: {
								search: /^([\S\s]*?\.languages)(\.|\[['"])([\w-]+)((['"]\])?\s?=[\S\s]+)/
									.source,
								replace: [
									`wp.hooks.addAction( "mbcode.addPrismLanguage.$3", "addPrismLanguage", function() {`,
									`\nif ( window.Prism && window.Prism.languages && window.Prism.languages["$3"] ) { return; }`,
									`\n$1$2$3$4`,
									`\n});\n`,
								].join(""),
								flags: "g",
							},
						},
					],
					include: path.join(
						__dirname,
						"../node_modules/prismjs/components"
					),
				},
			],
		},

		optimization: {
			minimizer: [new TerserJSPlugin({})],
		},

		plugins: [
			new BannerPlugin({
				banner: [
					`/*! ${description} | ${version} | ${homepage} */`,
					"/*! Prism | https://github.com/PrismJS/prism/ | Lea Verou | MIT License */",
				].join(""),
				raw: true,
				include: new RegExp(/.*?\.js/),
			}),
		],
	},

	{
		entry: SRC_DIR + "/index-prism_languages.ts",

		output: {
			path: BUILD_DIR,
			filename: "_temp.js",
		},

		module: {
			rules: [
				{
					test: /\.js$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: `${name}-[name].js`,
								outputPath: "prism_languages",
							},
						},
						{
							loader: "string-replace-loader",
							options: {
								search: /^([\S\s]*?\.languages)(\.|\[['"])([\w-]+)((['"]\])?\s?=[\S\s]+)/
									.source,
								replace: [
									// BannerPlugin does not add the banner when using file-loader ouputPath.
									`/*! ${description} | ${version} | ${homepage} */`,
									` /*! Prism | https://github.com/PrismJS/prism/ | Lea Verou | MIT License */`,
									`\nwp.hooks.addAction( "mbcode.addPrismLanguage.$3", "addPrismLanguage", function() {`,
									`\nif ( window.Prism && window.Prism.languages && window.Prism.languages["$3"] ) { return; }`,
									`\n$1$2$3$4`,
									`\n});\n`,
								].join(""),
								flags: "g",
							},
						},
					],
					include: path.join(
						__dirname,
						"../node_modules/prismjs/components"
					),
				},
			],
		},

		optimization: {
			minimizer: [new TerserJSPlugin({})],
		},
	},
];
