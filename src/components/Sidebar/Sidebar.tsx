import React, { FunctionComponent } from "react";
import { InspectorControls } from "@wordpress/block-editor";

import "./Sidebar.styl";
import { ControlView } from "../ControlView/ControlView";
import { ControlLanguage } from "../ControlLanguage/ControlLanguage";
import { ControlTheme } from "../ControlTheme/ControlTheme";
import { ControlCopyButton } from "../ControlCopyButton/ControlCopyButton";
import { ControlLanguageLabel } from "../ControlLanguageLabel/ControlLanguageLabel";
import { ControlPadding } from "../ControlPadding/ControlPadding";
import { ControlBorder } from "../ControlBorder/ControlBorder";

export const Sidebar: FunctionComponent<EditProps> = props => {
	return (
		<InspectorControls>
			<div id="mbcode-controls">
				<ControlView {...props} />
				<ControlLanguage {...props} />
				<ControlTheme {...props} />
				<ControlCopyButton {...props} />
				<ControlLanguageLabel {...props} />
				<ControlPadding {...props} />
				<ControlBorder {...props} />
			</div>
		</InspectorControls>
	);
};
