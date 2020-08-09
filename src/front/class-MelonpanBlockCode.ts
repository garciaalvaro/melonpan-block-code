import copy from "copy-text-to-clipboard";
import Prism from "prismjs";
import { decodeEntities } from "@wordpress/html-entities";
import { __ } from "@wordpress/i18n";
import { doAction } from "@wordpress/hooks";

import { getLangDependencies } from "@/utils/tools/getLangDependencies";

export class MelonpanBlockCode {
	code: HTMLElement | null = null;
	button: HTMLElement | null = null;
	container: HTMLElement | null = null;
	content = "";

	constructor(node: HTMLElement) {
		this.button = node.querySelector("button");
		this.code = node.querySelector("code");
		this.container = node;

		if (this.code) {
			this.content = this.code.innerHTML;
		}
	}

	init = (): void => {
		this.setClick();
		this.setSyntax();
	};

	setClick = (): void => {
		if (!this.button || !this.code) return;

		this.button.addEventListener("click", () => {
			if (!this.button) return;
			if (this.button.classList.contains("mbcode-just-copied")) return;

			copy(decodeEntities(this.content));

			const button_html = this.button.innerHTML;

			this.button.classList.add("mbcode-just-copied");
			this.button.innerHTML = `<span>${__("Copied")}</span>`;

			setTimeout(() => {
				if (!this.button) {
					return;
				}

				this.button.innerHTML = button_html;
				this.button.classList.remove("mbcode-just-copied");
			}, 2000);
		});
	};

	setSyntax = (): void => {
		if (
			!this.container ||
			!this.container.dataset.language ||
			!this.code ||
			!this.code.textContent
		) {
			return;
		}

		const language = this.container.dataset.language as Language;
		const { textContent } = this.code;

		const dependencies = getLangDependencies(language);

		[...dependencies, language].forEach(lang =>
			doAction(`mbcode.addPrismLanguage.${lang}`)
		);

		const highlighted_content = Prism.highlight(
			textContent,
			Prism.languages[language],
			language
		);

		this.code.innerHTML = highlighted_content;
	};
}
