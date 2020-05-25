import * as React from 'react';
import { classnames, TClasses } from 'tailwindcss-classnames';
import { Backdrop } from './Backdrop';
import { TModalProps, TEditableClass } from '../types';

export const Modal = React.forwardRef<
  HTMLDivElement,
  TModalProps & React.ComponentProps<'div'>
>((props, ref) => {
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
  };

  const MODAL_STYLE: TEditableClass = {
    'bg-white': !classes?.modal?.disableDefault?.backgroundColor,
    shadow: !classes?.modal?.disableDefault?.boxShadow,
    'w-full': !classes?.modal?.disableDefault?.width,
  };

  const MODAL_SIZE: TClasses[] =
    (componentSize === 'xs' && ['p-2', 'max-w-full']) ||
    (componentSize === 'sm' && ['p-4', 'max-w-screen-sm']) ||
    (componentSize === 'md' && ['p-6', 'max-w-screen-md']) ||
    (componentSize === 'lg' && ['p-8', 'max-w-screen-lg']) ||
    (componentSize === 'xl' && ['p-10', 'max-w-screen-xl']) ||
    [];

  const rootClass = classnames(ROOT_STYLE);
  const customRootClass = classes?.root?.custom || '';

  const modalClass = classnames(MODAL_STYLE, ...MODAL_SIZE);
  const customModalClass = classes?.modal?.custom || '';

  return (
    <React.Fragment>
      {show ? (
        <div
          ref={ref}
          className={`${rootClass} ${customRootClass} ${className || ''}`}
        >
          <div
            ref={modalRef}
            className={`${modalClass} ${customModalClass}`}
            {...otherProps}
          >
            {children}
          </div>
        </div>
      ) : null}
      <Backdrop show={show} />
    </React.Fragment>
  );
});

const defaultProps = {
  show: false,
  componentSize: 'md',
  hideBackdrop: false,
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

ModalDummyComponent.defaultProps = defaultProps;
