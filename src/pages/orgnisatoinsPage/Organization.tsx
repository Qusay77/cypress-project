import { OrgBody } from "./Theme";
import Simple from "@qusay77/high-chart";

export interface orgsType {
	orgId?: number;
	name?: string | number;
	package?: string;
	startDate?: string;
	endDate?: string;
	opened: boolean;
}

export interface domainTypes {
	domain: string;
}
const orgs: Array<orgsType> = [
	{
		orgId: 553,
		name: "TerminalX - Magento",
		package: "ENTERPRISE",
		startDate: "2022-11-30T08:05:42.951Z",
		endDate: "2023-11-30T08:05:42.951Z",
		opened: false,
	},
	{
		orgId: 576,
		name: "Worthy.com",
		package: "ENTERPRISE",
		startDate: "2022-11-30T08:05:42.951Z",
		endDate: "2023-11-30T08:05:42.951Z",
		opened: false,
	},
	{
		orgId: 584,
		name: "JFrog",
		package: "ENTERPRISE",
		startDate: "2022-11-30T08:05:42.951Z",
		endDate: "2023-11-30T08:05:42.951Z",
		opened: false,
	},
	{
		orgId: 626,
		name: "Free Time",
		package: "ENTERPRISE",
		startDate: "2022-11-30T08:05:42.952Z",
		endDate: "2023-11-30T08:05:42.952Z",
		opened: false,
	},
	{
		orgId: 641,
		name: "Fattal",
		package: "ENTERPRISE",
		startDate: "2022-12-23T00:00:01.041Z",
		endDate: "2023-01-22T00:00:01.042Z",
		opened: false,
	},
	{
		orgId: 645,
		name: "Super Pharm",
		package: "ENTERPRISE",
		startDate: "2022-11-30T08:05:42.951Z",
		endDate: "2023-12-30T08:05:42.951Z",
		opened: false,
	},
	{
		orgId: 719,
		name: "QLF Brands",
		package: "ENTERPRISE",
		startDate: "2022-11-30T08:05:42.951Z",
		endDate: "2023-11-30T08:05:42.951Z",
		opened: false,
	},
];

const Doms: Array<domainTypes> = [
	{
		domain: "development.voordeeluitjes.nl",
	},
	{
		domain: "indium.voordeeluitjes.nl",
	},
	{
		domain: "krypton.voordeeluitjes.nl",
	},
	{
		domain: "mercury.voordeeluitjes.nl",
	},
	{
		domain: "neon.voordeeluitjes.nl",
	},
	{
		domain: "test.voordeeluitjes.nl",
	},
	{
		domain: "www.development.voordeeluitjes.nl",
	},
	{
		domain: "www.neon.voordeeluitjes.nl",
	},
	{
		domain: "www.voordeeluitjes.nl",
	},
];
const Organization = () => {
	return (
		<OrgBody>
			<Simple arrayOfObects={orgs} domains={Doms} />
		</OrgBody>
	);
};

export default Organization;
