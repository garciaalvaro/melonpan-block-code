import React, { FunctionComponent } from "react";

import "./BlockContainer.styl";
import { className as classNameUtil } from "@/utils/tools";

interface Props {
	attributes: Attributes;
	className?: EditProps["className"];
}

export const BlockContainer: FunctionComponent<Props> = props => {
	const { attributes, className, children } = props;

	const {
		language,
		theme,
		scheme,
		padding_tb,
		padding_lr,
		border_width,
		border_radius,
	} = attributes;

	const classNames = [
		className,
		theme ? `mbcode-theme-${theme}` : null,
		scheme ? `mbcode-scheme-${scheme}` : null,
		padding_tb ? `mbcode-padding_tb-${padding_tb}` : null,
		padding_lr ? `mbcode-padding_lr-${padding_lr}` : null,
		border_radius ? `mbcode-border_radius-${border_radius}` : null,
		border_width ? `mbcode-border_width-${border_width}` : null,
	];

	return (
		<div className={classNameUtil(classNames)} data-language={language}>
			{children}
		</div>
	);
};
