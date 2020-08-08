import { prepareProps } from "utils/tools/prepareProps";

export const Button: React.ComponentType<ComponentProps> = props => {
	const { children, ...rest } = props;

	// For backwards compatibility we don't include type="button"
	return <button {...prepareProps(rest)}>{children}</button>;
};
