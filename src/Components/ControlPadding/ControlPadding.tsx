import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";

const { __ } = wp.i18n;
const { RangeControl } = wp.components;

export const ControlPadding: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { padding_tb, padding_lr } = attributes;

	return (
		<Div className="control-container">
			<RangeControl
				id={addPrefix("control-padding_tb")}
				className={addPrefix(["control-range", "control"])}
				label={__("Padding top & bottom [px]")}
				value={padding_tb}
				min={0}
				max={100}
				step={5}
				onChange={(padding_tb: Attributes["padding_tb"]) =>
					setAttributes({ padding_tb })
				}
			/>
			<RangeControl
				id={addPrefix("control-padding_lr")}
				className={addPrefix(["control-range", "control"])}
				label={__("Padding left & right [px]")}
				value={padding_lr}
				min={0}
				max={100}
				step={5}
				onChange={(padding_lr: Attributes["padding_lr"]) =>
					setAttributes({ padding_lr })
				}
			/>
		</Div>
	);
};
