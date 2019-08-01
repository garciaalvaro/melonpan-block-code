import {
	block_category,
	plugin_namespace,
	plugin_title,
	plugin_description
} from "utils/data/plugin";
import { Icon } from "utils/components";
import { Edit } from "Components/Edit/Edit";
import { Container } from "Components/Block/Container";
import { Content } from "Components/Block/Content";

wp.blocks.registerBlockType<AttributesDefinition>(`${plugin_namespace}/code`, {
	title: plugin_title,
	icon: () => <Icon icon="logo" />,
	category: block_category,
	description: plugin_description,
	supports: {
		align: true
	},
	edit: (props: BlockPropsEdit) => <Edit {...props} />,
	save: (props: BlockPropsSave) => (
		<Container {...props}>
			<Content {...props} />
		</Container>
	),
	attributes: {
		language: {
			type: "string"
		},
		theme: {
			type: "string",
			default: "tomorrow_night"
		},
		scheme: {
			type: "string",
			default: "dark"
		},
		view: {
			type: "string",
			default: "editor"
		},
		copy_button_enabled: {
			type: "boolean",
			default: false
		},
		label_enabled: {
			type: "boolean",
			default: false
		},
		content: {
			type: "string",
			source: "text",
			selector: "code",
			default: ""
		},
		label: {
			type: "string",
			source: "text",
			selector: ".mbcode-label",
			default: ""
		},
		label_type: {
			type: "string",
			default: "language"
		},
		padding_tb: {
			type: "number",
			default: 40
		},
		padding_lr: {
			type: "number",
			default: 30
		},
		border_radius: {
			type: "number",
			default: 0
		},
		border_width: {
			type: "number",
			default: 0
		}
	}
});
