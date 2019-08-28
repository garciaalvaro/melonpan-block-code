import ReactSelect from "react-select";
import { ValueType } from "react-select/src/types";

import { Div, Span } from "utils/Components";
import { addPrefix } from "utils/tools";
import { pr, languages, Language } from "utils/data";

const { __ } = wp.i18n;
const { BaseControl } = wp.components;
const { useState, useCallback } = wp.element;

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

export const ControlLanguage: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { language, label_type } = attributes;
	const [selected, setSelected] = useState(
		languages.find(({ value }) => value === language)
	);
	const onChange = useCallback(
		(selected: ValueType<Language>) => {
			if (!selected) {
				return;
			}

			selected = selected as Language;

			setAttributes({ language: selected.value });
			setSelected(selected);

			if (label_type === "language") {
				setAttributes({ label: selected.label });
			}
		},
		[label_type]
	);

	return (
		<Div className="control-container">
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
					onChange={onChange}
					options={options}
					placeholder={__("Select a language")}
					formatGroupLabel={formatGroupLabel}
				/>
			</BaseControl>
		</Div>
	);
};
