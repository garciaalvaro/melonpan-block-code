import { Div } from "utils/Components";

import "./BlockContainer.styl";

interface Props extends SaveProps {
	children: React.ReactNode;
	className?: string;
}

export const BlockContainer: React.ComponentType<Props> = props => {
	const { className, attributes, children } = props;
	const {
		language,
		theme,
		scheme,
		padding_tb,
		padding_lr,
		border_width,
		border_radius,
	} = attributes;
	const classes = [
		className ? `!${className}` : null,
		theme ? `theme-${theme}` : null,
		scheme ? `scheme-${scheme}` : null,
		padding_tb ? `padding_tb-${padding_tb}` : null,
		padding_lr ? `padding_lr-${padding_lr}` : null,
		border_radius ? `border_radius-${border_radius}` : null,
		border_width ? `border_width-${border_width}` : null,
	];

	return (
		<Div className={classes} data-language={language}>
			{children}
		</Div>
	);
};
