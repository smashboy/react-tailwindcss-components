import React from 'react';

const BreadcrumbItem: React.FunctionComponent<React.ComponentProps<
  'li'
>> = props => {
  const { children, className, ...otherProps } = props;
  return (
    <li className={`${className || ''}`} {...otherProps}>
      {children}
    </li>
  );
};

export default BreadcrumbItem;
