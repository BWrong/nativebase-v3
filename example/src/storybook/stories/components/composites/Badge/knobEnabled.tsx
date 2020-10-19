import React from 'react';
import { Badge } from 'native-base';
import { select, text } from '@storybook/addon-knobs';

export default function () {
  return (
    <Badge
      colorScheme={text('colorScheme', 'success')}
      variant={select('variantType', ['outline', 'solid', 'subtle'], 'solid')}
    >
      NATIVEBASE
    </Badge>
  );
}
