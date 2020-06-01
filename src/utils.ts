import * as React from 'react';
import { TEditableClass } from './types';
import { classnames, focus } from 'tailwindcss-classnames';

export type MergeElementProps<
  T extends React.ElementType,
  P extends object = {}
> = Omit<React.ComponentPropsWithRef<T>, keyof P> & P;

export const DISABLED = (disabled: boolean | undefined): TEditableClass => ({
  'cursor-not-allowed': disabled,
  'opacity-50': disabled,
  'pointer-events-none': disabled,
});

export const FULL_WIDTH = (fullWidth: boolean | undefined): TEditableClass => ({
  'w-full': fullWidth,
});

export const removeDefault = classnames(
  focus('outline-none'),
  'appearance-none'
);

export const useImageLoaded = (src: string | undefined) => {
  const isMounted = React.useRef(true);
  const [isLoaded, setIsLoaded] = React.useState(false);

  React.useEffect(() => {
    if (!src) return;

    const image = new Image();
    image.src = src;

    image.onload = () => {
      if (isMounted.current) {
        setIsLoaded(true);
      }
    };

    image.onerror = () => {
      if (isMounted.current) {
        setIsLoaded(false);
      }
    };
  }, [src]);

  React.useEffect(() => {
    return () => {
      isMounted.current = false;
    };
  }, []);

  return isLoaded;
};

export const validChildren = (children: React.ReactNode) =>
  React.Children.toArray(children).filter(child => React.isValidElement(child));

export const customClassHandler = (
  customRootClass?: string,
  className?: string
) => `${customRootClass || className || ''}`.trim();
