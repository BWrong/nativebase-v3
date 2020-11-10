import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import Usage from './Usage';
import ManageFocus from './ManageFocus';
import DefaultValue from './DefaultValue';
import Size from './Size';
import Playground from './Playground';
import Variants from './Variants';
import FormControlled from './FormControlled';
import Placeholder from './Placeholder';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('PinInput', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Playground', () => <Playground />)
  .add('Usage', () => <Usage />)
  .add('Size', () => <Size />)
  .add('DefaultValue', () => <DefaultValue />)
  .add('Placeholder', () => <Placeholder />)
  .add('ManageFocus', () => <ManageFocus />)
  .add('Variants', () => <Variants />)
  .add('FormControlled', () => <FormControlled />);
