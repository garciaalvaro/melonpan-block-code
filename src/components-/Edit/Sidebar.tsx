import { InspectorControls } from "@wordpress/block-editor";

import "./Sidebar.styl";
import { Div } from "utils/Components";
import { ControlView } from "../ControlView/ControlView";
import { ControlLanguage } from "../ControlLanguage/ControlLanguage";
import { ControlTheme } from "../ControlTheme/ControlTheme";
import { ControlCopyButton } from "../ControlCopyButton/ControlCopyButton";
import { ControlLanguageLabel } from "../ControlLabel/ControlLabel";
import { ControlPadding } from "../ControlPadding/ControlPadding";
import { ControlBorder } from "../ControlBorder/ControlBorder";

export const Sidebar: React.ComponentType<EditProps> = props => {
	return (
		<InspectorControls>
			<Div id="controls">
				<ControlView {...props} />
				<ControlLanguage {...props} />
				<ControlTheme {...props} />
				<ControlCopyButton {...props} />
				<ControlLanguageLabel {...props} />
				<ControlPadding {...props} />
				<ControlBorder {...props} />
			</Div>
		</InspectorControls>
	);
};
