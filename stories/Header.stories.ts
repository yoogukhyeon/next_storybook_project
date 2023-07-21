import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/layout/Header';

// eslint-disable-next-line storybook/default-exports
const meta: Meta<typeof Header> = {
  title: 'Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;

type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: '유국현',
    },
  },
};

export const LoggedOut: Story = {};
