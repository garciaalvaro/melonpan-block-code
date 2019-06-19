import { Div, Span } from "utils/components";
import { addPrefix } from "utils/tools/addPrefix";
import { pr } from "utils/data/plugin";
import { languages, Language } from "utils/data/languages";

import ReactSelect from "react-select";
import { ValueType } from "react-select/src/types";

const { __ } = wp.i18n;
const { BaseControl } = wp.components;
const { useState } = wp.element;

const options = [
	{
		label: __("Common"),
		options: languages.filter(({ common }) => common)
	},
	{
		label: __("Others"),
		options: languages.filter(({ common }) => !common)
	}
];

const formatGroupLabel = (data: Object) => (
	<Div>
		<Span>{data.label}</Span>
		<Span>{data.options.length}</Span>
	</Div>
);

export const ControlLanguage: React.ComponentType<BlockPropsEdit> = props => {
	const { attributes, setAttributes } = props;
	const { language, label_type } = attributes;
	const [selected, setSelected] = useState(
		languages.find(({ value }) => value === language)
	);

	return (
		<Div classes="control-container">
			<BaseControl
				id={addPrefix("control-language")}
				label={__("Language")}
				help={__("Choose the language which the entered code belongs to.")}
				className={addPrefix("control")}
			>
				<ReactSelect
					className={addPrefix("control-react_select")}
					classNamePrefix={pr}
					value={selected}
					onChange={(selected: ValueType<Language>) => {
						if (!selected) {
							return;
						}

						selected = selected as Language;

						setAttributes({ language: selected.value });
						setSelected(selected);

						if (label_type === "language") {
							setAttributes({ label: selected.label });
						}
					}}
					options={options}
					placeholder={__("Select a language")}
					formatGroupLabel={formatGroupLabel}
				/>
			</BaseControl>
		</Div>
	);
};
