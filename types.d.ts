// Console log shortcut
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const l: (log: any) => void;

// Lodash
// Gutenberg exposes a global variable with lodash
declare const lodash: typeof import("lodash");

// React
// Gutenberg exposes a global variable with React
declare const React: typeof import("react");

// Wordpress
declare const wp: {
	blockEditor: typeof import("wordpress__block-editor");
	blocks: typeof import("wordpress__blocks");
	components: typeof import("wordpress__components");
	data: typeof import("wordpress__data");
	domReady: typeof import("wordpress__dom-ready").default;
	element: typeof import("wordpress__element");
	hooks: typeof import("wordpress__hooks");
	htmlEntities: typeof import("wordpress__html-entities");
	i18n: typeof import("wordpress__i18n");
};

interface ComponentProps {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	[prop: string]: any;
	id?: string | null;
	className?: string | null | (string | null)[] | undefined;
	children?: import("react").ReactNode;
}

interface Attributes {
	language: string | undefined;
	theme: string | undefined;
	scheme: "light" | "dark" | undefined;
	view: "editor" | "previewer";
	content: string;
	copy_button_enabled: boolean;
	label_enabled: boolean;
	label_type: "custom" | "language";
	label: string;
	padding_tb: number;
	padding_lr: number;
	border_width: number;
	border_radius: number;
}

interface SaveProps {
	attributes: Attributes;
}

interface EditProps {
	className: string;
	attributes: Attributes;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	setAttributes: (attributes: Partial<Attributes>) => void;
}
