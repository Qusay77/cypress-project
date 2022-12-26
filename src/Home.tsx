import { CoolButton } from "@packages/button";
import { useState } from "react";
import SideBar from "@packages/core-sidebar";

export default function Home() {
	const [openSideBar, setOpenSideBar] = useState(false);

	const sideBarStyle = {
		bmCrossButton: {
			height: "24px",
			width: "24px",
		},
		bmCross: {
			background: "red",
		},

		bmMenu: {
			background: "black",
			padding: "2.5em 1.5em 0",
			fontSize: "1.15em",
		},
		bmOverlay: {
			background: "rgba(0, 0, 0, 0.3)",
		},
	};

	return (
		<>
			<div>
				<SideBar
					styles={sideBarStyle}
					right={true}
					customBurgerIcon={false}
					isOpen={openSideBar}
					setIsOpen={setOpenSideBar}
				>
					<p style={{ margin: 0 }}>test</p>
				</SideBar>
				<button onClick={() => setOpenSideBar(true)}>open side bar</button>
				<CoolButton label="Code" />
			</div>
		</>
	);
}
