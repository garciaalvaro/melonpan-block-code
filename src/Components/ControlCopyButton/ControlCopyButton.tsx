import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";
import { BaseControl, ToggleControl } from "@wordpress/components";

import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";

export const ControlCopyButton: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { copy_button_enabled } = attributes;
	const onChange = useCallback(
		(copy_button_enabled: Attributes["copy_button_enabled"]) =>
			setAttributes({
				copy_button_enabled
			}),
		[]
	);

	return (
		<Div className="control-container">
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
					onChange={onChange}
				/>
			</BaseControl>
		</Div>
	);
};
