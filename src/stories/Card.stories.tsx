import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Card from "../Components/Card";

export default {
  title: "Components/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: "1",
  text: "Hello world",
};
