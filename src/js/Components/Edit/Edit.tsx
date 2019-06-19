import { themes } from "utils/data/themes";
import { getLangDependencies } from "utils/tools/getLangDependencies";
import { Sidebar } from "./Sidebar";
import { Toolbar } from "./Toolbar";
import { Container } from "Components/Block/Container";
import { Content } from "Components/Block/Content";
import Prism from "prismjs";

const { __ } = wp.i18n;
const { PlainText } = wp.blockEditor;
const { useEffect, useState } = wp.element;

export const Edit: React.ComponentType<BlockPropsEdit> = props => {
	const { setAttributes, attributes } = props;
	const { content, view, language, theme } = attributes;
	const [highlighted_content, setHighlightedContent] = useState("");

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
		<Container {...props}>
			<Sidebar {...props} />
			<Toolbar {...props} />
			{view === "previewer" ? (
				<Content {...props} highlighted_content={highlighted_content} />
			) : (
				<PlainText
					value={content}
					onChange={(content: string) => setAttributes({ content })}
					placeholder={__(".example { color: red; }")}
					aria-label={__("Code")}
				/>
			)}
		</Container>
	);
};
