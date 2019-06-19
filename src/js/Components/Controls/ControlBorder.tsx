import { Div } from "utils/components";
import { addPrefix } from "utils/tools/addPrefix";

const { __ } = wp.i18n;
const { RangeControl, BaseControl, ToggleControl } = wp.components;

export const ControlBorder: React.ComponentType<BlockPropsEdit> = props => {
	const { attributes, setAttributes } = props;
	const { border_radius, border_width } = attributes;

	return (
		<Div classes="control-container">
			<RangeControl
				id={addPrefix("control-border_radius")}
				className={addPrefix(["control-range", "control"])}
				label={__("Border radius [px]")}
				value={border_radius}
				min={0}
				max={15}
				step={1}
				onChange={(border_radius: Attributes["border_radius"]) =>
					setAttributes({ border_radius })
				}
			/>
			<RangeControl
				id={addPrefix("control-border_width")}
				className={addPrefix(["control-range", "control"])}
				label={__("Border width [px]")}
				value={border_width}
				min={0}
				max={5}
				step={1}
				onChange={(border_width: Attributes["border_width"]) =>
					setAttributes({ border_width })
				}
			/>
		</Div>
	);
};
