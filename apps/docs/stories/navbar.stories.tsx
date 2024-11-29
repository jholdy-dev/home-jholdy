import type { Meta, StoryObj } from "@storybook/react";
import { Navbar } from "@jholdy/ui";

const meta: Meta<typeof Navbar> = {
  title: "UI/Navbar",
  component: Navbar,
  argTypes: {},
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

type Story = StoryObj<typeof Navbar>;

export const Default: Story = {
  name: "Navbar mobile",
  parameters: {
    viewport: { defaultViewport: "mobile1" },
  },
  args: {},
};

export const NavbarTablet: Story = {
  name: "Navbar tablet",
  parameters: {
    viewport: { defaultViewport: "tablet" },
  },
  args: {},
};
