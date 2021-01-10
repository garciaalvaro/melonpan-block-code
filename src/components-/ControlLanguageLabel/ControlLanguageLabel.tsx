import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import {
	BaseControl,
	ToggleControl,
	TextControl,
	RadioControl,
} from "@wordpress/components";

import { languages } from "@/utils/data";
import { className } from "@/utils/tools";

export const ControlLanguageLabel: FunctionComponent<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { label_enabled, label, label_type, language } = attributes;

	const onChangeLabelEnabled = (label_enabled: Attributes["label_enabled"]) =>
		setAttributes({
			label_enabled,
		});

	const onChangeLabelType = (label_type: Attributes["label_type"]) => {
		setAttributes({ label_type });

		if (label_type === "language") {
			const language_obj = languages.find(
				({ value }) => value === language
			);

			if (language_obj) {
				setAttributes({ label: language_obj.label });
			}
		}
	};

	return (
		<div className="mbcode-control-container">
			<BaseControl
				id="mbcode-control-label_enabled"
				className="mbcode-control"
				label={__("Label")}
			>
				<ToggleControl
					className="mbcode-control-toggle"
					label={label_enabled ? __("Active") : __("Not active")}
					checked={label_enabled}
					help={__(
						"If this option is selected the block will display a label (by default the code language) on its top left corner."
					)}
					onChange={onChangeLabelEnabled}
				/>
			</BaseControl>

			<RadioControl
				label={__("Label type")}
				className={className([
					"mbcode-control",
					"mbcode-control-radio",
					`mbcode-${label_enabled ? "" : "no-"}is_active`,
				])}
				selected={label_type}
				onChange={onChangeLabelType}
				options={[
					{
						value: "language",
						label: __("Current code language"),
					},
					{
						value: "custom",
						label: __("Custom text"),
					},
				]}
			/>

			<TextControl
				className={className([
					"mbcode-control",
					"mbcode-control-text",
					`mbcode-${
						label_enabled && label_type === "custom" ? "" : "no-"
					}is_active`,
				])}
				value={label}
				onChange={label => setAttributes({ label })}
			/>
		</div>
	);
};
