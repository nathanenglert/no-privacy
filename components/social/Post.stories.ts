import type { Meta, StoryObj } from "@storybook/react";

import { Post } from "./Post";

const meta: Meta<typeof Post> = {
  title: "Social/Post",
  component: Post,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Post>;

export const Default: Story = {
  args: {},
};
