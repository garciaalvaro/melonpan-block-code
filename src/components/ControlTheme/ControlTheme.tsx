import React, { FunctionComponent } from "react";
import ReactSelect from "react-select";
import { __ } from "@wordpress/i18n";
import { BaseControl } from "@wordpress/components";
import { useState } from "@wordpress/element";

import { plugin_prefix, themes } from "@/utils/data";

export const ControlTheme: FunctionComponent<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { theme } = attributes;

	const [selected, setSelected] = useState(
		themes.find(({ value }) => value === theme)
	);

	return (
		<div className="mbcode-control-container">
			<BaseControl
				id="mbcode-control-theme"
				label={__("Color theme")}
				help={__("Choose a theme for the syntax highlight.")}
				className="mbcode-control"
			>
				<ReactSelect
					className="mbcode-control-react_select"
					classNamePrefix={plugin_prefix}
					value={selected}
					onChange={selected => {
						if (!selected) {
							return;
						}

						selected = selected as ThemeOption;

						setAttributes({ theme: selected.value });
						setSelected(selected);
					}}
					options={themes}
					placeholder={__("Select a theme")}
				/>
			</BaseControl>
		</div>
	);
};
