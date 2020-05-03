import * as React from 'react';
import { TBreadcrumbsProps } from '../types';

const Breadcrumbs: React.FunctionComponent<TBreadcrumbsProps &
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

export default Breadcrumbs;
