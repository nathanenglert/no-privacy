import type { Meta, StoryObj } from "@storybook/react";

import { PostFeed } from "./PostFeed";

const meta: Meta<typeof PostFeed> = {
  title: "Social/PostFeed",
  component: PostFeed,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PostFeed>;

export const Default: Story = {
  args: {},
};
