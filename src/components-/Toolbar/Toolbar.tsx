import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { Icon, Button, Toolbar as WpToolbar } from "@wordpress/components";
import { BlockControls } from "@wordpress/block-editor";

export const Toolbar: FunctionComponent<EditProps> = props => {
	const { setAttributes, attributes } = props;

	return (
		<BlockControls>
			<WpToolbar>
				{attributes.view === "editor" && (
					<Button
						label={__("Activate previewer view")}
						onClick={() => setAttributes({ view: "previewer" })}
					>
						<Icon icon="visibility" />
					</Button>
				)}

				{attributes.view === "previewer" && (
					<Button
						label={__("Activate editor view")}
						onClick={() => setAttributes({ view: "editor" })}
					>
						<Icon icon="edit" />
					</Button>
				)}
			</WpToolbar>
		</BlockControls>
	);
};
