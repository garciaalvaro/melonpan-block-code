import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { BaseControl, ButtonGroup } from "@wordpress/components";

import { Button } from "@/utils/components/Button";

const buttons: { value: Attributes["view"]; label: string }[] = [
	{ value: "editor", label: __("Editor") },
	{ value: "previewer", label: __("Previewer") },
];

export const ControlView: FunctionComponent<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { view } = attributes;

	return (
		<div className="mbcode-control-container">
			<BaseControl
				id="mbcode-control-view"
				className="mbcode-control"
				label={__("View")}
				help={__(
					"To edit the code activate Editor view. To preview the result activate Previewer view."
				)}
			>
				<ButtonGroup className="mbcode-control-button_group">
					{buttons.map(({ value, label }) => (
						<Button
							key={value}
							className={[
								"mbcode-button",
								view === value ? "mbcode-is_active" : null,
							]}
							onClick={() => setAttributes({ view: value })}
						>
							{label}
						</Button>
					))}
				</ButtonGroup>
			</BaseControl>
		</div>
	);
};
