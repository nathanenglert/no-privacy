import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  args: {
    intent: "primary",
    placeholder: "Text",
  },
};

export const Secondary: Story = {
  args: {
    intent: "secondary",
    placeholder: "Text",
  },
};

export const DefaultValue: Story = {
  args: {
    intent: "secondary",
    placeholder: "Text",
    defaultValue: "This is a default value",
  },
};
