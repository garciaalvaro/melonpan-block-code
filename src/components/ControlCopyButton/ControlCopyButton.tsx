import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { BaseControl, ToggleControl } from "@wordpress/components";

export const ControlCopyButton: FunctionComponent<EditProps> = props => {
	const { attributes, setAttributes } = props;

	const { copy_button_enabled } = attributes;

	return (
		<div className="mbcode-control-container">
			<BaseControl
				id="mbcode-control-copy_button_enabled"
				className="mbcode-control"
				label={__("Copy button")}
			>
				<ToggleControl
					className="mbcode-control-toggle"
					label={
						copy_button_enabled ? __("Active") : __("Not active")
					}
					checked={copy_button_enabled}
					help={__(
						"If this option is selected a copy button will be displayed on the top right corner of the block."
					)}
					onChange={copy_button_enabled =>
						setAttributes({ copy_button_enabled })
					}
				/>
			</BaseControl>
		</div>
	);
};
