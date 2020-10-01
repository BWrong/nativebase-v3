import type * as CSS from 'csstype';
import { Config, system } from 'styled-system';

const config: Config = {
  area: {
    property: 'gridArea',
  },
  gridGap: {
    property: 'gridGap',
    scale: 'space',
  },
  gridColumnGap: {
    property: 'gridColumnGap',
    scale: 'space',
  },
  gridRowGap: {
    property: 'gridRowGap',
    scale: 'space',
  },
  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridColumnStart: true,
  gridColumnEnd: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,
  placeItems: true,
};

/**
 * Types for grid related CSS properties
 */
export interface customGridProps {
  area?: CSS.Property.GridArea;
  /**
   * The CSS `grid-gap` property
   */
  gridGap?: CSS.Property.GridGap;
  /**
   * The CSS `grid-column-gap` property
   */
  gridColumnGap?: CSS.Property.GridColumnGap;
  /**
   * The CSS `grid-row-gap` property
   */
  gridRowGap?: CSS.Property.GridRowGap;
  /**
   * The CSS `grid-column` property
   */
  gridColumnStart?: CSS.Property.GridColumnStart;
  /**
   * The CSS `grid-column` property
   */
  gridColumnEnd?: CSS.Property.GridColumnEnd;
  /**
   * The CSS `grid-column` property
   */
  gridColumn?: CSS.Property.GridColumn;
  /**
   * The CSS `grid-row` property
   */
  gridRow?: CSS.Property.GridRow;
  /**
   * The CSS `grid-auto-flow` property
   */
  gridAutoFlow?: CSS.Property.GridAutoFlow;
  /**
   * The CSS `grid-auto-columns` property
   */
  gridAutoColumns?: CSS.Property.GridAutoColumns;
  /**
   * The CSS `grid-auto-rows` property
   */
  gridAutoRows?: CSS.Property.GridAutoRows;
  /**
   * The CSS `grid-template-columns` property
   */
  gridTemplateColumns?: CSS.Property.GridTemplateColumns;

  /**
   * The CSS `grid-template-rows` property
   */
  gridTemplateRows?: CSS.Property.GridTemplateRows;
  /**
   * The CSS `grid-template-areas` property
   */
  gridTemplateAreas?: CSS.Property.GridTemplateAreas;
  /**
   * The CSS `grid-areas` property
   */
  gridArea?: CSS.Property.GridArea;
  /**
   * The CSS `place-items` property
   */
  placeItems?: CSS.Property.PlaceItems;
}

export const customGrid = system(config);
