import React from 'react';
import { Text } from '../index';

export const addTextAndPropsToStrings = (children: any, props: any) => {
  const childArray = React.Children.map(children, (child) => {
    if (typeof child === 'string') {
      return <Text {...props}>{child}</Text>;
    } else {
      if (!child) {
        return null;
      }
      return React.cloneElement(child, {
        ...props,
        ...child.props,
      });
    }
  });
  return childArray;
};
