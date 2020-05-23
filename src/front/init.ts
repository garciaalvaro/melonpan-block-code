import { MelonpanBlockCode } from "./class-MelonpanBlockCode";

export const init = (): void => {
	const blocks = [
		...document.querySelectorAll(".wp-block-melonpan-block-code"),
	];

	blocks.forEach(node => {
		const melonpan_block_code = new MelonpanBlockCode(node);

		melonpan_block_code.init();
	});
};
