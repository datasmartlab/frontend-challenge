import type { Meta, StoryObj } from '@storybook/react';

import {ResponsiveAppBar} from './index';

const meta : Meta <typeof ResponsiveAppBar> = {
    component: ResponsiveAppBar
};
export default meta;

type Story = StoryObj<typeof ResponsiveAppBar>;

export const Desktop:Story = {
    render: () => <ResponsiveAppBar/>
}