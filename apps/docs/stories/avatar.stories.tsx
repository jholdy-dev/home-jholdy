import type { Meta, StoryObj } from "@storybook/react";
import { Avatar, AvatarFallback, AvatarImage } from "@jholdy/ui";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
  argTypes: {},
  parameters: {},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  name: "Default Avatar",
  parameters: {},
  args: {},
};
