import * as React from 'react';
import { usePopper } from 'react-popper';
import { classnames, TClasses, groupHover } from 'tailwindcss-classnames';
import { TPopoverProps, TEditableClass } from '../types';
import { customClassHandler } from '../utils';

export const Popover: React.FunctionComponent<TPopoverProps &
  React.ComponentProps<'div'>> = props => {
  const {
    children,
    classes,
    componentSize,
    className,
    withArrow,
    label,
    render,
    spacing,
    placement,
    triggerEvent,
    show,
    ...otherProps
  } = props;

  const [showPopover, setShowPopover] = React.useState(show || false);
  const [referenceElement, setReferenceElement] = React.useState(null);
  const [popperElement, setPopperElement] = React.useState(null);
  const [arrowElement, setArrowElement] = React.useState(null);

  const Content = render;

  const ADDITIONAL_POPOVER_SPACING: number =
    ((componentSize === 'lg' || componentSize === 'xl') && 10) || 6;

  // @ts-ignore
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      { name: 'arrow', options: { element: arrowElement } },
      {
        name: 'offset',
        options: {
          offset: [
            0,
            withArrow && spacing
              ? spacing + ADDITIONAL_POPOVER_SPACING
              : spacing,
          ],
        },
      },
    ],
  });

  const ROOT_STYLE: TEditableClass = {
    relative: !classes?.root?.disableDefault?.position,
    'inline-flex': !classes?.root?.disableDefault?.display,
  };

  const LABEL_STYLE: TEditableClass = {
    'w-auto': !classes?.label?.disableDefault?.width,
    'bg-black': !classes?.label?.disableDefault?.backgroundColor,
    'text-white': !classes?.label?.disableDefault?.color,
    'text-center': !classes?.label?.disableDefault?.textAlign,
    absolute: !classes?.label?.disableDefault?.position,
    'z-10': !classes?.label?.disableDefault?.zIndex,
    'whitespace-no-wrap': !classes?.label?.disableDefault?.whiteSpace,
  };

  const LABEL_SIZE: TClasses[] =
    (componentSize === 'xs' && ['p-1', 'text-xs']) ||
    (componentSize === 'sm' && ['p-2', 'text-sm']) ||
    (componentSize === 'md' && ['p-2', 'text-base']) ||
    (componentSize === 'lg' && ['p-3', 'text-lg']) ||
    (componentSize === 'xl' && ['p-4', 'text-xl']) ||
    [];

  const ARROW_STYLE: TEditableClass = {
    'fill-current': !classes?.arrow?.disableDefault?.fill,
    'text-black': !classes?.arrow?.disableDefault?.color,
  };

  const ARROW_ROTATION: TClasses =
    (placement === 'top' && 'rotate-90') ||
    (placement === 'left' && 'rotate-0') ||
    (placement === 'bottom' && '-rotate-90') ||
    (placement === 'right' && 'rotate-180') ||
    'rotate-0';

  const ARROW_SIZE: TClasses[] =
    (componentSize === 'xs' && ['w-1', 'h-1']) ||
    (componentSize === 'sm' && ['w-2', 'h-2']) ||
    (componentSize === 'md' && ['w-3', 'h-3']) ||
    (componentSize === 'lg' && ['w-4', 'h-4']) ||
    (componentSize === 'xl' && ['w-5', 'h-5']) ||
    [];

  const defaultRootClass = classnames(ROOT_STYLE);
  const customRootClass = classes?.root?.custom;
  const rootClass = `${defaultRootClass} ${customClassHandler(
    customRootClass,
    className
  )}`.trim();

  const defaultLabelClass = classnames(
    LABEL_STYLE,
    ...LABEL_SIZE,
    groupHover('visible'),
    {
      ['invisible']: !showPopover,
    }
  );
  const customLableClass = classes?.label?.custom;
  const labelClass = `${defaultLabelClass} ${customClassHandler(
    customLableClass
  )}`.trim();

  const defaultArrowClass = classnames(
    ARROW_STYLE,
    ARROW_ROTATION,
    ...ARROW_SIZE
  );
  const customArrowClass = classes?.arrow?.custom;
  const arrowClass = `${defaultArrowClass} ${customClassHandler(
    customArrowClass
  )}`.trim();

  type TInternalEvent =
    | 'onMouseOver'
    | 'onMouseOut'
    | 'onFocus'
    | 'onBlur'
    | 'onClick';

  const showPopoverHandler = (internalEvent: TInternalEvent) => {
    if (triggerEvent === 'none') return;

    if (triggerEvent === 'hover') {
      if (internalEvent === 'onMouseOver') {
        setShowPopover(true);
      } else if (internalEvent === 'onMouseOut') {
        setShowPopover(false);
      }
    }

    if (triggerEvent === 'focus') {
      if (internalEvent === 'onFocus') {
        setShowPopover(true);
      } else if (internalEvent === 'onBlur') {
        setShowPopover(false);
      }
    }

    if (triggerEvent === 'click' && internalEvent === 'onClick') {
      if (showPopover === true) {
        return setShowPopover(false);
      } else {
        return setShowPopover(true);
      }
    }
  };

  type TArrowPlacement =
    | { top: string }
    | { bottom: string }
    | { right: string }
    | { left: string };

  const arrowPlacementHandler = (): TArrowPlacement => {
    const componentSizeRange =
      ((componentSize === 'xs' ||
        componentSize === 'sm' ||
        componentSize === 'md') &&
        '-9px') ||
      '-13px';

    let finalPlacement: TArrowPlacement = { bottom: componentSizeRange };

    if (componentSize && placement) {
      switch (placement) {
        case 'top':
          finalPlacement = { bottom: componentSizeRange };
          break;
        case 'right':
          finalPlacement = { left: componentSizeRange };
          break;
        case 'bottom':
          finalPlacement = { top: componentSizeRange };
          break;
        case 'left':
          finalPlacement = { right: componentSizeRange };
          break;
        default:
          finalPlacement = { top: componentSizeRange };
          break;
      }
    }

    return finalPlacement;
  };

  return (
    <React.Fragment>
      {/* REFERENCE ELEMENT */}
      <div
        className={rootClass}
        // @ts-ignore
        ref={setReferenceElement}
        onClick={() => showPopoverHandler('onClick')}
        onMouseOver={() => showPopoverHandler('onMouseOver')}
        onMouseOut={() => showPopoverHandler('onMouseOut')}
        onFocus={() => showPopoverHandler('onFocus')}
        onBlur={() => showPopoverHandler('onBlur')}
        {...otherProps}
      >
        {children}
      </div>
      {/* ACTUAL POPOVER */}
      <div
        // @ts-ignore
        ref={setPopperElement}
        style={styles.popper}
        className={labelClass}
        {...attributes.popper}
      >
        {label ||
          (Content ? (
            <Content show={showPopover} setShow={setShowPopover} />
          ) : null)}
        {/* ARROW */}
        {(withArrow && (
          <div
            // @ts-ignore
            ref={setArrowElement}
            style={{ ...styles.arrow, ...arrowPlacementHandler() }}
            data-popper-arrow
          >
            <svg
              className={`transform ${arrowClass}`}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 41.999 41.999"
            >
              <path d="M36.068,20.176l-29-20C6.761-0.035,6.363-0.057,6.035,0.114C5.706,0.287,5.5,0.627,5.5,0.999v40 c0,0.372,0.206,0.713,0.535,0.886c0.146,0.076,0.306,0.114,0.465,0.114c0.199,0,0.397-0.06,0.568-0.177l29-20 c0.271-0.187,0.432-0.494,0.432-0.823S36.338,20.363,36.068,20.176z" />
            </svg>
          </div>
        )) || <React.Fragment />}
      </div>
    </React.Fragment>
  );
};

const defaultProps = {
  withArrow: false,
  placement: 'bottom',
  componentSize: 'md',
  spacing: 5,
  triggerEvent: 'hover',
  show: false,
} as Partial<TPopoverProps>;

Popover.defaultProps = defaultProps;

export const PopoverDummyComponent: React.FunctionComponent<TPopoverProps> = props => {
  const {
    children,
    classes,
    componentSize,
    withArrow,
    render,
    label,
    spacing,
    placement,
    triggerEvent,
    show,
    ...otherProps
  } = props;
  return <div {...otherProps} />;
};

PopoverDummyComponent.defaultProps = defaultProps;
