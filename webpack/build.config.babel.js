import { name, version, description, homepage } from "../package.json";
import { BannerPlugin, DefinePlugin } from "webpack";
import TerserJSPlugin from "terser-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import nib from "nib";

export default {
	entry: {
		front: "./src/index-front.ts",
		editor: "./src/index-editor.ts"
	},
	output: {
		path: __dirname + "/../build",
		filename: `${name}-[name].js`
	},
	resolve: {
		alias: {
			Components: __dirname + "/../src/Components",
			utils: __dirname + "/../src/utils",
			init: __dirname + "/../src/init"
		}
	},
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
		"@wordpress/i18n": "wp.i18n"
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				resolve: {
					extensions: [".tsx", ".ts", ".js", ".jsx"]
				}
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
							import: ["~nib/index.styl"]
						}
					}
				]
			}
		]
	},
	plugins: [
		new DefinePlugin({
			l: (...args) => console.log(...args)
		}),
		new MiniCssExtractPlugin({
			filename: `${name}-[name].css`
		}),
		new BannerPlugin({
			banner: [
				`/*! ${description} | ${version} | ${homepage} */`,
				"/*! copy-text-to-clipboard | https://github.com/sindresorhus/copy-text-to-clipboard | Sindre Sorhus | MIT License */",
				"/*! Prism | https://github.com/PrismJS/prism/ | Lea Verou | MIT License */"
			].join(""),
			raw: true,
			include: new RegExp(/.*?\.js/)
		}),
		new BannerPlugin({
			banner: `${description} | ${version} | ${homepage}`,
			include: new RegExp(/.*?\.css/)
		})
	],
	optimization: {
		minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]
	}
};
