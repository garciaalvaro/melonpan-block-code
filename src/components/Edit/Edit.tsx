import React, { FunctionComponent } from "react";
import Prism from "prismjs";
import { __ } from "@wordpress/i18n";
import { PlainText } from "@wordpress/block-editor";
import { useEffect, useState, Fragment } from "@wordpress/element";
import { doAction } from "@wordpress/hooks";

import "./Edit.styl";
import { themes } from "@/utils/data";
import { getLangDependencies } from "@/utils/tools";
import { Sidebar } from "../Sidebar";
import { Toolbar } from "../Toolbar/Toolbar";
import { BlockContainer } from "../BlockContainer";
import { BlockContent } from "../BlockContent";

export const Edit: FunctionComponent<EditProps> = props => {
	const { setAttributes, attributes } = props;
	const { content, view, language, theme } = attributes;
	const [highlighted_content, setHighlightedContent] = useState("");

	// When the theme changes we update the scheme
	useEffect(() => {
		const theme_selected = themes.find(({ value }) => value === theme);

		setAttributes({ scheme: theme_selected?.scheme });
	}, [theme]);

	// When the language or view change, load Prism language
	useEffect(() => {
		if (!language || view === "editor") return;

		const dependencies = getLangDependencies(language);

		[...dependencies, language].forEach(lang =>
			doAction(`mbcode.addPrismLanguage.${lang}`)
		);

		setHighlightedContent(
			Prism.highlight(content, Prism.languages[language], language)
		);
	}, [language, view]);

	return (
		<Fragment>
			<Sidebar {...props} />

			<Toolbar {...props} />

			<BlockContainer {...props}>
				{view === "previewer" && (
					<BlockContent
						{...props}
						highlighted_content={highlighted_content}
					/>
				)}

				{view === "editor" && (
					<PlainText
						value={content}
						onChange={content => setAttributes({ content })}
						placeholder={__(".example { color: red; }")}
						aria-label={__("Code")}
					/>
				)}
			</BlockContainer>
		</Fragment>
	);
};
