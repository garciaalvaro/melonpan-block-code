module.exports = source => {
	const sourceModified = source.replace(
		/^([\S\s]*?\.languages)(\.|\[['"])([\w-]+)((['"]\])?\s?=[\S\s]+)/g,

		[
			`window.wp.hooks.addAction( "mbcode.addPrismLanguage.$3", "addPrismLanguage", function() {`,
			`if ( window.Prism && window.Prism.languages && window.Prism.languages["$3"] ) { return; }`,
			`$1$2$3$4`,
			`});`,
		].join("")
	);

	return sourceModified;
};
