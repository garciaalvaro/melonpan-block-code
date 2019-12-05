import { name, version, description, homepage } from "../package.json";
import { BannerPlugin } from "webpack";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import nib from "nib";
import path from "path";

export default [
	{
		entry: path.join(__dirname, "../src/index-prism_themes.ts"),
		output: {
			path: path.join(__dirname, "../build"),
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
		entry: path.join(__dirname, "../src/index-prism_themes.ts"),
		output: {
			path: path.join(__dirname, "../build"),
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
