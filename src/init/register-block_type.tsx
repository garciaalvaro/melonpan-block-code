import { registerBlockType } from "@wordpress/blocks";

import {
	block_category,
	block_title,
	block_description,
	block_name,
} from "utils/data";
import { Icon } from "utils/Components";
import { Edit } from "Components/Edit/Edit";
import { BlockContainer } from "Components/BlockContainer/BlockContainer";
import { BlockContent } from "Components/BlockContent/BlockContent";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AttributesDefinition = Record<keyof Attributes, any>;

registerBlockType<AttributesDefinition>(block_name, {
	title: block_title,
	icon: () => <Icon icon="logo" />,
	category: block_category,
	description: block_description,
	supports: {
		align: true,
	},
	edit: (props: EditProps) => <Edit {...props} />,
	save: (props: SaveProps) => (
		<BlockContainer {...props}>
			<BlockContent {...props} />
		</BlockContainer>
	),
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
			selector: ".mbcode-label",
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
