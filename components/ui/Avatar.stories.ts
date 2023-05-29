import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    src: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80",
    alt: "Colm Tuite",
    fallback: "CT",
  },
};

export const Fallback: Story = {
  args: {
    src: "https://unknown-root.localhost",
    alt: "Colm Tuite",
    fallback: "CT",
  },
};
