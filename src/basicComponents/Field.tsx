import * as React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { classnames, TClasses } from 'tailwindcss-classnames';
import { TFieldProps, TEditableClass } from '../types';
import { DISABLED, FULL_WIDTH, removeDefault } from '../utils';

export const Field = React.forwardRef<
  HTMLDivElement,
  TFieldProps & React.ComponentProps<'input' | 'select' | 'textarea'>
>((props, ref) => {
  const {
    disabled,
    className,
    fullWidth,
    componentSize,
    component,
    placeholder,
    startElement,
    endElement,
    rowsMin,
    rowsMax,
    resize,
    multipleSelect,
    classes,
    children,
    ...otherProps
  } = props;

  // const [focus, setFocus] = React.useState(false);

  const ROOT_SIZE: TClasses[] =
    (componentSize === 'xs' && ['py-1', 'px-2', 'text-xs']) ||
    (componentSize === 'sm' && ['py-1', 'px-3', 'text-sm']) ||
    (componentSize === 'md' && ['py-2', 'px-4', 'text-base']) ||
    (componentSize === 'lg' && ['py-3', 'px-5', 'text-lg']) ||
    (componentSize === 'xl' && ['py-4', 'px-6', 'text-xl']) ||
    [];

  const ROOT_STYLE: TEditableClass = {
    relative: !classes?.root?.disableDefault?.position,
    'inline-flex': !classes?.root?.disableDefault?.display,
    'font-normal': !classes?.root?.disableDefault?.fontWeight,
    'w-1/4': !!classes?.root?.disableDefault?.width,
  };

  // const CONTAINER_FOCUS = `
  //   ${focus && variant === 'outlined' ? 'border-blue-400' : ''}
  //   ${focus && variant === 'filled' ? 'bg-transparent border-blue-400' : ''}
  // `;

  const TEXTAREA_RESIZE: TClasses =
    (resize === 'none' && 'resize-none') ||
    (resize === 'horizontal' && 'resize-x') ||
    (resize === 'vertical' && 'resize-y') ||
    (resize === 'both' && 'resize') ||
    'resize-none';

  const FIELD_STYLE: TEditableClass = {
    'w-full': !classes?.field?.disableDefault?.width,
    'bg-transparent': !classes?.field?.disableDefault?.backgroundColor,
  };

  const rootClass = classnames(
    ROOT_STYLE,
    ...ROOT_SIZE,
    DISABLED(disabled),
    FULL_WIDTH(fullWidth)
  );
  const customRootClass = classes?.root?.cutsom || '';

  const textareaClass = classnames(TEXTAREA_RESIZE);

  const fieldClass = classnames(FIELD_STYLE);
  const customFieldClass = classes?.field?.custom || '';

  return (
    <div
      ref={ref}
      className={`${rootClass} ${customRootClass} ${className || ''}`}
    >
      {startElement && <div className="mr-4">{startElement}</div>}
      {(component === 'input' && (
        // @ts-ignore
        <input
          className={`${removeDefault} ${fieldClass} ${customFieldClass}`}
          placeholder={placeholder}
          {...otherProps}
        />
      )) ||
        (component === 'select' && (
          // @ts-ignore
          <select
            className={`${removeDefault} ${fieldClass} ${customFieldClass}`}
            multiple={multipleSelect || false}
            {...otherProps}
          >
            {children}
          </select>
        )) ||
        (component === 'textarea' && resize !== 'auto' && (
          // @ts-ignore
          <textarea
            className={`${removeDefault} ${fieldClass} ${customFieldClass} ${textareaClass}`}
            placeholder={placeholder}
            rows={rowsMin}
            {...otherProps}
          />
        )) ||
        (component === 'textarea' && resize === 'auto' && (
          // @ts-ignore
          <TextareaAutosize
            className={`${removeDefault} ${fieldClass} ${customFieldClass} ${textareaClass}`}
            placeholder={placeholder}
            minRows={rowsMin}
            maxRows={rowsMax}
            {...otherProps}
          />
        ))}
      {((component === 'select' && !multipleSelect) || endElement) && (
        <div className="inline-flex justify-center items-center">
          {endElement || (
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          )}
        </div>
      )}
    </div>
  );
});

const defaultProps = {
  disabled: false,
  fullWidth: false,
  resize: 'none',
  multipleSelect: false,
  componentSize: 'md',
  rowsMin: 3,
  component: 'input',
} as Partial<TFieldProps>;

Field.defaultProps = defaultProps;

export const FieldDummyComponent: React.FunctionComponent<TFieldProps> = props => {
  const {
    disabled,
    fullWidth,
    componentSize,
    component,
    startElement,
    endElement,
    rowsMin,
    rowsMax,
    resize,
    multipleSelect,
    classes,
    ...otherProps
  } = props;
  return <div {...otherProps} />;
};

FieldDummyComponent.defaultProps = defaultProps;
