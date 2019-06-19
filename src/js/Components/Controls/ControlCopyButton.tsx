import { Div } from "utils/components";
import { addPrefix } from "utils/tools/addPrefix";

const { __ } = wp.i18n;
const { BaseControl, ToggleControl } = wp.components;

export const ControlCopyButton: React.ComponentType<BlockPropsEdit> = props => {
	const { attributes, setAttributes } = props;
	const { copy_button_enabled } = attributes;

	return (
		<Div classes="control-container">
			<BaseControl
				id={addPrefix("control-copy_button_enabled")}
				className={addPrefix("control")}
				label={__("Copy button")}
			>
				<ToggleControl
					className={addPrefix("control-toggle")}
					label={copy_button_enabled ? __("Active") : __("Not active")}
					checked={copy_button_enabled}
					help={__(
						"If this option is selected a copy button will be displayed on the top right corner of the block."
					)}
					onChange={(copy_button_enabled: Attributes["copy_button_enabled"]) =>
						setAttributes({
							copy_button_enabled
						})
					}
				/>
			</BaseControl>
		</Div>
	);
};
