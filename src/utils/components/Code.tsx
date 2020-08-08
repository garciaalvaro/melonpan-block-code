import { prepareProps } from "utils/tools/prepareProps";

export const Code: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	return <code {...prepareProps(rest)}>{children}</code>;
};
