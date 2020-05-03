import * as React from 'react';
import { TGridProps, TEditableClass } from '../types';
import {
  classnames,
  sm as smallSceen,
  md as MediumScreen,
  lg as largeScreen,
  xl as extraLargeScreen,
} from 'tailwindcss-classnames';

const Grid: React.FunctionComponent<TGridProps &
  React.ComponentProps<'div'>> = props => {
  const {
    sm,
    md,
    lg,
    xl,
    item,
    classes,
    className,
    children,
    ...otherProps
  } = props;

  const CONTAINER_STYLE: TEditableClass = {
    flex: !classes?.container?.disableDefault?.display,
  };

  const containerClass = classnames(CONTAINER_STYLE);
  const customContainerClass = classes?.container?.custom || '';

  const itemClass = classnames({
    [smallSceen(sm || 'w-auto')]: true,
  });
  const customItemClass = classes?.item?.custom || '';

  const applyClass = item
    ? `${itemClass} ${customItemClass}`
    : `${containerClass} ${customContainerClass}`;

  return (
    <div className={`${applyClass} ${className || ''}`} {...otherProps}>
      {children}
    </div>
  );
};

Grid.defaultProps = {
  item: false,
} as Partial<TGridProps>;

export default Grid;
