import { __ } from "@wordpress/i18n";
import { BaseControl, ButtonGroup } from "@wordpress/components";

import { Div, Button } from "utils/Components";
import { addPrefix } from "utils/tools";

const buttons: { value: Attributes["view"]; label: string }[] = [
	{ value: "editor", label: __("Editor") },
	{ value: "previewer", label: __("Previewer") },
];

export const ControlView: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { view } = attributes;

	return (
		<Div className="control-container">
			<BaseControl
				id={addPrefix("control-view")}
				className={addPrefix("control")}
				label={__("View")}
				help={__(
					"To edit the code activate Editor view. To preview the result activate Previewer view."
				)}
			>
				<ButtonGroup className={addPrefix("control-button_group")}>
					{buttons.map(({ value, label }) => (
						<Button
							key={value}
							className={[
								"button",
								view === value ? "is_active" : null,
							]}
							onClick={() =>
								setAttributes({
									view: value,
								})
							}
						>
							{label}
						</Button>
					))}
				</ButtonGroup>
			</BaseControl>
		</Div>
	);
};
