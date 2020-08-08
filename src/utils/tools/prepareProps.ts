import { addPrefix } from "./addPrefix";

interface ComponentPropsPrepared extends ComponentProps {
	id?: string;
	className?: string;
}

export const prepareProps = (props: ComponentProps): ComponentPropsPrepared => {
	const { id, className, ...rest } = props;

	return {
		id: addPrefix(id) || undefined,
		className: addPrefix(className) || undefined,
		...rest,
	};
};
