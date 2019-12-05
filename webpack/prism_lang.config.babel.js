import { name, version, description, homepage } from "../package.json";
import { BannerPlugin } from "webpack";
import TerserJSPlugin from "terser-webpack-plugin";
import path from "path";

export default [
	{
		entry: "./src/index-prism_languages.ts",
		output: {
			path: __dirname + "/../build",
			filename: `${name}-prism_languages.js`
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
									`\n});\n`
								].join(""),
								flags: "g"
							}
						}
					],
					include: path.join(__dirname, "../node_modules/prismjs/components")
				}
			]
		},
		optimization: {
			minimizer: [new TerserJSPlugin({})]
		},
		plugins: [
			new BannerPlugin({
				banner: [
					`/*! ${description} | ${version} | ${homepage} */`,
					"/*! Prism | https://github.com/PrismJS/prism/ | Lea Verou | MIT License */"
				].join(""),
				raw: true,
				include: new RegExp(/.*?\.js/)
			})
		]
	},
	{
		entry: "./src/index-prism_languages.ts",
		output: {
			path: __dirname + "/../build",
			filename: "_temp.js"
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
								outputPath: "prism_languages"
							}
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
									`\n});\n`
								].join(""),
								flags: "g"
							}
						}
					],
					include: path.join(__dirname, "../node_modules/prismjs/components")
				}
			]
		},
		optimization: {
			minimizer: [new TerserJSPlugin({})]
		}
	}
];
