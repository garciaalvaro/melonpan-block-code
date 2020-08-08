import CopyPlugin from "copy-webpack-plugin";
import path from "path";

const ROOT_DIR = path.join(__dirname, "..");

export default {
	entry: path.join(__dirname, "copy.entry.js"),

	output: {
		path: ROOT_DIR + "/_release",
		filename: "_temp.js",
	},

	plugins: [
		new CopyPlugin({
			patterns: [
				{
					from: ROOT_DIR + "/**/*",

					globOptions: {
						ignore: [
							ROOT_DIR + "/_extras/**",
							ROOT_DIR + "/_release/**",
							ROOT_DIR + "/_temp.js",
							ROOT_DIR + "/assets-repo/**",
							ROOT_DIR + "/enzyme.config.js",
							ROOT_DIR + "/jest*",
							ROOT_DIR + "/node_modules/**",
							ROOT_DIR + "/package.json",
							ROOT_DIR + "/package-lock.json",
							ROOT_DIR + "/pro/**",
							ROOT_DIR + "/README.md",
							ROOT_DIR + "/src/**",
							ROOT_DIR + "/tsconfig.json",
							ROOT_DIR + "/types.d.ts",
							ROOT_DIR + "/webpack/**",
						],
					},
				},
			],
		}),
	],
};
