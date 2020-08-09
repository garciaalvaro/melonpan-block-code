import { __ } from "@wordpress/i18n";
import { select, dispatch } from "@wordpress/data";

import { block_category } from "@/utils/data";

const categories = select("core/blocks").getCategories();

// If the categories array exists and "melonpan" hasn't been added yet
if (categories && !categories.find(({ slug }) => slug === block_category)) {
	// Add the new category
	dispatch("core/blocks").setCategories([
		...categories,

		{
			slug: block_category,
			title: __("Melonpan Blocks"),
			icon: null,
		},
	]);
}
