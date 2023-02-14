import Container from "./Container";
import Side from "@qusay77/side-menu";
import { LayoutBody } from "./LayoutTheme";

export interface SideType {
	label: string;
	isActive: boolean;
	HasUnderLine?: boolean;
	hasArrow?: boolean;
	IsExpanded?: boolean;
}

const menuElements: Array<SideType> = [
	{
		label: "Dashboard",
		isActive: false,
	},
	{
		label: "Business",
		isActive: false,
		hasArrow: true,
		IsExpanded: false,
	},
	{
		label: "Technology",
		isActive: false,
		hasArrow: true,
		IsExpanded: false,
	},
	{
		label: "Sessions",
		isActive: true,
	},
	{
		label: "Alerts",
		isActive: false,
		HasUnderLine: true,
	},
	{
		label: "Implementation",
		isActive: false,
	},
	{
		label: "Updates",
		isActive: false,
	},
];

function AppLayout({ children, ...rest }: { [key: string]: any }) {
	return (
		<LayoutBody>
			<Container {...rest}>
				<Side menuElements={menuElements} />
				{children}
			</Container>
		</LayoutBody>
	);
}

export default AppLayout;
