import { useLayer } from "react-laag";
import styled from "@emotion/styled";

export default function DropDown({
	children,
	isOpen,
	setOpen,
}: {
  children?: JSX.Element;
  isOpen: boolean;
  setOpen: Function;
}) {
	const { renderLayer, triggerProps, layerProps } = useLayer({
		isOpen,
		onOutsideClick: close,
		onDisappear: close,
		overflowContainer: false,
		auto: true,
		placement: "bottom-start",
		possiblePlacements: [
			"bottom-start",
			"bottom-center",
			"bottom-end",
			"top-start",
		],
		triggerOffset: -1,
	});
	const Options = styled.div`
    cursor: pointer;
    &:hover {
      color: #0162fe;
    }
  `;
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
								boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.1)",
								borderRadius: "10px",
								width: "fit-content",
								padding: "0 16px",
								fontSize: "14px",
								color: "#171725",
								fontWeight: "600",
							}}
						>
							<div style={{ padding: "14px 0", display: "grid", gap: "12px" }}>
								{Array.isArray(allChildren)
									? allChildren.map((elem: any, ind) => {
										if (ind) {
											return elem;
										}
									})
									: ""}
								<Options>De/Activate</Options>
								<Options>Duplicate</Options>
								<Options>Update Flow</Options>
								{/* <Options
                  onClick={() => {
                    close();
                    setActivityChartEnabled();
                  }}
                >
                  Activity chart
                </Options> */}
								<Options>Delete</Options>
							</div>
						</div>
					)}
				</>
			)}
		</>
	);
}
