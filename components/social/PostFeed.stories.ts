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
  args: {
    posts: [
      {
        id: "1",
        name: "Claire Mac",
        avatar:
          "https://images.unsplash.com/photo-1614644147724-2d4785d69962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
        publishDate: "2022-10-10T22:45:22.578Z",
        content: "Went to get donuts today, lol",
      },
      {
        id: "2",
        name: "John Doe",
        avatar:
          "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
        publishDate: "2022-10-08T15:23:22.578Z",
        content: "What is up..?",
      },
    ],
  },
};

export const Empty: Story = {
  args: {
    posts: [],
  },
};
