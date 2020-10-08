import Box, { IBoxProps } from './Box';
import Text, { TextProps } from './Text';
import Input from './Input';
import View from './View';
// HACK: added `IBoxProps as` IconProps doesn't exist in ./Icon
import styledIcon, { IBoxProps as IconProps } from './Icon';
import Columns from './Columns';
import Column from './Column';
import Stack from './Stack';
import VStack from './VStack';
import HStack from './HStack';
import ZStack from './ZStack';
import Inline from './Inline';
import NBImage, { NBImageProps } from './Image';
import Spinner, { ISpinnerProps } from './Spinner';
import Heading, { IHeadingProps } from './Heading';
export {
  View,
  Text,
  TextProps,
  Columns,
  Column,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Inline,
  styledIcon as Icon,
  IconProps,
  Input,
  NBImage,
  NBImageProps,
  Spinner,
  ISpinnerProps,
  Heading,
  IHeadingProps,
};
