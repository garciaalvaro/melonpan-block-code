interface Attributes {
	language?: Language;
	theme: Theme;
	scheme: "light" | "dark";
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
	omit_button_type_button_prop?: boolean;
}

interface EditProps {
	className: string;
	attributes: Attributes;
	setAttributes: (attributes: Partial<Attributes>) => void;
}

type Scheme = "light" | "dark";

// CSS modules
declare module "*.styl";
