import { plugin_prefix } from "utils/data/plugin";

const { compact, flow, isString } = lodash;

const resolvePrefix = (
	element: string,
	separator: string,
	prefix: string
): string => {
	if (element.startsWith("!")) {
		return element.replace("!", "");
	}

	return prefix + separator + element;
};

export const addPrefix = (
	elements: string | null | (string | null)[] | undefined,
	separator = "-",
	prefix = plugin_prefix
): string => {
	if (!elements) {
		return "";
	}

	if (isString(elements)) {
		return resolvePrefix(elements, separator, prefix);
	}

	return flow([
		compact,
		(elements: string[]): string[] =>
			elements.map(el => resolvePrefix(el, separator, prefix)),
		(elements: string[]): string => elements.join(" "),
	])(elements);
};
