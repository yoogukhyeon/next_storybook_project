import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/Button';

// eslint-disable-next-line storybook/default-exports
const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: { type: 'select' }, //radio, select
      options: ['작성하기', '수정하기', '로그인'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
  },
};
