import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";
import {
	BaseControl,
	ToggleControl,
	TextControl,
	RadioControl
} from "@wordpress/components";

import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";
import { languages } from "utils/data";

export const ControlLanguageLabel: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { label_enabled, label, label_type, language } = attributes;
	const onChangeLabelEnabled = useCallback(
		(label_enabled: Attributes["label_enabled"]) =>
			setAttributes({
				label_enabled
			}),
		[]
	);
	const onChangeLabelType = useCallback((label_type: string) => {
		setAttributes({ label_type });

		if (label_type === "language") {
			const language_obj = languages.find(({ value }) => value === language);

			if (language_obj) {
				setAttributes({ label: language_obj.label });
			}
		}
	}, []);

	return (
		<Div className="control-container">
			<BaseControl
				id={addPrefix("control-label_enabled")}
				className={addPrefix("control")}
				label={__("Label")}
			>
				<ToggleControl
					className={addPrefix("control-toggle")}
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
				className={addPrefix([
					"control",
					"control-radio",
					label_enabled ? "is_active" : "no-is_active"
				])}
				selected={label_type}
				onChange={onChangeLabelType}
				options={[
					{
						value: "language",
						label: __("Current code language")
					},
					{
						value: "custom",
						label: __("Custom text")
					}
				]}
			/>
			<TextControl
				className={addPrefix([
					"control",
					"control-text",
					label_enabled && label_type === "custom"
						? "is_active"
						: "no-is_active"
				])}
				value={label}
				onChange={label => setAttributes({ label })}
			/>
		</Div>
	);
};
