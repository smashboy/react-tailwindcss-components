import * as React from 'react';
import { classnames } from 'tailwindcss-classnames';
import {
  TEditableClass,
  TTabsProps,
  TTabProps,
  TTabPanelProps,
} from '../types';
import { validChildren, DISABLED } from '../utils';

export const Tabs = React.forwardRef<
  HTMLDivElement,
  TTabsProps & React.ComponentProps<'div'>
>((props, ref) => {
  const {
    value,
    onTabChange,
    className,
    classes,
    children,
    ...otherProps
  } = props;

  const ROOT_STYLE: TEditableClass = {
    'inline-flex': !classes?.root?.disableDefault?.display,
    'flex-wrap': !classes?.root?.disableDefault?.flexWrap,
  };

  const LIST_STYLE: TEditableClass = {
    flex: !classes?.list?.disableDefault?.display,
    'flex-wrap': !classes?.list?.disableDefault?.flexWrap,
    'flex-row': !classes?.list?.disableDefault?.flexDirection,
  };

  const rootClass = classnames(ROOT_STYLE);
  const customRootClass = classes?.root?.custom || '';

  const listClass = classnames(LIST_STYLE);
  const customListClass = classes?.list?.custom || '';

  const clonedTabs = validChildren(children).map(child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { ...child.props, setTab: onTabChange });
    } else return child;
  });

  return (
    <div
      className={`${rootClass} ${customRootClass} ${className || ''}`}
      ref={ref}
      {...otherProps}
    >
      <ul
        className={`${listClass} ${
          !classes?.list?.disableDefault?.listStyleType ? 'list-none' : ''
        } ${customListClass}`}
      >
        {clonedTabs}
      </ul>
    </div>
  );
});

export const TabsDummyComponent: React.FunctionComponent<TTabsProps> = props => {
  const { value, onTabChange, classes, ...otherProps } = props;
  return <div {...otherProps} />;
};

export const Tab = React.forwardRef<
  HTMLLIElement,
  TTabProps & React.ComponentProps<'li'>
>((props, ref) => {
  const {
    value,
    classes,
    disabled,
    className,
    children,
    setTab,
    ...otherProps
  } = props;

  const ROOT_STYLES: TEditableClass = {
    'flex-auto': !classes?.root?.disableDefault?.flex,
  };

  const rootClass = classnames(ROOT_STYLES, DISABLED(disabled));
  const customRootClass = classes?.root?.custom || '';

  return (
    <li
      className={`${rootClass} ${customRootClass} ${className || ''}`}
      ref={ref}
      onClick={() => (setTab ? setTab(value) : null)}
      {...otherProps}
    >
      {children}
    </li>
  );
});

const tabDefaultProps = { disabled: false } as Partial<TTabProps>;

Tab.defaultProps = tabDefaultProps;

export const TabDummyComponent: React.FunctionComponent<TTabProps> = props => {
  const { value, classes, disabled, ...otherProps } = props;
  return <div {...otherProps} />;
};

TabDummyComponent.defaultProps = tabDefaultProps;

export const TabPanel = React.forwardRef<
  HTMLDivElement,
  TTabPanelProps & React.ComponentProps<'div'>
>((props, ref) => {
  const { value, activeTab, children, ...otherProps } = props;

  return value === activeTab ? (
    <div ref={ref} {...otherProps}>
      {children}
    </div>
  ) : null;
});
