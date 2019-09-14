import { __ } from "@wordpress/i18n";
import { IconButton, Toolbar as ToolbarImp } from "@wordpress/components";
import { BlockControls } from "@wordpress/block-editor";

export const Toolbar: React.ComponentType<EditProps> = props => {
	const { setAttributes, attributes } = props;

	return (
		<BlockControls>
			<ToolbarImp>
				{attributes.view === "editor" ? (
					<IconButton
						label={__("Activate previewer view")}
						icon="visibility"
						onClick={() => setAttributes({ view: "previewer" })}
					/>
				) : (
					<IconButton
						label={__("Activate editor view")}
						icon="edit"
						onClick={() => setAttributes({ view: "editor" })}
					/>
				)}
			</ToolbarImp>
		</BlockControls>
	);
};
