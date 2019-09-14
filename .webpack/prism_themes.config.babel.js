const { name, version, description, homepage } = require("../package.json");
const webpack = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BannerPlugin = webpack.BannerPlugin;
const nib = require("nib");

module.exports = [
	{
		entry: "./src/index-prism_themes.styl",
		output: {
			path: __dirname + "/../build",
			filename: "_temp.js"
		},
		module: {
			rules: [
				{
					test: /\.(css|styl)$/,
					use: [
						{
							loader: "file-loader",
							options: {
								name: `${name}-[name].css`,
								outputPath: "prism_themes"
							}
						},
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
		optimization: {
			minimizer: [
				new OptimizeCSSAssetsPlugin({
					cssProcessorPluginOptions: {
						preset: ["default", { discardComments: false }]
					}
				})
			]
		}
	},
	{
		entry: "./src/index-prism_themes.ts",
		output: {
			path: __dirname + "/../build",
			filename: "_temp.js"
		},
		module: {
			rules: [
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
			new MiniCssExtractPlugin({
				filename: `${name}-prism_themes.css`
			}),
			new BannerPlugin({
				banner: `${description} | ${version} | ${homepage}`,
				include: new RegExp(/.*?\.css/)
			})
		],
		optimization: {
			minimizer: [
				new OptimizeCSSAssetsPlugin({
					cssProcessorPluginOptions: {
						preset: ["default", { discardComments: false }]
					}
				})
			]
		}
	}
];
