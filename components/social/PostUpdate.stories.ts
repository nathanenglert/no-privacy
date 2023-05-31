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
  args: {
    apiUrl: "/api",
  },
  parameters: {
    mockData: [
      {
        url: "/api/posts",
        method: "POST",
        status: 201,
        response: {},
      },
    ],
  },
};

export const DelayWhenPosting: Story = {
  args: {
    apiUrl: "/api",
    initialContent: "delay",
  },
  parameters: {
    mockData: [
      {
        url: "/api/posts",
        method: "POST",
        status: 201,
        delay: 2000,
        response: {},
      },
    ],
  },
};

export const ErrorWhenPosting: Story = {
  args: {
    apiUrl: "/api",
    initialContent: "error",
  },
  parameters: {
    mockData: [
      {
        url: "/api/posts",
        method: "POST",
        status: 500,
        response: {},
      },
    ],
  },
};
