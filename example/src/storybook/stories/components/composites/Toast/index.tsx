import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, NativeBaseProvider } from '@native-base/v3';
import Usage from './Usage';
import Position from './Position';
import Offset from './Offset';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Toast', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <NativeBaseProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </NativeBaseProvider>
  ))
  .add('Usage', () => <Usage />)
  .add('Position', () => <Position />)
  .add('Offset', () => <Offset />);
