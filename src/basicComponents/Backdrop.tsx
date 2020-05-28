import * as React from 'react';
import { classnames } from 'tailwindcss-classnames';
import { TBackdropProps, TEditableClass } from '../types';

export const Backdrop = React.forwardRef<
  HTMLDivElement,
  TBackdropProps & React.ComponentProps<'div'>
>((props, ref) => {
  const {
    show,
    allowScroll,
    classes,
    className,
    children,
    ...otherProps
  } = props;

  React.useEffect(() => {
    const bodyElement = document.body || window.document.body;
    const bodyClass = bodyElement.classList;
    const overflowClass = classnames('overflow-hidden');
    if (show) {
      if (!allowScroll) bodyClass.add(overflowClass);
    } else {
      if (!allowScroll) bodyClass.remove(overflowClass);
    }
  }, [show, allowScroll]);

  const ROOT_STYLE: TEditableClass = {
    fixed: !classes?.root?.disableDefault?.position,
    flex: !classes?.root?.disableDefault?.display,
    'top-0': !classes?.root?.disableDefault?.top,
    'left-0': !classes?.root?.disableDefault?.left,
    'right-0': !classes?.root?.disableDefault?.right,
    'bottom-0': !classes?.root?.disableDefault?.bottom,
    'bg-black': !classes?.root?.disableDefault?.backgroundColor,
    'opacity-50': !classes?.root?.disableDefault?.opacity,
    'z-40': !classes?.root?.disableDefault?.zIndex,
  };

  const rootClass = classnames(ROOT_STYLE);
  const customRootClass = classes?.root?.custom || '';

  return (
    <React.Fragment>
      {show ? (
        <div
          ref={ref}
          className={`${rootClass} ${customRootClass} ${className || ''}`}
          {...otherProps}
        >
          {children}
        </div>
      ) : null}
    </React.Fragment>
  );
});

const defaultProps = {
  show: false,
  allowScroll: false,
} as Partial<TBackdropProps>;

Backdrop.defaultProps = defaultProps;

export const BackdropDummyComponent: React.FunctionComponent<TBackdropProps> = props => {
  const { show, allowScroll, classes, children, ...otherProps } = props;
  return <div {...otherProps} />;
};

BackdropDummyComponent.defaultProps = defaultProps;
