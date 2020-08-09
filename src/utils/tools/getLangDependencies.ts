import { languages_dependencies } from "@/utils/data/languages-dependencies";

const castArrayFromString = (element: string | string[]): string[] => {
	if (typeof element === "string") {
		return [element];
	}

	return element;
};

export const getLangDependencies = (lang: Language): Language[] => {
	const deps = languages_dependencies[lang];

	if (!deps) {
		return [];
	}

	const deps_array = (castArrayFromString(deps) as Language[]).reduce<
		Language[]
	>((acc, dep) => {
		const dep_deps = getLangDependencies(dep);

		return acc.concat(...dep_deps, dep);
	}, []);

	return deps_array;
};
