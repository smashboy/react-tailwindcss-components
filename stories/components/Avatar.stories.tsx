import React from 'react';
import { Avatar, AvatarDummyComponent } from '../../src/basicComponents/Avatar';

export default {
  title: 'Components API|Basic Components/Avatar',
  component: AvatarDummyComponent,
};

export const AvatarPlayground = () => (
  <Avatar
    className="mr-2"
    src="https://bit.ly/dan-abramov"
    componentSize="md"
    fallback="DA"
    withBadge
  />
);

export const AvatarSize = () => (
  <React.Fragment>
    <Avatar
      className="mr-2"
      src="https://bit.ly/dan-abramov"
      componentSize="xs"
    />
    <Avatar
      className="mr-2"
      src="https://bit.ly/dan-abramov"
      componentSize="sm"
    />
    <Avatar
      className="mr-2"
      src="https://bit.ly/dan-abramov"
      componentSize="md"
    />
    <Avatar
      className="mr-2"
      src="https://bit.ly/dan-abramov"
      componentSize="lg"
    />
    <Avatar
      className="mr-2"
      src="https://bit.ly/dan-abramov"
      componentSize="xl"
    />
  </React.Fragment>
);

export const AvatarBadge = () => (
  <React.Fragment>
    <Avatar className="mr-2" src="https://bit.ly/dan-abramov" withBadge />
    <Avatar
      src="https://bit.ly/dan-abramov"
      withBadge
      classes={{
        root: { custom: 'mr-2' },
        badge: {
          disableDefault: { backgroundColor: true, borderColor: true },
          custom: 'border-dashed border-red-300 bg-red-400',
        },
      }}
    />
  </React.Fragment>
);

export const AvatarFallback = () => (
  <Avatar
    className="mr-2"
    src="https://bit.ly/dan-abramovdsadas"
    fallback="DA"
  />
);

// export const AvatarImageFallback
