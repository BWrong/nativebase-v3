import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, ThemeProvider } from '@native-base/v3';
import ZStack from './example';
import CenterStack from './CenterStack';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('ZStack', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add('Basic ZStack', () => <ZStack />)
  .add('ZStack items centered', () => <CenterStack />);
