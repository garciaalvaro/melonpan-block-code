import CopyPlugin from "copy-webpack-plugin";

export default {
	entry: __dirname + "/copy.entry.js",
	output: {
		path: __dirname + "/../_release",
		filename: "_temp.js"
	},
	plugins: [
		new CopyPlugin([
			{
				from: "**/*",
				ignore: [
					".*",
					".*/**",
					"_extras/**",
					"_release/**",
					"_temp.js",
					"assets-repo/**",
					"enzyme.config.js",
					"jest*",
					"node_modules/**",
					"package.json",
					"package-lock.json",
					"pro/**",
					"README.md",
					"src/**",
					"tsconfig.json",
					"types.d.ts",
					"webpack/**"
				]
			}
		])
	]
};
