import React, { FunctionComponent } from "react";

import { className as classNameUtil } from "@/utils/tools/className";

interface Props {
	// eslint-disable-next-line @typescript-eslint/ban-types
	onClick: Function;
	className?: string | (string | null | undefined)[];
}

export const Button: FunctionComponent<Props> = props => {
	const { children, className, onClick } = props;

	return (
		<button
			onClick={event => onClick(event)}
			className={classNameUtil(
				Array.isArray(className) ? className : [className]
			)}
		>
			{children}
		</button>
	);
};
