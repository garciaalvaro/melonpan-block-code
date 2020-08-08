import { prepareProps } from "utils/tools/prepareProps";

export const Pre: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	return <pre {...prepareProps(rest)}>{children}</pre>;
};
