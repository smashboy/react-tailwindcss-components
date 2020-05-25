import * as React from 'react';
import { TBreadcrumbsProps } from '../types';

export const Breadcrumbs = React.forwardRef<
  HTMLElement,
  TBreadcrumbsProps & React.ComponentProps<'nav'>
>((props, ref) => {
  const { children, className, ...otherProps } = props;

  return (
    <nav ref={ref} className={`${className || ''}`} {...otherProps}>
      <ol>{children}</ol>
    </nav>
  );
});

Breadcrumbs.defaultProps = {
  separator: '/',
} as Partial<TBreadcrumbsProps>;

// const BreadcrumbItem: React.FunctionComponent<React.ComponentProps<
//   'li'
// >> = props => {
//   const { children, className, ...otherProps } = props;
//   return (
//     <li className={`${className || ''}`} {...otherProps}>
//       {children}
//     </li>
//   );
// };
