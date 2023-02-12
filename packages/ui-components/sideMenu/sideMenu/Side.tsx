import { SideBarProps } from "./types";
import { SideType } from "storybook/stories/Menu.stories";
import { slide as Menu } from "react-burger-menu";
// import "./styles/style.css";
import {
	Body,
	CardText,
	CardTextColor,
	Line,
	LogoContainer,
	LogoIMG,
	LogoWordIMG,
	SectionCard,
	SectionCardSelected,
} from "./styles/Theme";
import WebLogo from "./Assets/general-icons/webLogo.svg";
import WebLogoWord from "./Assets/general-icons/webLogoWords.svg";
import DashBoardIcon from "./Assets/icons-basic/menu-dashboard-icon.svg";
import DashBoardIconColor from "./Assets/icons-color/menu-dashboard-icon-color.svg";
import BusinessIcon from "./Assets/icons-basic/menu-business-icon.svg";
import BusinessIconColor from "./Assets/icons-color/menu-business-icon-color.svg";
import TechnologyIcon from "./Assets/icons-basic/menu-Technology-icon.svg";
import TechnologyIconColor from "./Assets/icons-color/menu-Technology-icon-color.svg";
import SessionsIcon from "./Assets/icons-basic/menu-sessions-icon.svg";
import SessionsIconColor from "./Assets/icons-color/menu-sessions-icon-color.svg";
import AlertsIcon from "./Assets/icons-basic/menu-alerts-icon.svg";
import AlertsIconColor from "./Assets/icons-color/menu-alerts-icon-color.svg";
import ImplementationIcon from "./Assets/icons-basic/menu-implementation-icon.svg";
import ImplementationIconColor from "./Assets/icons-color/menu-implementation-icon-color.svg";
import UpdatesIcon from "./Assets/icons-basic/menu-updates-icon.svg";
import UpdatesIconColor from "./Assets/icons-color/menu-updates-icon-color.svg";
import { useState } from "react";
interface SampleProps {
  menuElements: Array<SideType>;
}

export default function Side({ menuElements }: SampleProps) {
	const [menuContant, setMenuContant] = useState(menuElements);

	const handleGetCardIcon = (label: string, isActive: boolean) => {
		if (label === "Dashboard") {
			if (isActive) {
				return DashBoardIconColor;
			} else {
				return DashBoardIcon;
			}
		}
		if (label === "Business") {
			if (isActive) {
				return BusinessIconColor;
			} else {
				return BusinessIcon;
			}
		}
		if (label === "Technology") {
			if (isActive) {
				return TechnologyIconColor;
			} else {
				return TechnologyIcon;
			}
		}
		if (label === "Sessions") {
			if (isActive) {
				return SessionsIconColor;
			} else {
				return SessionsIcon;
			}
		}
		if (label === "Alerts") {
			if (isActive) {
				return AlertsIconColor;
			} else {
				return AlertsIcon;
			}
		}
		if (label === "Implementation") {
			if (isActive) {
				return ImplementationIconColor;
			} else {
				return ImplementationIcon;
			}
		}
		if (label === "Updates") {
			if (isActive) {
				return UpdatesIconColor;
			} else {
				return UpdatesIcon;
			}
		}
	};

	const handleActivatePage = (index: number) => {
		console.log("123123", 123123);
		const copy = menuContant?.map((el, i) => {
			if (i === index) {
				return {
					...el,
					isActive: true,
				};
			} else {
				return {
					...el,
					isActive: false,
				};
			}
		});
		setMenuContant(copy);
	};
	return (
		<Body>
			<LogoContainer>
				<LogoIMG src={WebLogo} />
				<LogoWordIMG src={WebLogoWord} />
			</LogoContainer>

			{menuContant?.map((ele, index) => {
				return (
					<>
						{!ele.isActive ? (
							<SectionCard
								onClick={() => {
									handleActivatePage(index);
								}}
							>
								<img src={handleGetCardIcon(ele?.label, ele?.isActive)} />
								<CardText>{ele?.label}</CardText>
							</SectionCard>
						) : (
							<SectionCardSelected>
								<img src={handleGetCardIcon(ele?.label, ele?.isActive)} />
								<CardTextColor>{ele?.label}</CardTextColor>
							</SectionCardSelected>
						)}
						{ele?.HasUnderLine && <Line />}
					</>
				);
			})}
		</Body>
	);
}
