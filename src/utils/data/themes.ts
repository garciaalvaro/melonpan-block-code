export type Theme = {
	label: string;
	value: string;
	scheme: "light" | "dark";
};

export const themes: Theme[] = [
	{ value: "a11y_dark", label: "a11y Dark", scheme: "dark" },
	{ value: "atom_dark", label: "Atom Dark", scheme: "dark" },
	{
		value: "ateliersulphurpool_light",
		label: "Ateliersulphurpool Light",
		scheme: "light",
	},
	{ value: "cb", label: "CB", scheme: "dark" },
	{ value: "coy", label: "Coy", scheme: "light" },
	{ value: "darcula", label: "Darcula", scheme: "dark" },
	{ value: "dracula", label: "Dracula", scheme: "dark" },
	{ value: "duotone_dark", label: "Duotone Dark", scheme: "dark" },
	{ value: "duotone_earth", label: "Duotone Earth", scheme: "dark" },
	{ value: "duotone_forest", label: "Duotone Forest", scheme: "dark" },
	{ value: "duotone_light", label: "Duotone Light", scheme: "light" },
	{ value: "duotone_sea", label: "Duotone Sea", scheme: "dark" },
	{ value: "duotone_space", label: "Duotone Space", scheme: "dark" },
	{ value: "funky", label: "Funky", scheme: "dark" },
	{ value: "ghcolors", label: "GHColors", scheme: "light" },
	{ value: "hopscotch", label: "Hopscotch", scheme: "dark" },
	{ value: "okaidia", label: "Okaidia", scheme: "dark" },
	{ value: "pojoaque", label: "Pojoaque", scheme: "dark" },
	{ value: "prism_dark", label: "Prism Dark", scheme: "dark" },
	{ value: "prism_light", label: "Prism Light", scheme: "light" },
	{ value: "solarized_light", label: "Solarized Light", scheme: "light" },
	{
		value: "tomorrow",
		label: "Tomorrow",
		scheme: "light",
	},
	{
		value: "tomorrow_night",
		label: "Tomorrow Night",
		scheme: "dark",
	},
	{
		value: "tomorrow_night_eighties",
		label: "Tomorrow Night Eighties",
		scheme: "dark",
	},
	{
		value: "tomorrow_night_blue",
		label: "Tomorrow Night Blue",
		scheme: "dark",
	},
	{
		value: "tomorrow_night_bright",
		label: "Tomorrow Night Bright",
		scheme: "dark",
	},
	{ value: "twilight", label: "Twilight", scheme: "dark" },
	{ value: "vs", label: "VS", scheme: "light" },
	{ value: "xonokai", label: "Xonokai", scheme: "dark" },
];
