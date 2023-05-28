import type { Meta, StoryObj } from "@storybook/react";

import { PostUpdate } from "./PostUpdate";

const meta: Meta<typeof PostUpdate> = {
  title: "Social/PostUpdate",
  component: PostUpdate,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PostUpdate>;

export const Default: Story = {
  args: {},
};
