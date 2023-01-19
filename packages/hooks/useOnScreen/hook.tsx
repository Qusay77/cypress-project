import { ReactNode, RefObject, useEffect, useRef } from "react";
import { useState } from "react";
import { OnScreen } from "./types";
const useOnScreen = (ref: RefObject<Element>) => {
	const [isIntersecting, setIntersecting] = useState(false);
	let observer: IntersectionObserver | null = null;
	try {
		observer = new IntersectionObserver(
			([entry]) => setIntersecting(entry.isIntersecting),
			{
				root: null,
				threshold: 0,
				trackVisibility: true,
				delay: 100,
			} as OnScreen,
		);
	} catch (error) {
		// eslint-disable-next-line no-console
		console.log("intersection Observer is not defined in this browser", error);
	}
	useEffect(() => {
		try {
			if (ref.current) {
				observer?.observe(ref.current);
			}
			// Remove the observer as soon as the component is unmounted
			return () => {
				observer?.disconnect();
			};
		} catch {
			setIntersecting(true);
		}
	}, []);
	return isIntersecting;
};
function OnScreenWrapper({
	children,
	styleFunction,
}: {
	children: ReactNode[];
	styleFunction: (arg: boolean) => React.CSSProperties;
}) {
	const ref = useRef(null);
	const bool = ref && useOnScreen(ref);
	return (
		<div ref={ref} style={styleFunction && styleFunction(bool)}>
			{bool ? children : null}
		</div>
	);
}
export { useOnScreen, OnScreenWrapper };
