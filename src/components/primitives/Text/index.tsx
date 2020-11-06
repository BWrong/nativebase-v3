import React from 'react';
import styled from 'styled-components/native';
import {
  color,
  position,
  space,
  typography,
  layout,
  flexbox,
  border,
} from 'styled-system';

import {
  customBorder,
  customBackground,
  customOutline,
  customLayout,
  customExtra,
  customShadow,
  customTypography,
} from '../../../utils/customProps';
import type { ITextProps } from './props';
import { Text as NativeText } from 'react-native';

const StyledText = styled(NativeText)<ITextProps>(
  color,
  space,
  position,
  layout,
  flexbox,
  border,
  typography,
  customBorder,
  customBackground,
  customOutline,
  customShadow,
  customExtra,
  customLayout,
  customTypography
);

const Text = ({
  children,
  style,
  isTruncated,
  noOfLines,
  bold,
  italic,
  sub,
  highlight,
  underline,
  strikeThrough,
  ...props
}: ITextProps) => {
  return (
    <StyledText
      numberOfLines={noOfLines ? noOfLines : isTruncated ? 1 : 999}
      fontWeight={bold ? 'bold' : undefined}
      fontStyle={italic ? 'italic' : undefined}
      bg={highlight ? 'yellow.2' : undefined}
      textDecorationLine={
        underline ? 'underline' : strikeThrough ? 'line-through' : undefined
      }
      {...props}
      fontSize={sub ? 10 : props.fontSize}
      style={style}
    >
      {children}
    </StyledText>
  );
};

export default Text;
export type { ITextProps };
