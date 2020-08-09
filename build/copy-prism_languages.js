const path = require("path");
const { renameSync, readdir } = require("fs");
const replace = require("replace-in-file");
const copyfiles = require("copyfiles");

const { name } = require("../package.json");
const languages = require("./prism-languages-list");

const languages_files = languages.map(
	language => `node_modules/prismjs/components/prism-${language}.min.js`
);

const addHook = files => {
	replace({
		files,

		from: /^([\S\s]*?\.languages)(\.|\[['"])([\w-]+)((['"]\])?\s?=[\S\s]+)/g,

		to: [
			`window.wp.hooks.addAction( "mbcode.addPrismLanguage.$3", "addPrismLanguage", function() {`,
			`\nif ( window.Prism && window.Prism.languages && window.Prism.languages["$3"] ) { return; }`,
			`\n$1$2$3$4`,
			`\n});\n`,
		].join(""),
	});
};

const renameFiles = files => {
	const files_new = [];

	files.forEach(file_name => {
		const language = file_name.replace(/^prism-(.+)\.min.js$/, "$1");

		const file_new = path.resolve(
			__dirname,
			"../dist/prism_languages",
			`${name}-prism_language-${language}.js`
		);

		files_new.push(file_new);

		renameSync(
			path.resolve(__dirname, "../dist/prism_languages", file_name),
			file_new
		);
	});

	addHook(files_new);
};

copyfiles([...languages_files, "dist/prism_languages"], { up: true }, () => {
	readdir(
		path.resolve(__dirname, "../dist/prism_languages"),
		(error, files) => renameFiles(files)
	);
});
