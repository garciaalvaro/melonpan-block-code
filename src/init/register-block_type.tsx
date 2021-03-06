import React from "react";
import { registerBlockType } from "@wordpress/blocks";

import {
	block_category,
	block_title,
	block_description,
	block_name,
} from "@/utils/data";
import { Logo } from "@/components/Logo";
import { Edit } from "@/components/Edit";
import { Save } from "@/components/Save";
import { deprecated } from "./deprecated";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
registerBlockType<Record<keyof Attributes, any>>(block_name, {
	title: block_title,

	icon: () => <Logo />,

	category: block_category,

	description: block_description,

	deprecated,

	supports: {
		align: true,
	},

	edit: (props: EditProps) => <Edit {...props} />,

	save: (props: SaveProps) => <Save {...props} />,

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
});
