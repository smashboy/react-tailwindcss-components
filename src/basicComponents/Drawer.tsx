import * as React from 'react';
import { classnames, TClasses } from 'tailwindcss-classnames';
import { Backdrop } from './Backdrop';
import { TDrawerProps, TEditableClass } from '../types';
import { customClassHandler } from '../utils';

export const Drawer = React.forwardRef<
  HTMLDivElement,
  TDrawerProps & React.ComponentProps<'div'>
>((props, ref) => {
  const {
    classes,
    show,
    position,
    hideBackdrop,
    onBackdropClick,
    className,
    children,
    ...otherProps
  } = props;

  const drawerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.onclick = (e: MouseEvent) => {
      const eventTarget = e.target as HTMLElement;
      const modalCurrent = drawerRef.current;
      const isModalClick =
        eventTarget === modalCurrent || modalCurrent?.contains(eventTarget);
      if (!isModalClick && onBackdropClick && show) onBackdropClick();
    };
  }, [show, onBackdropClick, drawerRef]);

  const ROOT_STYLE: TEditableClass = {
    fixed: !classes?.root?.disableDefault?.position,
    'top-0': !classes?.root?.disableDefault?.top,
    'left-0': !classes?.root?.disableDefault?.left,
    'right-0': !classes?.root?.disableDefault?.right,
    'bottom-0': !classes?.root?.disableDefault?.bottom,
    'z-50': !classes?.root?.disableDefault?.zIndex,
  };

  const DRAWER_STYLE: TEditableClass = {
    absolute: !classes?.drawer?.disableDefault?.position,
    'bg-red-400': !classes?.drawer?.disableDefault?.backgroundColor,
    shadow: !classes?.drawer?.disableDefault?.boxShadow,
    'z-50': !classes?.drawer?.disableDefault?.zIndex,
  };

  const DRAWER_POSITION: TClasses[] =
    (position === 'top' && ['inset-x-0', 'top-0', 'w-full', 'h-auto']) ||
    (position === 'right' && ['inset-y-0', 'right-0', 'h-full', 'w-auto']) ||
    (position === 'left' && ['inset-y-0', 'left-0', 'h-full', 'w-auto']) ||
    (position === 'bottom' && ['inset-x-0', 'bottom-0', 'w-full', 'h-auto']) ||
    [];

  const defaultRootClass = classnames(ROOT_STYLE);
  const customRootClass = classes?.root?.custom;
  const rootClass = `${defaultRootClass} ${customClassHandler(
    customRootClass,
    className
  )}`.trim();

  const defaultDrawerClass = classnames(DRAWER_STYLE, ...DRAWER_POSITION);
  const customDrawerClass = classes?.drawer?.custom;
  const drawerClass = `${defaultDrawerClass} ${customClassHandler(
    customDrawerClass,
    className
  )}`.trim();

  return (
    <React.Fragment>
      {show && (
        <div className={rootClass} ref={ref} {...otherProps}>
          <div className={drawerClass} ref={drawerRef}>
            {children}
          </div>
          <div className={`${classnames({ 'opacity-0': hideBackdrop })}`}>
            <Backdrop show={show} />
          </div>
        </div>
      )}
    </React.Fragment>
  );
});

const defaultProps = {
  show: false,
  position: 'left',
  hideBackdrop: false,
} as Partial<TDrawerProps>;

Drawer.defaultProps = defaultProps;

export const DrawerDummyComponent: React.FunctionComponent<TDrawerProps> = props => {
  const {
    classes,
    show,
    position,
    hideBackdrop,
    onBackdropClick,
    ...otherProps
  } = props;
  return <div {...otherProps} />;
};

DrawerDummyComponent.defaultProps = defaultProps;
