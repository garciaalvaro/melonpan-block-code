import React from "react";
import { Save } from "@/components/Save";

type Deprecated = {
	save: (props: SaveProps) => JSX.Element;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	attributes: Record<keyof Attributes, any>;
};

export const deprecated: Deprecated[] = [
	{
		save: (props: SaveProps): JSX.Element => (
			<Save {...props} omit_button_type_button_prop={true} />
		),

		// eslint-disable-next-line @typescript-eslint/no-explicit-any
		attributes: {
			language: {
				type: "string",
			},
			theme: {
				type: "string",
				default: "tomorrow_night",
			},
			scheme: {
				type: "string",
				default: "dark",
			},
			view: {
				type: "string",
				default: "editor",
			},
			copy_button_enabled: {
				type: "boolean",
				default: false,
			},
			label_enabled: {
				type: "boolean",
				default: false,
			},
			content: {
				type: "string",
				source: "text",
				selector: "code",
				default: "",
			},
			label: {
				type: "string",
				source: "text",
				selector: "pre + div",
				default: "",
			},
			label_type: {
				type: "string",
				default: "language",
			},
			padding_tb: {
				type: "number",
				default: 40,
			},
			padding_lr: {
				type: "number",
				default: 30,
			},
			border_radius: {
				type: "number",
				default: 0,
			},
			border_width: {
				type: "number",
				default: 0,
			},
		},
	},
];
