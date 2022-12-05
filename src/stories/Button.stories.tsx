import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CoolButton } from "@packages/button";

export default {
	title: "Example/Button",
	component: CoolButton,
	argTypes: {
		backgroundColor: { control: "color" },
		handleClick: {
			action: "clicked",
		},
	},
} as ComponentMeta<typeof CoolButton>;

const Template: ComponentStory<typeof CoolButton> = (args) => (
	<CoolButton {...args} />
);

export const Large = Template.bind({});
Large.args = {
	size: "large",
	label: "large",
};

export const Medium = Template.bind({});
Medium.args = {
	size: "medium",
	label: "med",
};

export const Small = Template.bind({});
Small.args = {
	size: "small",
	label: "small",
};
