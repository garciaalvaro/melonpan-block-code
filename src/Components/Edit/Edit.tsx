import Prism from "prismjs";

import { themes } from "utils/data";
import { getLangDependencies } from "utils/tools";
import { Sidebar } from "./Sidebar";
import { Toolbar } from "./Toolbar";
import { BlockContainer } from "../BlockContainer/BlockContainer";
import { BlockContent } from "../BlockContent/BlockContent";

const { __ } = wp.i18n;
const { PlainText } = wp.blockEditor;
const { useEffect, useState, useCallback } = wp.element;

export const Edit: React.ComponentType<EditProps> = props => {
	const { setAttributes, attributes } = props;
	const { content, view, language, theme } = attributes;
	const [highlighted_content, setHighlightedContent] = useState("");
	const onChange = useCallback(
		(content: string) => setAttributes({ content }),
		[]
	);

	// When the theme changes we update the scheme.
	useEffect(() => {
		const theme_obj = themes.find(({ value }) => value === theme);

		if (theme_obj) {
			setAttributes({ scheme: theme_obj.scheme });
		} else {
			setAttributes({ scheme: undefined });
		}
	}, [theme]);

	// When the language or view change, load Prism language.
	useEffect(() => {
		if (!language || view === "editor") {
			return;
		}

		const dependencies = getLangDependencies(language);

		[...dependencies, language].forEach(lang =>
			wp.hooks.doAction(`mbcode.addPrismLanguage.${lang}`)
		);

		setHighlightedContent(
			Prism.highlight(content, Prism.languages[language], language)
		);
	}, [language, view]);

	return (
		<BlockContainer {...props}>
			<Sidebar {...props} />
			<Toolbar {...props} />
			{view === "previewer" ? (
				<BlockContent {...props} highlighted_content={highlighted_content} />
			) : (
				<PlainText
					value={content}
					onChange={onChange}
					placeholder={__(".example { color: red; }")}
					aria-label={__("Code")}
				/>
			)}
		</BlockContainer>
	);
};
