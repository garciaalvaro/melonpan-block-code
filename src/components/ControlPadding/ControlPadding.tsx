import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { RangeControl } from "@wordpress/components";

import { className } from "@/utils/tools";

export const ControlPadding: FunctionComponent<EditProps> = props => {
	const { attributes, setAttributes } = props;
	const { padding_tb, padding_lr } = attributes;

	return (
		<div className="mbcode-control-container">
			<RangeControl
				id="mbcode-control-padding_tb"
				className={className([
					"mbcode-control-range",
					"mbcode-control",
				])}
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
				id="mbcode-control-padding_lr"
				className={className([
					"mbcode-control-range",
					"mbcode-control",
				])}
				label={__("Padding left & right [px]")}
				value={padding_lr}
				min={0}
				max={100}
				step={5}
				onChange={(padding_lr: Attributes["padding_lr"]) =>
					setAttributes({ padding_lr })
				}
			/>
		</div>
	);
};
