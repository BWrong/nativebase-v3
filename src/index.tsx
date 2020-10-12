export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};

import {
  AppBar,
  Badge,
  IconButton,
  Variants,
  AlertHeading,
  AlertDescription,
  AlertCloseButton,
  AlertIcon,
  Alert,
  AspectRatioBox,
  Avatar,
  AvatarBadge,
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  CloseButton,
  Divider,
  Kbd,
  Link,
  Progress,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  TagCloseButton,
  Code,
  Center,
} from './components/composites';

import {
  View,
  Text,
  TextProps,
  Button,
  ButtonGroup,
  IButtonProps,
  Columns,
  Column,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Inline,
  Icon,
  IconProps,
  Input,
  InputBox,
  IInputBoxProps,
  NBImage,
  NBImageProps,
  Spinner,
  ISpinnerProps,
  Heading,
  IHeadingProps,
  Flex,
  NBSwitch as Switch,
  INBSwitchProps,
  IFlexProps,
  IWrapProps,
  TextArea,
  Wrap,
} from './components/primitives';

import {
  darkTheme,
  theme,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
} from './theme';

export {
  AppBar,
  Alert,
  AlertHeading,
  AlertDescription,
  AlertCloseButton,
  AlertIcon,
  AspectRatioBox,
  IButtonProps,
  Avatar,
  AvatarBadge,
  IHeadingProps,
  Badge,
  Button,
  ButtonGroup,
  IconButton,
  Heading,
  Variants,
  View,
  Text,
  Code,
  TextProps,
  Columns,
  Column,
  Center,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Inline,
  Icon,
  IconProps,
  Input,
  InputBox,
  IInputBoxProps,
  Spinner,
  ISpinnerProps,
  NBImage,
  NBImageProps,
  darkTheme,
  theme,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  Switch,
  Wrap,
  Flex,
  Kbd,
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  CloseButton,
  Divider,
  Link,
  Progress,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  TagCloseButton,
  TextArea,
  INBSwitchProps,
  IFlexProps,
  IWrapProps,
};
