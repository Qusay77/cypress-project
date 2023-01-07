import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Provider } from "react-redux";
import { store } from "@core/store";
import TableStoryExampleComponent, {
	argTypes,
	args,
} from "./TableStoryExampleComponent";

export default {
	title: "Example/MainTable",
	component: TableStoryExampleComponent,
	argTypes,
} as ComponentMeta<typeof TableStoryExampleComponent>;

const Template: ComponentStory<typeof TableStoryExampleComponent> = (args) => (
	<Provider store={store}>
		<TableStoryExampleComponent {...args} />
	</Provider>
);

export const Table = Template.bind({});
Table.args = args;
