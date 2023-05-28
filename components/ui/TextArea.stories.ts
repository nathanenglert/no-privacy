import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from "./TextArea";

const meta: Meta<typeof TextArea> = {
  title: "UI/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Primary: Story = {
  args: {
    intent: "primary",
    placeholder: "Text",
    rows: 5,
    columns: 30,
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    placeholder: "Text",
    rows: 5,
    columns: 30,
  },
};

export const DefaultValue: Story = {
  args: {
    intent: "secondary",
    placeholder: "Text",
    defaultValue: "This is a default value",
    rows: 5,
    columns: 30,
  },
};
