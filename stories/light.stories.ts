import type { Meta, StoryObj } from '@storybook/react';

import Light from '@/components/Light';

// eslint-disable-next-line storybook/story-exports
const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Light',
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {
  args: {
    variant: 'green',
  },
};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
    size: 150,
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
    size: 400,
  },
};
