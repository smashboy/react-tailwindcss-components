import { TClasses } from 'tailwindcss-classnames';

// GENERAL TYPES
export type TEditableClass = { [k in TClasses]?: boolean | undefined };
export type TComponentSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';

export type TButtonProps = {
  disabled?: boolean;
  href?: string;
  fullWidth?: boolean;
  componentSize?: TComponentSize;
  component?: 'a' | 'button' | 'span';
  startIcon?: React.FunctionComponent;
  centerIcon?: React.FunctionComponent;
  endIcon?: React.FunctionComponent;
  classes?: {
    root?: {
      disableDefault?: {
        display?: boolean;
        justifyContent?: boolean;
        alignItems?: boolean;
        boxSizing?: boolean;
        cursor?: boolean;
        textDecoration?: boolean;
      };
      custom?: string;
    };
  };
};

export type TAvatarVariant = 'square' | 'rounded' | 'circle';
export type TAvatarProps = {
  componentSize?: TComponentSize;
  variant?: TAvatarVariant;
  withBadge?: boolean;
  fallback?: string;
  fallbackSrc?: string;
  classes?: {
    root?: {
      disableDefault?: {
        position?: boolean;
        display?: boolean;
      };
      custom?: string;
    };
    avatar?: {
      disableDefault?: {
        overflow?: boolean;
        width?: boolean;
        height?: boolean;
      };
      custom?: string;
    };
    fallback?: {
      disableDefault?: {
        width?: boolean;
        height?: boolean;
        backgroundColor?: boolean;
        color?: boolean;
        display?: boolean;
        justifyContent?: boolean;
        alignItems?: boolean;
      };
      custom?: string;
    };
    image?: {
      disableDefault?: {
        width?: boolean;
        height?: boolean;
        objectFit?: boolean;
      };
      custom?: string;
    };
    badge?: {
      disableDefault?: {
        borderRadius?: boolean;
        borderColor?: boolean;
        position?: boolean;
        zIndex?: boolean;
        right?: boolean;
        bottom?: boolean;
        backgroundColor?: boolean;
        padding?: boolean;
      };
      custom?: string;
    };
  };
};

export type TAvatarGroupProps = {
  componentSize?: TComponentSize;
  showMax?: number;
  classes?: {
    root?: {
      disableDefault?: {
        display?: boolean;
        justifyContent?: boolean;
      };
      custom?: string;
    };
  };
};

export type TFieldProps = {
  disabled?: boolean;
  componentSize?: TComponentSize;
  fullWidth?: boolean;
  startElement?: React.FunctionComponent;
  endElement?: React.FunctionComponent;
  component?: 'input' | 'select' | 'textarea';
  resize?: 'none' | 'vertical' | 'horizontal' | 'both' | 'auto';
  rowsMax?: number;
  rowsMin?: number;
  multipleSelect?: boolean;
  classes?: {
    root?: {
      disableDefault?: {
        fontWeight?: boolean;
        position?: boolean;
        display?: boolean;
        width?: boolean;
      };
      cutsom?: string;
    };
    field?: {
      disableDefault?: {
        width?: boolean;
        backgroundColor?: boolean;
      };
      custom?: string;
    };
  };
};

export type TPopoverProps = {
  label?: string;
  render?: React.FunctionComponent<{
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
  }>;
  withArrow?: boolean;
  spacing?: number;
  placement?: 'top' | 'bottom' | 'right' | 'left';
  componentSize?: TComponentSize;
  triggerEvent?: 'focus' | 'hover' | 'click' | 'none';
  show?: boolean;
  classes?: {
    root?: {
      disableDefault?: {
        position?: boolean;
        display?: boolean;
      };
      custom?: string;
    };
    label?: {
      disableDefault?: {
        width?: boolean;
        backgroundColor?: boolean;
        color?: boolean;
        textAlign?: boolean;
        position?: boolean;
        zIndex?: boolean;
        whiteSpace?: boolean;
      };
      custom?: string;
    };
    arrow?: {
      disableDefault?: {
        color?: boolean;
        fill?: boolean;
      };
      custom?: string;
    };
  };
};

export type TBreadcrumbsProps = {
  separator?: string;
};

export type TGridItemSize =
  | 'w-1/12'
  | 'w-2/12'
  | 'w-3/12'
  | 'w-4/12'
  | 'w-5/12'
  | 'w-6/12'
  | 'w-7/12'
  | 'w-8/12'
  | 'w-9/12'
  | 'w-10/12'
  | 'w-11/12'
  | 'w-full'
  | 'w-auto';

export type TGridProps = {
  item?: boolean;
  spacing?: number;
  xs?: TGridItemSize;
  sm?: TGridItemSize;
  md?: TGridItemSize;
  lg?: TGridItemSize;
  xl?: TGridItemSize;
  classes?: {
    container?: {
      disableDefault?: {
        display?: boolean;
        width?: boolean;
        justifyContent?: boolean;
        alignItems?: boolean;
        flexWrap?: boolean;
        flexDirection?: boolean;
      };
      custom?: string;
    };
    item?: {
      disableDefault?: {
        display?: boolean;
      };
      custom?: string;
    };
  };
};

export type TBackdropProps = {
  show?: boolean;
  allowScroll?: boolean;
  classes?: {
    root?: {
      disableDefault?: {
        position?: boolean;
        display?: boolean;
        top?: boolean;
        left?: boolean;
        right?: boolean;
        bottom?: boolean;
        backgroundColor?: boolean;
        opacity?: boolean;
        zIndex?: boolean;
      };
      custom?: string;
    };
  };
};

export type TModalProps = {
  show?: boolean;
  componentSize?: TComponentSize;
  hideBackdrop?: boolean;
  onBackdropClick?: () => void;
  classes?: {
    root?: {
      disableDefault?: {
        position?: boolean;
        top?: boolean;
        left?: boolean;
        right?: boolean;
        bottom?: boolean;
        zIndex?: boolean;
        display?: boolean;
        justifyContent?: boolean;
        alignItems?: boolean;
      };
      custom?: string;
    };
    modal?: {
      disableDefault?: {
        backgroundColor?: boolean;
        boxShadow?: boolean;
        width?: boolean;
      };
      custom?: string;
    };
  };
};

export type TDividerProps = {
  orientation?: 'vertical' | 'horizontal';
  component?: React.ElementType;
  classes?: {
    root?: {
      disableDefault?: {
        borderWidth?: boolean;
        margin?: boolean;
        backgroundColor?: boolean;
      };
      custom?: string;
    };
  };
};
