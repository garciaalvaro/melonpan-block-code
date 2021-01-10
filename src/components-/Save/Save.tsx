import React, { FunctionComponent } from "react";

import { BlockContainer } from "../BlockContainer";
import { BlockContent } from "../BlockContent";

export const Save: FunctionComponent<SaveProps> = props => {
	return (
		<BlockContainer {...props}>
			<BlockContent {...props} />
		</BlockContainer>
	);
};
