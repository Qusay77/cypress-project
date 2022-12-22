import { useLayer } from "react-laag";
import { InputProps } from "../types";

export default function DropDown({
	children,
	isOpen,
	setOpen,
	styles,
}: {
  children?: JSX.Element;
  isOpen: boolean;
  setOpen: (arg1: boolean) => void;
  styles: InputProps["styles"];
}) {
	const { renderLayer, triggerProps, layerProps } = useLayer({
		isOpen,
		onOutsideClick: close,
		onDisappear: close,
		overflowContainer: true,
		auto: true,
		placement: "bottom-start",
		possiblePlacements: [
			"bottom-start",
			"bottom-center",
			"bottom-end",
			"top-start",
		],
		triggerOffset: -1,
		containerOffset: 0,
		...styles?.layerProps,
	});
	function close() {
		setOpen(false);
	}
	const allChildren = children?.props.children;

	return (
		<>
			<div {...triggerProps}>
				{!children
					? ""
					: Array.isArray(allChildren)
						? allChildren[0]
						: allChildren}
			</div>
			{renderLayer(
				<>
					{isOpen && (
						<div
							{...layerProps}
							style={{
								...layerProps.style,
								background: "#ffffff 0% 0% no-repeat padding-box",
								width: "fit-content",
								padding: "16px 16px",
								border: "1px solid #E6E6E6",
								boxShadow: "0px 8px 40px rgba(124, 124, 124, 0.1)",
								borderRadius: "8px",
								zIndex: "9999",
								...styles?.layerStyles,
							}}
						>
							{Array.isArray(allChildren)
								? allChildren.map((elem: React.ReactNode, ind) => {
									if (ind) {
										return elem;
									}
								})
								: ""}
						</div>
					)}
				</>
			)}
		</>
	);
}
