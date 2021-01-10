import React, { FunctionComponent } from "react";

import { className as classNameUtil } from "@/utils/tools/className";

interface Props {
	// eslint-disable-next-line @typescript-eslint/ban-types
	onClick: Function;
	className?: string | (string | null | undefined)[];
	omit_type_button_prop?: boolean;
}

export const Button: FunctionComponent<Props> = props => {
	const { children, className, onClick, omit_type_button_prop } = props;

	return (
		<button
			type={omit_type_button_prop ? undefined : "button"}
			onClick={event => onClick(event)}
			className={classNameUtil(
				Array.isArray(className) ? className : [className]
			)}
		>
			{children}
		</button>
	);
};
