import * as React from 'react';
import { classnames, TClasses, TBorderRadius } from 'tailwindcss-classnames';
import { useImageLoaded } from '../utils';
import { TEditableClass, TAvatarProps } from '../types';

export const Avatar: React.FunctionComponent<TAvatarProps &
  React.ComponentProps<'img'>> = props => {
  const {
    variant,
    componentSize,
    classes,
    src,
    alt,
    withBadge,
    className,
    fallback,
    fallbackSrc,
    ...otherProps
  } = props;

  const imageLoaded = useImageLoaded(src);

  const ROOT_STYLE: TEditableClass = {
    relative: !classes?.root?.disableDefault?.position,
    'inline-flex': !classes?.root?.disableDefault?.display,
  };

  const ROOT_SIZE: TClasses[] =
    (componentSize === 'xs' && ['w-12', 'h-12']) ||
    (componentSize === 'sm' && ['w-16', 'h-16']) ||
    (componentSize === 'md' && ['w-20', 'h-20']) ||
    (componentSize === 'lg' && ['w-32', 'h-32']) ||
    (componentSize === 'xl' && ['w-40', 'h-40']) ||
    [];

  const AVATAR_STYLE: TEditableClass = {
    'overflow-hidden': !classes?.avatar?.disableDefault?.overflow,
    'w-full': !classes?.avatar?.disableDefault?.width,
    'h-full': !classes?.avatar?.disableDefault?.height,
  };

  const BORDER_RADIUS: TBorderRadius =
    (variant === 'circle' && 'rounded-full') ||
    (variant === 'rounded' && 'rounded-md') ||
    (variant === 'square' && 'rounded-none') ||
    'rounded-full';

  const IMAGE_STYLE = {
    'w-full': !classes?.image?.disableDefault?.width,
    'h-full': !classes?.image?.disableDefault?.height,
    'object-cover': !classes?.image?.disableDefault?.objectFit,
  };

  const FALLBACK_STYLE: TEditableClass = {
    'w-full': !classes?.fallback?.disableDefault?.width,
    'h-full': !classes?.fallback?.disableDefault?.height,
    'bg-gray-400': !classes?.fallback?.disableDefault?.backgroundColor,
    'text-white': !classes?.fallback?.disableDefault?.color,
    'inline-flex': !classes?.fallback?.disableDefault?.display,
    'justify-center': !classes?.fallback?.disableDefault?.justifyContent,
    'items-center': !classes?.fallback?.disableDefault?.alignItems,
  };

  const FALLBACK_FONT_SIZE: TClasses =
    (componentSize === 'xs' && 'text-xs') ||
    (componentSize === 'sm' && 'text-sm') ||
    (componentSize === 'md' && 'text-base') ||
    (componentSize === 'lg' && 'text-xl') ||
    (componentSize === 'xl' && 'text-3xl') ||
    'text-base';

  const BADGE_STYLE: TEditableClass = {
    'rounded-full': !classes?.badge?.disableDefault?.borderRadius,
    'border-gray-200': !classes?.badge?.disableDefault?.borderColor,
    absolute: !classes?.badge?.disableDefault?.position,
    'z-10': !classes?.badge?.disableDefault?.zIndex,
    'right-0': !classes?.badge?.disableDefault?.right,
    'bottom-0': !classes?.badge?.disableDefault?.bottom,
    'bg-gray-400': !classes?.badge?.disableDefault?.backgroundColor,
    'p-1': !classes?.badge?.disableDefault?.padding,
  };

  const BADGE_SIZE: TClasses[] =
    (componentSize === 'xs' && ['w-4', 'h-4', 'border-2']) ||
    (componentSize === 'sm' && ['w-5', 'h-5', 'border-2']) ||
    (componentSize === 'md' && ['w-6', 'h-6', 'border-2']) ||
    (componentSize === 'lg' && [
      'w-8',
      'h-8',
      '-translate-x-1',
      '-translate-y-1',
      'border-4',
    ]) ||
    (componentSize === 'xl' && [
      'w-10',
      'h-10',
      '-translate-x-1',
      '-translate-y-1',
      'border-4',
    ]) ||
    [];

  const rootClass = classnames(ROOT_STYLE, ...ROOT_SIZE, BORDER_RADIUS);
  const customRootClass = classes?.root?.custom || '';

  const avatarClass = classnames(AVATAR_STYLE, BORDER_RADIUS);
  const customAvatarClass = classes?.avatar?.custom || '';

  const imageClass = classnames(IMAGE_STYLE);
  const customImageClass = classes?.image?.custom || '';

  const fallbackClass = classnames(FALLBACK_STYLE, FALLBACK_FONT_SIZE);
  const customFallbackClass = classes?.fallback?.custom || '';

  const badgeClass = classnames(BADGE_STYLE, ...BADGE_SIZE);
  const customBadgeClass = classes?.badge?.custom || '';

  return (
    <div className={`${rootClass} ${customRootClass} ${className || ''}`}>
      <div className={`${avatarClass} ${customAvatarClass}`}>
        {(imageLoaded && src && (
          <img
            src={src}
            alt={alt}
            className={`${imageClass} ${customImageClass}`}
            {...otherProps}
          />
        )) || (
          <div
            className={`${fallbackClass} ${customFallbackClass}`}
            {...otherProps}
          >
            {(fallbackSrc && (
              <img
                src={fallbackSrc}
                alt={alt}
                className={`${imageClass} ${customImageClass}`}
                {...otherProps}
              />
            )) ||
              fallback ||
              ''}
          </div>
        )}
      </div>
      {(withBadge && (
        <div className={`transform ${badgeClass} ${customBadgeClass}`} />
      )) || <React.Fragment />}
    </div>
  );
};

const defaultProps = {
  componentSize: 'md',
  variant: 'circle',
  withBadge: false,
} as Partial<TAvatarProps>;

Avatar.defaultProps = defaultProps;

export const AvatarDummyComponent: React.FunctionComponent<TAvatarProps> = props => {
  const {
    variant,
    componentSize,
    classes,
    fallback,
    fallbackSrc,
    ...otherProps
  } = props;
  return <div {...otherProps} />;
};

AvatarDummyComponent.defaultProps = defaultProps;
