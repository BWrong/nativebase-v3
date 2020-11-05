import React from 'react';
import { Box, usePropsConfig } from 'native-base';
import type { IAvatarBadgeProps } from './props';

export const AvatarBadge = (props: IAvatarBadgeProps) => {
  const { boxSize, ...newProps } = usePropsConfig('AvatarBadge', props);
  return (
    <Box
      position="absolute"
      right={0}
      bottom={0}
      {...newProps}
      width={boxSize || 3}
      height={boxSize || 3}
    />
  );
};
