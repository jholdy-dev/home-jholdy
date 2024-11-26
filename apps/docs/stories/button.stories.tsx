import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@jholdy/ui";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: { type: "radio" },
      options: ["default", "sm", "lg", "icon"],
    },
    asChild: {
      control: { type: "boolean" },
      description:
        "Render the button as a custom component using Radix's Slot.",
    },
    disabled: {
      control: { type: "boolean" },
    },
    children: {
      control: { type: "text" },
      description: "Content inside the button.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  name: "Default Button",
  args: {
    children: "Click Me",
    variant: "default",
    size: "default",
    disabled: false,
  },
};

export const Destructive: Story = {
  name: "Destructive Button",
  args: {
    children: "Delete",
    variant: "destructive",
    size: "default",
  },
};

export const Outline: Story = {
  name: "Outline Button",
  args: {
    children: "Outline",
    variant: "outline",
    size: "default",
  },
};

export const Secondary: Story = {
  name: "Secondary Button",
  args: {
    children: "Secondary",
    variant: "secondary",
    size: "default",
  },
};

export const Ghost: Story = {
  name: "Ghost Button",
  args: {
    children: "Ghost",
    variant: "ghost",
    size: "default",
  },
};

export const Link: Story = {
  name: "Link Button",
  args: {
    children: "Link",
    variant: "link",
    size: "default",
  },
};

export const Icon: Story = {
  name: "Icon Button",
  args: {
    variant: "default",
    size: "icon",
    children: "🔔",
  },
};

export const AsChild: Story = {
  name: "As Child Button",
  args: {
    asChild: true,
    children: <a href="#">I'm a Link</a>,
  },
};
