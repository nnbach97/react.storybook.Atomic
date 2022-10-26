import React, { useState } from 'react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

// export const Primary = () => {
//   // Sets the hooks for both the label and primary props
//   const [value, setValue] = useState('Secondary');
//   const [isPrimary, setIsPrimary] = useState(false);

//   // Sets a click handler to change the label's value
//   const handleOnChange = () => {
//     setIsPrimary(!isPrimary);
//       setValue( !isPrimary ? 'Primary' : 'Secondary');
//   };
//   return <Button primary={isPrimary} onClick={handleOnChange} label={value} />;
// };
// Primary.storyName = 'I am the primary';
