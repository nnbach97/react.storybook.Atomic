import React from 'react';
import { Input } from './Input';

export default {
  title: 'Forms/Input', //Nợi tạo cấu trúc cho SB ở brower
  component: Input, // Tên Component 
};

const Template = (args) => <Input {...args} />; // Component sẽ nhận những gì và render ra

export const DefaultState = Template.bind({}); // Template.bind({}) Dùng để tạo ra 1 bản copy để tái sử dụng các đoạn code trùng lặp
DefaultState.args = {
  disabled: false,
  placeholder: '',
  value: '',
  onChange: undefined,
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  ...DefaultState.args, // Copy data để tái sử dụng lại (ES6)
  placeholder: 'placeholder',
};

export const Disable = Template.bind({});
Disable.args = {
  ...DefaultState.args,
  value: 'Disabled',
  disabled: true,
};
