import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Buttons/Button',
  component: Button,
};

const Template = args => <Button {...args} />;

export const Default = Template.bind({});

Default.args = {};
