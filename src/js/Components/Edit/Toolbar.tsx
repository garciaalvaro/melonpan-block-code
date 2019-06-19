const { __ } = wp.i18n;
const { IconButton, Toolbar: ToolbarImp } = wp.components;
const { BlockControls } = wp.blockEditor;

export const Toolbar: React.ComponentType<BlockPropsEdit> = props => {
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
