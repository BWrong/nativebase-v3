import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, NativeBaseProvider } from '@native-base/v3';
import Playground from './knobEnabled';
// import Composition from './composition';
import Usage from './usage';
import Variant from './variant';
import Status from './status';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <NativeBaseProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </NativeBaseProvider>
  ))
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Status', () => <Status />)
  .add('Variant', () => <Variant />);
// .add('Composition', () => <Composition />);
