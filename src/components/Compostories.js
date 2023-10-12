/* eslint-disable prettier/prettier */
import {Compo} from './Compo';
import {View} from 'react-native';
import React from 'react';

export default {
  title: '컴포넌트',
  component: Compo,
  args: {
    text: 'text',
    isDisabled: false,
    onPress: () => {
      'press THE BTN';
    },
  },
  decorators: [
    Story => (
      <View>
        <Story />
      </View>
    ),
  ],
};

export const Default = args => <Compo {...args} />;
Default.args = {
  isDisabled: true,
};
