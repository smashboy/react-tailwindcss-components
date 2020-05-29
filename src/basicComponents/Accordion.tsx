import * as React from 'react';
import { classnames } from 'tailwindcss-classnames';
import { TAccordionProps, TAccordionItemProps, TEditableClass } from '../types';
import { validChildren, DISABLED } from '../utils';

export const Accordion = React.forwardRef<
  HTMLDivElement,
  TAccordionProps & React.ComponentProps<'div'>
>((props, ref) => {
  const {
    className,
    allowMultiple,
    allowToggle,
    children,
    values,
    classes,
    defaultValues,
    ...otherProps
  } = props;

  const [active, setActive] = React.useState(defaultValues);

  const ROOT_STYLE: TEditableClass = {
    'w-full': !classes?.root?.disableDefault?.width,
  };

  const rootClass = classnames(ROOT_STYLE);
  const customRootClass = classes?.root?.custom || '';

  const expandHandler = (newValue: any) => {
    const activeIncludes = active.includes(newValue);
    if (allowMultiple) {
      setActive(
        activeIncludes
          ? active.filter(a => a !== newValue)
          : active.concat([newValue])
      );
      return;
    }

    if (allowToggle) {
      setActive(activeIncludes ? [] : [newValue]);
      return;
    }

    setActive([newValue]);
  };

  const clonedPanels = validChildren(children).map(child => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        ...child.props,
        expandHandler,
        activeValues: active,
      });
    } else return child;
  });

  return (
    <div
      ref={ref}
      className={`${rootClass} ${customRootClass} ${className || ''}`}
      {...otherProps}
    >
      {clonedPanels}
    </div>
  );
});

const accordionDefaultProps = {
  allowMultiple: false,
  allowToggle: false,
} as Partial<TAccordionProps>;

Accordion.defaultProps = accordionDefaultProps;

export const AccordionDummyComponent: React.FunctionComponent<TAccordionProps> = props => {
  const {
    allowMultiple,
    allowToggle,
    children,
    values,
    classes,
    defaultValues,
    ...otherProps
  } = props;

  return <div {...otherProps} />;
};

AccordionDummyComponent.defaultProps = accordionDefaultProps;

type AccordionItemAdditionalProps = {
  activeValues?: any[];
  expandHandler?: (newValue: any) => void;
};

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  TAccordionItemProps &
    AccordionItemAdditionalProps &
    React.ComponentProps<'div'>
>((props, ref) => {
  const {
    disabled,
    activeValues,
    value,
    headerComponent,
    className,
    classes,
    expandHandler,
    children,
    ...otherProps
  } = props;

  const Header = headerComponent;

  const [expanded, setExpanded] = React.useState(false);

  const HEADER_STYLE: TEditableClass = {
    'inline-flex': !classes?.header?.disableDefault?.display,
    'w-full': !classes?.header?.disableDefault?.width,
    'items-center': !classes?.header?.disableDefault?.alignItems,
  };

  const PANEL_STYLE: TEditableClass = {
    'h-auto': !classes?.panel?.disableDefault?.height,
  };

  const customRootClass = classes?.root?.custom;

  const headerClass = classnames(HEADER_STYLE, DISABLED(disabled));
  const customHeaderClass = classes?.header?.custom || '';

  const panelClass = classnames(PANEL_STYLE);
  const customPanelClass = classes?.panel?.custom || '';

  React.useEffect(() => {
    if (activeValues) {
      const shouldExpand =
        activeValues.filter(activeValue => activeValue === value).length > 0;
      setExpanded(shouldExpand);
    }
  }, [activeValues, value]);

  return (
    <div
      className={`${customRootClass} ${className || ''}`}
      ref={ref}
      {...otherProps}
    >
      {expandHandler && (
        <div className={`${headerClass} ${customHeaderClass}`}>
          <Header isExpanded={expanded} setExpanded={expandHandler} />
        </div>
      )}
      {expanded && (
        <div className={`${panelClass} ${customPanelClass}`}>{children}</div>
      )}
    </div>
  );
});

const accordionItemDefaultProps = { disabled: false } as Partial<
  TAccordionItemProps
>;

AccordionItem.defaultProps = accordionItemDefaultProps;

export const AccordionItemDummyComponent: React.FunctionComponent<TAccordionItemProps> = props => {
  const {
    disabled,
    classes,
    value,
    headerComponent,
    children,
    ...otherProps
  } = props;
  return <div {...otherProps} />;
};

AccordionItemDummyComponent.defaultProps = accordionItemDefaultProps;
