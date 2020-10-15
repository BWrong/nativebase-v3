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
  Progress,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  TagCloseButton,
  Code,
  Center,
  Square,
  Circle,
} from './components/composites';

import {
  View,
  Text,
  TextProps,
  Checkbox,
  ICheckboxProps,
  CheckboxGroup,
  ICheckboxGroupProps,
  Radio,
  IRadioProps,
  RadioGroup,
  IRadioGroupProps,
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
  Slider,
  Icon,
  IconProps,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  IInputBoxProps,
  Image,
  IImageProps,
  Spinner,
  ISpinnerProps,
  Heading,
  IHeadingProps,
  Flex,
  Switch,
  ISwitchProps,
  IFlexProps,
  IWrapProps,
  TextArea,
  Wrap,
  Link,
  ILinkProps,
  Spacer,
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
  Checkbox,
  ICheckboxProps,
  CheckboxGroup,
  ICheckboxGroupProps,
  Radio,
  IRadioProps,
  RadioGroup,
  IRadioGroupProps,
  Columns,
  Column,
  Center,
  Square,
  Circle,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Inline,
  Slider,
  Icon,
  IconProps,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  IInputBoxProps,
  Spinner,
  ISpinnerProps,
  Image,
  IImageProps,
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
  ILinkProps,
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
  Spacer,
};
