import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import Playground from './playground';
import Disabled from './disabled';
import Usage from './usage';
import CustomColor from './customeColor';
import CustomIcon from './customeIcon';
import Size from './size';
import Invalid from './invalid';
import FormControlled from './formControlled';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('Radio', module)
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
  .add('Disabled', () => <Disabled />)
  .add('Invalid', () => <Invalid />)
  .add('Size', () => <Size />)
  .add('Custom Color', () => <CustomColor />)
  .add('Custom Icon', () => <CustomIcon />)
  .add('Form Controlled', () => <FormControlled />);
