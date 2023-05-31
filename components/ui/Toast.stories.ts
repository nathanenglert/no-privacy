import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: "Title",
    description: "Description",
    trigger: 0,
  },
};
