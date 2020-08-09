import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";
import { className } from "@/utils/tools";

export const ControlBorder: FunctionComponent<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { border_radius, border_width } = attributes;

	return (
		<div className="mbcode-control-container">
			<RangeControl
				id="mbcode-control-border_radius"
				className={className([
					"mbcode-control-range",
					"mbcode-control",
				])}
				label={__("Border radius [px]")}
				value={border_radius}
				min={0}
				max={15}
				step={1}
				onChange={border_radius => setAttributes({ border_radius })}
			/>

			<RangeControl
				id="mbcode-control-border_width"
				className={className([
					"mbcode-control-range",
					"mbcode-control",
				])}
				label={__("Border width [px]")}
				value={border_width}
				min={0}
				max={5}
				step={1}
				onChange={border_width => setAttributes({ border_width })}
			/>
		</div>
	);
};
