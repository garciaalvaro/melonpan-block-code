const copyfiles = require("copyfiles");

const { name } = require("../package.json");

// Copy files to the _release folder
copyfiles(
	[
		"dist/*editor*",
		"dist/*front*",
		"dist/*languages*",
		"dist/*themes.css",

		"dist/prism_languages/*",
		"dist/prism_themes/*.css",

		"inc/*",
		"README.txt",
		"LICENSE",
		`${name}.php`,

		"_release",
	],
	{},
	() => null
);
