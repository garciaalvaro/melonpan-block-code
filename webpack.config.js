const { name, description, version, homepage } = require("./package.json");
const { BannerPlugin } = require("webpack");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const nib = require("nib");
const path = require("path");
const { readdirSync } = require("fs");

const prism_themes = readdirSync("./src/prism_themes").reduce(
	(acc, theme) => ({
		...acc,
		[`prism_themes/${name}-prism_theme-${theme.replace(
			".styl",
			""
		)}`]: path.resolve(__dirname, "src/prism_themes", theme),
	}),
	{}
);

module.exports = (env, { mode }) => {
	const is_production = mode === "production";

	const config = {
		watch: !is_production,

		entry: {
			[`${name}-front`]: path.resolve(__dirname, "src/entry-front.ts"),

			[`${name}-editor`]: path.resolve(__dirname, "src/entry-editor.ts"),

			[`${name}-prism_themes`]: path.resolve(
				__dirname,
				"src/entry-prism_themes.ts"
			),

			[`${name}-prism_languages`]: path.resolve(
				__dirname,
				"src/entry-prism_languages.ts"
			),

			...prism_themes,
		},

		output: {
			path: path.resolve(__dirname, "dist"),
			filename: "[name].js",
		},

		resolve: {
			alias: {
				"@": path.resolve(__dirname, "src"),
			},
		},

		externals: {
			lodash: "lodash",
			react: "React",
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

		module: { rules: [] },

		plugins: [],
	};

	config.module.rules.push({
		test: /\.tsx?$/,
		exclude: /node_modules/,
		loader: "babel-loader",
		resolve: {
			extensions: [".ts", ".tsx", ".js", ".jsx"],
		},
	});

	config.module.rules.push({
		test: /node_modules\/prism.+\.js?$/,
		loader: path.join(__dirname, "./scripts/webpack_loader-prism_languages"),
		resourceQuery: /mbcode/,
	});

	config.module.rules.push({
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
	});

	config.plugins.push(
		new MiniCssExtractPlugin({
			filename: "[name].css",
		})
	);

	if (is_production) {
		config.plugins.push(
			new BannerPlugin({
				banner: `${description} | ${version} | ${homepage}`,
				include: new RegExp(/.*?\.css/),
			})
		);

		config.plugins.push(
			new BannerPlugin({
				banner: [
					`/*! ${description} | ${version} | ${homepage} */`,
					"/*! copy-text-to-clipboard | https://github.com/sindresorhus/copy-text-to-clipboard | Sindre Sorhus | MIT License */",
					"/*! Prism | https://github.com/PrismJS/prism/ | Lea Verou | MIT License */",
				].join(""),
				raw: true,
				include: new RegExp(/.*?\.js/),
			})
		);

		config.optimization = {
			minimize: true,
			minimizer: [
				new OptimizeCSSAssetsPlugin(),

				// As we are using a custom optimization, making use of
				// OptimizeCSSAssetsPlugin, we also need to specify TerserPlugin
				new TerserPlugin({ extractComments: false }),
			],
		};
	}

	return config;
};
