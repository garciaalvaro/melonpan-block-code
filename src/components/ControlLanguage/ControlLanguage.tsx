import React, { FunctionComponent } from "react";
import ReactSelect from "react-select";
import { __ } from "@wordpress/i18n";
import { BaseControl } from "@wordpress/components";
import { useState } from "@wordpress/element";

import { plugin_prefix, languages } from "@/utils/data";

const options = [
	{
		label: __("Common"),
		options: languages.filter(({ common }) => common),
	},
	{
		label: __("Others"),
		options: languages.filter(({ common }) => !common),
	},
];

export const ControlLanguage: FunctionComponent<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { language, label_type } = attributes;

	const [selected, setSelected] = useState<LanguageOption | null>(
		languages.find(({ value }) => value === language) || null
	);

	return (
		<div className="mbcode-control-container">
			<BaseControl
				id="mbcode-control-language"
				label={__("Language")}
				help={__(
					"Choose the language which the entered code belongs to."
				)}
				className="mbcode-control"
			>
				<ReactSelect
					className="mbcode-control-react_select"
					classNamePrefix={plugin_prefix}
					value={selected}
					onChange={selected => {
						if (!selected) return;

						selected = selected as LanguageOption;

						setAttributes({ language: selected.value });
						setSelected(selected);

						if (label_type === "language") {
							setAttributes({ label: selected.label });
						}
					}}
					options={options}
					placeholder={__("Select a language")}
					formatGroupLabel={data => (
						<div>
							<span>{data.label}</span>
							<span>{data.options.length}</span>
						</div>
					)}
				/>
			</BaseControl>
		</div>
	);
};
