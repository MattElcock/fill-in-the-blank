import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Hand from "../Components/Hand";

export default {
  title: "Components/Hand",
  component: Hand,
} as ComponentMeta<typeof Hand>;

const Template: ComponentStory<typeof Hand> = (args) => <Hand {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  cards: [
    {
      id: "1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    { id: "2", text: "Nulla vitae enim ut augue consectetur fermentum." },
    {
      id: "3",
      text: "Nam ornare tortor neque, at viverra nulla accumsan quis.",
    },
    {
      id: "4",
      text: "Nunc nulla dui, venenatis eget metus in, dictum volutpat velit. ",
    },
    {
      id: "5",
      text:
        "Quisque convallis, velit a facilisis molestie, libero elit posuere dolor, non pellentesque dui leo vel lorem.",
    },
    {
      id: "6",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: "7",
      text: "Nunc nulla dui, venenatis eget metus in, dictum volutpat velit. ",
    },
    { id: "8", text: "Nulla vitae enim ut augue consectetur fermentum." },
    {
      id: "9",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
  onPlayCard: (card) => alert(`You chose card: ${card.text}`),
};
