import * as React from 'react';

import { Story } from '@storybook/react';

import Heading from './Heading';

export default {
  title: 'Heading',
  component: Heading,
};

const Template: Story<React.ComponentProps<typeof Heading>> = (args) => <Heading {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  text: 'Heading text',
};
