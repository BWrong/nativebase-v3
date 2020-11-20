import React from 'react';
import { Flex, IFlexProps } from '../../primitives';
import type { ISimpleGridProps } from './props';
// const isDebug = process.env.NODE_ENV !== 'production';

const DEBUG_STYLES = false
  ? {
      rows: {
        border: '1px solid black',
      },
      cols: {
        border: '1px solid red',
      },
    }
  : {
      rows: {},
      cols: {},
    };

export function SimpleGrid({
  columns,
  spacing,
  spacingX,
  spacingY,
  minChildWidth,
  children,
}: ISimpleGridProps): JSX.Element {
  let cellSpacing = spacing ?? 0;
  let cellSpacingX = spacingX ?? cellSpacing;
  let cellSpacingY = spacingY ?? cellSpacing;

  const childrenArray = React.Children.toArray(children);
  if (columns) {
    let rowSlices = [];
    for (let i = 0; i < childrenArray.length; i = i + columns) {
      rowSlices.push(childrenArray.slice(i, i + columns));
    }

    return (
      <>
        {rowSlices.map((row, rowIndex) => {
          return (
            <Row wrap="wrap" key={rowIndex} mx={-1 * cellSpacingX}>
              {row.map((col: any) => {
                return (
                  <Col
                    {...DEBUG_STYLES.cols}
                    my={cellSpacingY}
                    mx={cellSpacingX}
                    flex={1}
                    key={col.key}
                  >
                    {col}
                  </Col>
                );
              })}
            </Row>
          );
        })}
      </>
    );
  } else if (minChildWidth) {
    return (
      <Row
        {...DEBUG_STYLES.rows}
        wrap="wrap"
        mx={-1 * cellSpacingX}
        justify="space-between"
      >
        {childrenArray.map((col: any) => {
          return (
            <Col
              {...DEBUG_STYLES.cols}
              mx={cellSpacingX}
              my={cellSpacingY}
              key={col.key}
              width={minChildWidth}
            >
              {col}
            </Col>
          );
        })}
      </Row>
    );
  }

  return <></>;
}

const Col = ({ children, ...props }: IFlexProps) => {
  return (
    <Flex direction="column" {...props}>
      {children}
    </Flex>
  );
};

const Row = ({ children, ...props }: IFlexProps) => {
  return (
    <Flex direction="row" {...props}>
      {children}
    </Flex>
  );
};
