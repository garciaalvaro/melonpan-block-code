import { __ } from "@wordpress/i18n";
import { useCallback } from "@wordpress/element";
import { RangeControl } from "@wordpress/components";

import { Div } from "utils/Components";
import { addPrefix } from "utils/tools";

export const ControlBorder: React.ComponentType<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { border_radius, border_width } = attributes;
	const onChangeBorderRadius = useCallback(
		(border_radius: Attributes["border_radius"]) =>
			setAttributes({ border_radius }),
		[]
	);
	const onChangeBorderWidth = useCallback(
		(border_width: Attributes["border_width"]) =>
			setAttributes({ border_width }),
		[]
	);

	return (
		<Div className="control-container">
			<RangeControl
				id={addPrefix("control-border_radius")}
				className={addPrefix(["control-range", "control"])}
				label={__("Border radius [px]")}
				value={border_radius}
				min={0}
				max={15}
				step={1}
				onChange={onChangeBorderRadius}
			/>
			<RangeControl
				id={addPrefix("control-border_width")}
				className={addPrefix(["control-range", "control"])}
				label={__("Border width [px]")}
				value={border_width}
				min={0}
				max={5}
				step={1}
				onChange={onChangeBorderWidth}
			/>
		</Div>
	);
};
