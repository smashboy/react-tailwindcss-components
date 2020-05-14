import * as React from 'react';
import { TBreadcrumbsProps } from '../types';

export const Breadcrumbs: React.FunctionComponent<TBreadcrumbsProps &
  React.ComponentProps<'nav'>> = props => {
  const { children, className, ...otherProps } = props;

  return (
    <nav className={`${className || ''}`} {...otherProps}>
      <ol>{children}</ol>
    </nav>
  );
};

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
