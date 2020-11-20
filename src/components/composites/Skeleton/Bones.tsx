import React from 'react';
import { Box } from '../../primitives';
import { usePropsConfig } from '../../../theme';
import { Animated } from 'react-native';
import type { ISkeletonProps } from './props';

const Bones = (allProps: ISkeletonProps & { circle?: boolean }) => {
  const { circle, children, ...props } = allProps;
  const newProps = usePropsConfig('Skeleton', props);
  const { style, skeletonColor, baseColor } = newProps;
  const blinkAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const blink = Animated.sequence([
      Animated.timing(blinkAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(blinkAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]);
    Animated.loop(blink).start();
  }, [blinkAnim]);

  const skeletonStyle = {
    skeleton: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      borderRadius: circle ? 999 : 3,
      backgroundColor: skeletonColor,
      opacity: blinkAnim, // Bind opacity to animated value
    },
    base: {
      borderRadius: circle ? 999 : 3,
      backgroundColor: baseColor,
    },
  };

  const AnimationViewSetter = () => {
    if (children) {
      if (children.length) {
        return [<Animated.View style={skeletonStyle.skeleton} />, ...children];
      }
      return [<Animated.View style={skeletonStyle.skeleton} />, children];
    }
    return <Animated.View style={skeletonStyle.skeleton} />;
  };

  return (
    <Box style={[style, skeletonStyle.base]} {...props}>
      {AnimationViewSetter()}
    </Box>
  );
};

export default Bones;
