import * as React from 'react';
import {
  classnames,
  sm as smallSceen,
  md as mediumScreen,
  lg as largeScreen,
  xl as extraLargeScreen,
} from 'tailwindcss-classnames';
import { TGridProps, TEditableClass } from '../types';
import { validChildren } from '../utils';

export const Grid = React.forwardRef<
  HTMLDivElement,
  TGridProps & React.ComponentProps<'div'>
>((props, ref) => {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    item,
    spacing,
    classes,
    className,
    children,
    style,
    ...otherProps
  } = props;

  const CONTAINER_STYLE: TEditableClass = {
    flex: !classes?.container?.disableDefault?.display,
    'w-full': !classes?.container?.disableDefault?.width,
    'justify-start': !classes?.container?.disableDefault?.justifyContent,
    'items-center': !classes?.container?.disableDefault?.alignItems,
    'flex-wrap': !classes?.container?.disableDefault?.flexWrap,
    'flex-row': !classes?.container?.disableDefault?.flexDirection,
  };

  const ITEM_MEDIA = [
    xs || 'w-auto',
    smallSceen(sm || 'w-auto'),
    mediumScreen(md || 'w-auto'),
    largeScreen(lg || 'w-auto'),
    extraLargeScreen(xl || 'w-auto'),
  ];

  const containerClass = classnames(CONTAINER_STYLE);
  const customContainerClass = classes?.container?.custom || '';

  const itemClass = classnames(...ITEM_MEDIA);
  const customItemClass = classes?.item?.custom || '';

  const applyClass = item
    ? `${itemClass} ${customItemClass}`
    : `${containerClass} ${customContainerClass}`;

  const containerSpacing = spacing ? { margin: `-${spacing}px` } : {};

  const ClonedItems = () => (
    <React.Fragment>
      {validChildren(children).map((child, index) => {
        if (!React.isValidElement(child)) return null;
        const ClonedItem: React.FunctionComponent<TGridProps &
          React.ComponentProps<'div'>> = props =>
          React.cloneElement(child, { ...child.props, ...props });
        const itemSpacing = spacing ? { padding: `${spacing}px` } : {};
        return <ClonedItem key={index} style={{ ...itemSpacing }} />;
      })}
    </React.Fragment>
  );

  return (
    <div
      ref={ref}
      className={`${applyClass} ${className || ''}`}
      style={{ ...style, ...containerSpacing }}
      {...otherProps}
    >
      {!item ? <ClonedItems /> : children}
    </div>
  );
});

const defaultProps = {
  item: false,
  spacing: 0,
  xs: 'w-auto',
  sm: 'w-auto',
  md: 'w-auto',
  lg: 'w-auto',
  xl: 'w-auto',
} as Partial<TGridProps>;

Grid.defaultProps = defaultProps;

export const GridDummyComponent: React.FunctionComponent<TGridProps> = props => {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    item,
    classes,
    spacing,
    children,
    ...otherProps
  } = props;
  return <div {...otherProps} />;
};

GridDummyComponent.defaultProps = defaultProps;
