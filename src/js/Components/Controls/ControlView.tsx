import { Div, Button } from "utils/components";
import { addPrefix } from "utils/tools/addPrefix";

const { __ } = wp.i18n;
const { BaseControl, ButtonGroup } = wp.components;

export const ControlView: React.ComponentType<BlockPropsEdit> = props => {
	const { attributes, setAttributes } = props;
	const { view } = attributes;

	return (
		<Div classes="control-container">
			<BaseControl
				id={addPrefix("control-view")}
				className={addPrefix("control")}
				label={__("View")}
				help={__(
					"To edit the code activate Editor view. To preview the result activate Previewer view."
				)}
			>
				<ButtonGroup className={addPrefix("control-button_group")}>
					{[
						{ value: "editor", label: __("Editor") },
						{ value: "previewer", label: __("Previewer") }
					].map(({ value, label }) => (
						<Button
							key={value}
							classes={["button", view === value ? "is_active" : null]}
							onClick={() =>
								setAttributes({
									view: value
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
