import React from 'react';
import CommentIcon from '../../components/icons/CommentIcon';

export default {
  title: 'Icons/Comment',
  component: CommentIcon,
};

const Template = args => <CommentIcon {...args} />;

export const Default = Template.bind({});

Default.args = {};
