import React from "react";
import { storiesOf } from "@storybook/react-native";
import { withKnobs } from "@storybook/addon-knobs";
import { View, theme, ThemeProvider } from "native-base";
import Basic from "./Basic";
import Sizes from "./Sizes";
import SwitchBgColor from "./SwitchBgColor";

type GetStory = () => JSX.Element | JSX.Element[] | any;
storiesOf("Switch", module)
  .addDecorator(withKnobs)
  .addDecorator((getStory: GetStory) => (
    <ThemeProvider theme={theme}>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {getStory()}
      </View>
    </ThemeProvider>
  ))
  .add("Basic", () => <Basic />)
  .add("Sizes", () => <Sizes />)
  .add("Switch bgColor", () => <SwitchBgColor />);
