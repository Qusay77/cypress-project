import MainTable from "@packages/table";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
	title: "Example/MainTable",
	component: MainTable,
	argTypes: {},
} as ComponentMeta<typeof MainTable>;

const Template: ComponentStory<typeof MainTable> = (args) => (
	<MainTable {...args} />
);

export const Table = Template.bind({});
Table.args = {
	fakeData: [
		{
			id: 24,
			avartar: "https://s3.amazonaws.com/uifaces/faces/twitter/SULiik/128.jpg",
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
	],
};
