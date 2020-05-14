import * as React from 'react';
import { classnames } from 'tailwindcss-classnames';
import { Backdrop } from './Backdrop';
import { TModalProps, TEditableClass } from '../types';

export const Modal: React.FunctionComponent<TModalProps &
  React.ComponentProps<'div'>> = props => {
  const {
    show,
    componentSize,
    hideBackdrop,
    classes,
    className,
    children,
    onBackdropClick,
    ...otherProps
  } = props;

  const modalRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.onclick = (e: MouseEvent) => {
      const eventTarget = e.target as HTMLElement;
      const modalCurrent = modalRef.current;
      const isModalClick =
        eventTarget === modalCurrent || modalCurrent?.contains(eventTarget);
      if (!isModalClick && onBackdropClick && show) onBackdropClick();
    };
  }, [show, onBackdropClick, modalRef]);

  const ROOT_STYLE: TEditableClass = {
    fixed: !classes?.root?.disableDefault?.position,
    'top-0': !classes?.root?.disableDefault?.top,
    'left-0': !classes?.root?.disableDefault?.left,
    'right-0': !classes?.root?.disableDefault?.right,
    'bottom-0': !classes?.root?.disableDefault?.bottom,
    'z-50': !classes?.root?.disableDefault?.zIndex,
    flex: !classes?.root?.disableDefault?.display,
    'justify-center': !classes?.root?.disableDefault?.justifyContent,
    'items-center': !classes?.root?.disableDefault?.alignItems,
    'overflow-y-auto': !classes?.root?.disableDefault?.overflowY,
    'overflow-x-hidden': !classes?.root?.disableDefault?.overflowX,
  };

  // const MODAL_STYLE: TEditableClass = {};

  const rootClass = classnames(ROOT_STYLE);
  const customRootClass = classes?.root?.custom || '';

  return (
    <React.Fragment>
      {show ? (
        <React.Fragment>
          <div className={`${rootClass} ${customRootClass} ${className || ''}`}>
            <div
              ref={modalRef}
              className="relative h-56 w-56 bg-red-400"
              {...otherProps}
            >
              {children}
            </div>
          </div>
          <Backdrop show={show} />
        </React.Fragment>
      ) : null}
    </React.Fragment>
  );
};

const defaultProps = {
  show: false,
  componentSize: 'md',
  disableBackdrop: false,
  disableBackdropClick: false,
} as Partial<TModalProps>;

Modal.defaultProps = defaultProps;

export const ModalDummyComponent: React.FunctionComponent<TModalProps> = props => {
  const {
    show,
    componentSize,
    hideBackdrop,
    classes,
    onBackdropClick,
    ...otherProps
  } = props;
  return <div {...otherProps} />;
};
