import * as React from 'react';
import { classnames, TClasses } from 'tailwindcss-classnames';
import { TEditableClass, TButtonProps } from '../types';
import { DISABLED, FULL_WIDTH, removeDefault } from '../utils';

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLSpanElement | HTMLLinkElement,
  TButtonProps & React.ComponentProps<'a' | 'button' | 'span'>
>((props, ref) => {
  const {
    children,
    disabled,
    className,
    href,
    componentSize,
    fullWidth,
    component,
    classes,
    startIcon,
    centerIcon,
    endIcon,
    ...otherProps
  } = props;

  const ComponentTag = component;

  const BUTTON_ICON = startIcon || centerIcon || endIcon || null;

  const CHILDREN_WRAPPER =
    (startIcon && (
      <React.Fragment>
        <span className="mr-2">{BUTTON_ICON}</span>
        {children}
      </React.Fragment>
    )) ||
    (centerIcon && (
      <React.Fragment>
        <span className="flex flex-col">
          <span>{BUTTON_ICON}</span>
          <span>{children}</span>
        </span>
      </React.Fragment>
    )) ||
    (endIcon && (
      <React.Fragment>
        {children}
        <span className="ml-2">{BUTTON_ICON}</span>
      </React.Fragment>
    )) ||
    children;

  const ROOT_STYLE: TEditableClass = {
    'inline-flex': !classes?.root?.disableDefault?.display,
    'justify-center': !classes?.root?.disableDefault?.justifyContent,
    'items-center': !classes?.root?.disableDefault?.alignItems,
    'box-border': !classes?.root?.disableDefault?.boxSizing,
    'cursor-pointer': !classes?.root?.disableDefault?.cursor,
    'no-underline': !classes?.root?.disableDefault?.textDecoration,
  };

  const BUTTON_SIZE: TClasses[] =
    (componentSize === 'xs' && ['py-1', 'px-2', 'text-xs']) ||
    (componentSize === 'sm' && ['py-1', 'px-3', 'text-sm']) ||
    (componentSize === 'md' && ['py-2', 'px-4', 'text-base']) ||
    (componentSize === 'lg' && ['py-3', 'px-5', 'text-lg']) ||
    (componentSize === 'xl' && ['py-4', 'px-6', 'text-xl']) ||
    [];

  const rootClass = classnames(
    ROOT_STYLE,
    ...BUTTON_SIZE,
    DISABLED(disabled),
    FULL_WIDTH(fullWidth)
  );
  const customRootClass = classes?.root?.custom || '';

  return (
    // @ts-ignore
    <ComponentTag
      ref={ref}
      className={`${removeDefault} ${rootClass} ${customRootClass} ${className ||
        ''}`}
      href={href && href}
      {...otherProps}
    >
      {CHILDREN_WRAPPER}
    </ComponentTag>
  );
});

Button.defaultProps = {
  disabled: false,
  componentSize: 'md',
  fullWidth: false,
  component: 'button',
} as Partial<TButtonProps>;

export const ButtonDummyComponent: React.FunctionComponent<TButtonProps> = props => {
  const {
    children,
    disabled,
    href,
    componentSize,
    fullWidth,
    component,
    classes,
    startIcon,
    centerIcon,
    endIcon,
    ...otherProps
  } = props;
  return <div {...otherProps} />;
};
