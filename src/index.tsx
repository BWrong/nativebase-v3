export default {
  multiply(a: number, b: number) {
    return Promise.resolve(a * b);
  },
};

import {
  AppBar,
  Badge,
  IBadgeProps,
  IconButton,
  Variants,
  AlertTitle,
  AlertDescription,
  AlertCloseButton,
  AlertIcon,
  Alert,
  IAlertProps,
  AspectRatio,
  IAspectRatioProps,
  Avatar,
  AvatarBadge,
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  CloseButton,
  Container,
  IContainerProps,
  Divider,
  IDividerProps,
  Kbd,
  Progress,
  Accordion,
  IAccordionProps,
  AccordionItem,
  IAccordionItemProps,
  AccordionButton,
  IAccordionButtonProps,
  AccordionPanel,
  IAccordionPanelProps,
  AccordionIcon,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
  Skeleton,
  ISkeletonProps,
  SkeletonCircle,
  ISkeletonCircleProps,
  SkeletonText,
  ISkeletonTextProps,
  FormControl,
  IFormControlProps,
  FormLabel,
  IFormLabelProps,
  FormErrorMessage,
  IFormErrorMessageProps,
  FormHelperText,
  IFormHelperTextProps,
  IFormControlContext,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatArrow,
  StatGroup,
  Tag,
  TagCloseButton,
  Code,
  Center,
  Square,
  Circle,
  ICenterProps,
  ICircleProps,
  ISquareProps,
  Wrap,
  IWrapProps,
  PinInput,
  IPinInputProps,
  PinInputField,
  IPinInputFieldProps,
  Fade,
  IFadeProps,
  ScaleFade,
  IScaleFadeProps,
  Slide,
  ISlideProps,
  SlideFade,
  ISlideFadeProps,
  NumberInput,
  INumberInputProps,
  NumberInputField,
  INumberInputFieldProps,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  INumberInputContext,
  Collapse,
  CircularProgress,
  CircularProgressLabel,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  AlertDialog,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
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
  Column,
  IColumnProps,
  Row,
  IRowProps,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Inline,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Icon,
  createIcon,
  IIconProps,
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
  TextArea,
  Link,
  ILinkProps,
  Spacer,
  List,
  ListItem,
  ListIcon,
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
  IAlertProps,
  AlertTitle,
  AlertDescription,
  AlertCloseButton,
  AlertIcon,
  IAspectRatioProps,
  AspectRatio,
  Avatar,
  AvatarBadge,
  IHeadingProps,
  Badge,
  IBadgeProps,
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
  Column,
  IColumnProps,
  Row,
  IRowProps,
  Center,
  Square,
  Circle,
  ICenterProps,
  ICircleProps,
  ISquareProps,
  Box,
  IBoxProps,
  Stack,
  VStack,
  HStack,
  ZStack,
  Inline,
  Slider,
  SliderThumb,
  SliderTrack,
  SliderFilledTrack,
  Icon,
  createIcon,
  IIconProps,
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
  Flex,
  Kbd,
  BreadCrumb,
  BreadCrumbItem,
  BreadCrumbLink,
  CloseButton,
  Container,
  IContainerProps,
  Divider,
  IDividerProps,
  Link,
  ILinkProps,
  Progress,
  Accordion,
  IAccordionProps,
  AccordionItem,
  IAccordionItemProps,
  AccordionButton,
  IAccordionButtonProps,
  AccordionPanel,
  IAccordionPanelProps,
  AccordionIcon,
  IAccordionIconProps,
  IAccordionContextProps,
  IAccordionItemContextProps,
  Skeleton,
  ISkeletonProps,
  SkeletonCircle,
  ISkeletonCircleProps,
  SkeletonText,
  ISkeletonTextProps,
  FormControl,
  IFormControlProps,
  FormLabel,
  IFormLabelProps,
  FormErrorMessage,
  IFormErrorMessageProps,
  FormHelperText,
  IFormHelperTextProps,
  IFormControlContext,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  StatArrow,
  StatGroup,
  Tag,
  TagCloseButton,
  TextArea,
  ISwitchProps,
  IFlexProps,
  Wrap,
  IWrapProps,
  PinInput,
  IPinInputProps,
  PinInputField,
  IPinInputFieldProps,
  Fade,
  IFadeProps,
  ScaleFade,
  IScaleFadeProps,
  Slide,
  ISlideProps,
  SlideFade,
  ISlideFadeProps,
  NumberInput,
  INumberInputProps,
  NumberInputField,
  INumberInputFieldProps,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  INumberInputContext,
  Spacer,
  Collapse,
  CircularProgress,
  CircularProgressLabel,
  List,
  ListItem,
  ListIcon,
  TagLabel,
  TagLeftIcon,
  TagRightIcon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Popover,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  AlertDialog,
  AlertDialogContent,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
};
