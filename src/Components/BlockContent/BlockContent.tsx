import { Div, Pre, Span, Code, Button } from "utils/Components";

interface Props extends SaveProps {
	highlighted_content?: string;
}

const { __ } = wp.i18n;
const { Fragment } = wp.element;

export const BlockContent: React.ComponentType<Props> = props => {
	const { highlighted_content, attributes } = props;
	const { content, copy_button_enabled, label_enabled, label } = attributes;

	return (
		<Fragment>
			<Pre>
				{highlighted_content ? (
					<Code
						dangerouslySetInnerHTML={{
							__html: highlighted_content
						}}
					/>
				) : (
					<Code>{content}</Code>
				)}
			</Pre>
			{label_enabled && label && (
				<Div className="label">
					<Span>{label}</Span>
				</Div>
			)}
			{copy_button_enabled && (
				<Button className="button">
					<Span>{__("Copy")}</Span>
				</Button>
			)}
		</Fragment>
	);
};
