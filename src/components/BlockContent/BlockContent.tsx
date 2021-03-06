import React, { FunctionComponent } from "react";
import { __ } from "@wordpress/i18n";
import { Fragment } from "@wordpress/element";

import "./BlockContent.styl";
import { Button } from "@/utils/components/Button";

interface Props {
	attributes: Attributes;
	highlighted_content?: string;
	omit_button_type_button_prop?: boolean;
}

export const BlockContent: FunctionComponent<Props> = props => {
	const {
		highlighted_content,
		attributes,
		omit_button_type_button_prop,
	} = props;
	const { content, copy_button_enabled, label_enabled, label } = attributes;

	return (
		<Fragment>
			<pre>
				{highlighted_content ? (
					<code
						dangerouslySetInnerHTML={{
							__html: highlighted_content,
						}}
					/>
				) : (
					<code>{content}</code>
				)}
			</pre>

			{label_enabled && label && (
				<div className="mbcode-label">
					<span>{label}</span>
				</div>
			)}

			{copy_button_enabled && (
				<Button
					className="mbcode-button"
					onClick={() => null}
					omit_type_button_prop={omit_button_type_button_prop}
				>
					<span>{__("Copy")}</span>
				</Button>
			)}
		</Fragment>
	);
};
