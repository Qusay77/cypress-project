import MainTable from "@packages/table";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "@core/store";
import useTable from "./../../src/hooks/useTable";

const TableLOL = ({ tableProps }) => {
	const { Table } = useTable({ tableProps });
	return Table;
};

export default {
	title: "Example/MainTable",
	component: TableLOL,
	argTypes: {},
} as ComponentMeta<typeof TableLOL>;

const Template: ComponentStory<typeof TableLOL> = (args) => (
	<Provider store={store}>
		{/* <MainTable {...args} /> */}
		<TableLOL {...args} />
	</Provider>
);

export const Table = Template.bind({});
Table.args = {
	tableProps: {
		rowKey: "id",
		data: [
			{
				id: 24,
				avartar:
					"https://s3.amazonaws.com/uifaces/faces/twitter/SULiik/128.jpg",
				city: "Lake Moseburgh",
				email: "Forrest_Turner@yahoo.com",
				firstName: "Destini",
				lastName: "Kautzer",
				street: "Marcelle Plains",
				zipCode: "78303",
				date: "2016-05-02T13:26:36.381Z",
				bs: "B2B harness networks",
				catchPhrase: "Assimilated mobile application",
				companyName: "Kulas, Baumbach and Wintheiser",
				words: "id enim cupiditate",
				sentence: "Architecto consequatur qui qui.",
			},
			{
				id: 2,
				avartar:
					"https://s3.amazonaws.com/uifaces/faces/twitter/thaisselenator_/128.jpg",
				city: "New Gust",
				email: "Mose_Gerhold51@yahoo.com",
				firstName: "Janis",
				lastName: "Vandervort",
				street: "Dickinson Keys",
				zipCode: "43767",
				date: "2017-03-06T09:59:12.551Z",
				bs: "e-business maximize bandwidth",
				catchPhrase: "De-engineered discrete secured line",
				companyName: "Glover - Hermiston",
				words: "deleniti dolor nihil",
				sentence: "Illo quidem libero corporis laborum.",
			},
			{
				id: 3,
				avartar:
					"https://s3.amazonaws.com/uifaces/faces/twitter/arpitnj/128.jpg",
				city: "Lefflerstad",
				email: "Frieda.Sauer61@gmail.com",
				firstName: "Makenzie",
				lastName: "Bode",
				street: "Legros Divide",
				zipCode: "54812",
				date: "2016-12-08T13:44:26.557Z",
				bs: "plug-and-play e-enable content",
				catchPhrase: "Ergonomic 6th generation challenge",
				companyName: "Williamson - Kassulke",
				words: "quidem earum magnam",
				sentence: "Nam qui perferendis ut rem vitae saepe.",
			},
			{
				id: 4,
				avartar:
					"https://s3.amazonaws.com/uifaces/faces/twitter/brajeshwar/128.jpg",
				city: "East Catalina",
				email: "Eloisa.OHara@hotmail.com",
				firstName: "Ciara",
				lastName: "Towne",
				street: "Schimmel Ramp",
				zipCode: "76315-2246",
				date: "2016-07-19T12:54:30.994Z",
				bs: "extensible innovate e-business",
				catchPhrase: "Upgradable local model",
				companyName: "Hilpert, Eichmann and Brown",
				words: "exercitationem rerum sit",
				sentence: "Qui rerum ipsa atque qui.",
			},
		],
	},
};
