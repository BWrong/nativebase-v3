import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, NativeBaseProvider } from '@native-base/v3';
import TextArea from './example';
import Invalid from './invalid';
import Size from './size';
import Value from './value';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('TextArea', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <NativeBaseProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </NativeBaseProvider>
  ))
  .add('Default', () => <TextArea />)
  .add('InValid and Disabled', () => <Invalid />)
  .add('Sizes', () => <Size />)
  .add('Value Controlled', () => <Value />);
