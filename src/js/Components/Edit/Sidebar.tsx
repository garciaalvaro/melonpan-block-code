import { Div } from "utils/components";
import { ControlView } from "../Controls/ControlView";
import { ControlLanguage } from "../Controls/ControlLanguage";
import { ControlTheme } from "../Controls/ControlTheme";
import { ControlCopyButton } from "../Controls/ControlCopyButton";
import { ControlLanguageLabel } from "../Controls/ControlLabel";
import { ControlPadding } from "../Controls/ControlPadding";
import { ControlBorder } from "../Controls/ControlBorder";

const { InspectorControls } = wp.blockEditor;

export const Sidebar: React.ComponentType<BlockPropsEdit> = props => {
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
