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
  AspectRatio,
  IAspectRatioProps,
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
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  IInputBoxProps,
  NBImage,
  NBImageProps,
  Spinner,
  ISpinnerProps,
  Heading,
  IHeadingProps,
  Flex,
  NBSwitch as Switch,
  ISwitchProps,
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
  IAspectRatioProps,
  AspectRatio,
  Avatar,
  AvatarBadge,
  IHeadingProps,
  Badge,
  IButtonProps,
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
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
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
  ISwitchProps,
  IFlexProps,
  IWrapProps,
};
