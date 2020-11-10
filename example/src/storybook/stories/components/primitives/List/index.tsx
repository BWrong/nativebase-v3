import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { withKnobs } from '@storybook/addon-knobs';
import { View, theme, NativeBaseProvider } from '@native-base/v3';
import DefaultList from './DefaultList';
import ListWithIcon from './ListWithIcon';

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf('List', module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <NativeBaseProvider theme={theme}>
      <View bg="gray.0" flex={1} justifyContent="center" alignItems="center">
        {getStory()}
      </View>
    </NativeBaseProvider>
  ))
  .add('Default List', () => <DefaultList />)
  .add('List with Icon', () => <ListWithIcon />);
