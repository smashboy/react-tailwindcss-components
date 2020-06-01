import * as React from 'react';
import { classnames, TClasses } from 'tailwindcss-classnames';
import { TDividerProps, TEditableClass } from '../types';
import { customClassHandler } from '../utils';

export const Divider = React.forwardRef<
  HTMLHRElement,
  TDividerProps & React.ComponentProps<'hr'>
>((props, ref) => {
  const { orientation, component, classes, className, ...otherProps } = props;

  const ElementType = component || 'hr';

  const ROOT_STYLE: TEditableClass = {
    'border-0': !classes?.root?.disableDefault?.borderWidth,
    'm-0': !classes?.root?.disableDefault?.margin,
    'bg-gray-400': !classes?.root?.disableDefault?.backgroundColor,
  };

  const ORIENTATION_STYLE: TClasses[] =
    orientation === 'horizontal'
      ? ['w-full', 'h-px']
      : ['w-px', 'self-auto', 'h-auto'];

  const defaultRootClass = classnames(ROOT_STYLE, ...ORIENTATION_STYLE);
  const customRootClass = classes?.root?.custom;
  const rootClass = `${defaultRootClass} ${customClassHandler(
    customRootClass,
    className
  )}`.trim();

  return <ElementType className={rootClass} ref={ref} {...otherProps} />;
});

const defaultProps = {
  orientation: 'horizontal',
  component: 'hr',
} as Partial<TDividerProps>;

Divider.defaultProps = defaultProps;

export const DividerDummyComponent: React.FunctionComponent<TDividerProps> = props => {
  const { orientation, component, classes, ...otherProps } = props;
  return <div {...otherProps} />;
};
