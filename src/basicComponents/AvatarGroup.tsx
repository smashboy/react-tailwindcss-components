import * as React from 'react';
import { classnames } from 'tailwindcss-classnames';
import { TAvatarGroupProps, TEditableClass } from '../types';
import { validChildren } from '../utils';
import { Avatar } from './Avatar';

export const AvatarGroup: React.FunctionComponent<TAvatarGroupProps &
  React.ComponentProps<'div'>> = props => {
  const {
    componentSize,
    showMax,
    children,
    classes,
    className,
    ...otherProps
  } = props;

  const ROOT_STYLE: TEditableClass = {
    'inline-flex': !classes?.root?.disableDefault?.display,
    'justify-center': !classes?.root?.disableDefault?.justifyContent,
  };

  const rootClass = classnames(ROOT_STYLE);
  const customRootClass = classes?.root?.custom || '';

  const validAvatars = validChildren(children);
  const avatarsCount = validAvatars.length;

  const clones = validChildren(validAvatars).map((child, index) => {
    if (showMax && index > showMax) {
      return null;
    } else if (
      (!showMax || (showMax && index < showMax)) &&
      React.isValidElement(child)
    ) {
      const isFirstChild = index === 0;
      const ClonedAvatar: React.FunctionComponent<TAvatarGroupProps> = props =>
        React.cloneElement(child, { ...child.props, ...props });
      const avatarItemClass = classnames('relative', {
        ['-ml-6']: !isFirstChild,
      });
      return (
        <div
          key={index}
          className={avatarItemClass}
          style={{ zIndex: avatarsCount - index }}
        >
          <ClonedAvatar componentSize={componentSize} />
        </div>
      );
    } else if (showMax && index === showMax) {
      return (
        <Avatar
          key={index}
          className={classnames('relative', '-ml-6')}
          componentSize={componentSize}
          fallback={`+${avatarsCount - showMax}`}
        />
      );
    } else {
      return null;
    }
  });

  return (
    <div
      className={`${rootClass} ${customRootClass} ${className || ''}`}
      {...otherProps}
    >
      {clones}
    </div>
  );
};

const defaultProps = {
  showMax: 5,
  componentSize: 'md',
} as TAvatarGroupProps;

AvatarGroup.defaultProps = defaultProps;

export const AvatarGroupDummyComponent: React.FunctionComponent<TAvatarGroupProps> = props => {
  const { componentSize, showMax, children, classes, ...otherProps } = props;
  return <div {...otherProps} />;
};

AvatarGroupDummyComponent.defaultProps = defaultProps;

export default AvatarGroup;
