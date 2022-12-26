import { ComponentStory, ComponentMeta } from "@storybook/react";
import { InputCore } from "@packages/core-input";

export default {
  title: "Example/Input",
  component: InputCore,
  argTypes: {
    type: {
      control: "none",
    },
    isOpen: {
      control: "none",
    },
    value: {
      control: "none",
    },
  },
} as ComponentMeta<typeof InputCore>;

const Template: ComponentStory<typeof InputCore> = (args) => (
  <InputCore {...args} />
);

export const Text = Template.bind({});
Text.args = {
  error: true,
  errorMessage: "Invalid Email",
  type: "text",
  label: "Email",
  placeholder: "Enter your email here",
  styles: {
    // input , label , error --- for customize style for input field
    // layerProps , layerStyles --- for customize position and style for tooltip and dropdown
    input: {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#333333",
      width: "30%",
    },
    label: {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "15px",
      textTransform: "capitalize",
      color: "#808080",
    },
    error: {
      color: "#D83928",
    },
  },
};

export const Password = Template.bind({});
Password.args = {
  error: false,
  errorMessage: "Invalid Password",
  type: "password",
  label: "Password",
  placeholder: "Enter your password",
  styles: {
    // input , label , error --- for customize style for input field
    // layerProps , layerStyles --- for customize position and style for tooltip and dropdown
    input: {
      fontWeight: "400",
      fontSize: "14px",
      lineHeight: "17px",
      color: "#333333",
      width: "30%",
    },
    label: {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "15px",
      textTransform: "capitalize",
      color: "#808080",
    },
    error: {
      color: "#D83928",
    },
  },
};

export const DropDownToolTip = Template.bind({});

DropDownToolTip.args = {
  type: "dropDown",
  isOpen: true,
  children: (
    <div>
      <div
        style={{
          width: "60px",
          borderRadius: "8px",
          border: "1px solid gray",
          padding: "0px 12px",
          borderBottom: "none",
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
        }}
      >
        Test
      </div>
      <p>11</p>
      <p>tess</p>
    </div>
  ),
  // input , label , error --- for customize style for input field
  // layerProps , layerStyles --- for customize position and style for tooltip and dropdown
  styles: {
    layerProps: {
      placement: "top-start",
      possiblePlacements: [
        "top-start",
        "top-right",
        "bottom-start",
        "bottom-center",
        "bottom-end",
      ],
      triggerOffset: 0,
      containerOffset: 0,
    },
    layerStyles: {
      width: "60px",
      border: "1px solid gray",
      boxShadow: "none",
      borderTopLeftRadius: "0",
      borderTopRightRadius: "0",
      borderTop: "none",
    },
  },
};
