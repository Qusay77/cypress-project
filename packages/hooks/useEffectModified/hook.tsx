import { isEqual } from "lodash";
import { useEffect, useRef } from "react";
import useDeepCompareEffect from "use-deep-compare-effect";

const usePrevious = (value: unknown[], initialValue: unknown[]) => {
	const ref = useRef(initialValue);
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
};

const useEffectModified = (
	effectHook: (changedDeps: { [key: string]: unknown }) => void,
	dependencies: unknown[],
	dependencyNames = [],
) => {
	const previousDeps = usePrevious(dependencies, []);

	const changedDeps = dependencies.reduce(
		(accum: object, dependency: unknown, index: number) => {
			if (!isEqual(dependency, previousDeps[index])) {
				const keyName = dependencyNames[index] || index;
				return {
					...accum,
					[keyName]: {
						before: previousDeps[index],
						after: dependency,
					},
				};
			}

			return accum;
		},
		{},
	);

	useDeepCompareEffect(() => effectHook(changedDeps), dependencies);
};

export { useEffectModified, usePrevious };
