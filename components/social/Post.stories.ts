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
  args: {
    name: "Claire Mac",
    avatar:
      "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    publishDate: "2022-10-10T22:45:22.578Z",
    content: "Went to get donuts today, lol",
  },
};

export const BrokenAvatar: Story = {
  args: {
    name: "John Doe",
    avatar: "https://unknown-image.localhost",
    publishDate: "2022-10-09T02:55:22.578Z",
    content: "Hey there and stuff",
  },
};
