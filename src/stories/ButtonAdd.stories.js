import React from 'react';
import ButtonAdd from '../components/ButtonAdd';

export default {
  title: 'Buttons/ButtonAdd',
  component: ButtonAdd,
};

const Template = args => <ButtonAdd {...args} />;

export const Default = Template.bind({});

Default.args = {};
