import ReactSelect from "react-select";
import { ValueType } from "react-select/src/types";
import { __ } from "@wordpress/i18n";
import { BaseControl } from "@wordpress/components";
import { useState } from "@wordpress/element";

import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";
import { plugin_prefix, themes, Theme } from "utils/data";

export const ControlTheme: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { theme } = attributes;
	const [selected, setSelected] = useState(
		themes.find(({ value }) => value === theme)
	);

	return (
		<Div className="control-container">
			<BaseControl
				id={addPrefix("control-theme")}
				label={__("Color theme")}
				help={__("Choose a theme for the syntax highlight.")}
				className={addPrefix("control")}
			>
				<ReactSelect
					className={addPrefix("control-react_select")}
					classNamePrefix={plugin_prefix}
					value={selected}
					onChange={(selected: ValueType<Theme>) => {
						if (!selected) {
							return;
						}

						selected = selected as Theme;

						setAttributes({ theme: selected.value });
						setSelected(selected);
					}}
					options={themes}
					placeholder={__("Select a theme")}
				/>
			</BaseControl>
		</Div>
	);
};
