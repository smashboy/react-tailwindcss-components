import React from 'react';
import { Avatar } from '../../src/basicComponents/Avatar';
import {
  AvatarGroup,
  AvatarGroupDummyComponent,
} from '../../src/basicComponents/AvatarGroup';

export default {
  title: 'Components API|Basic Components/Avatar Group',
  component: AvatarGroupDummyComponent,
};

export const AvatarGroupPlayground = () => (
  <AvatarGroup>
    <Avatar
      className="border-4 border-white"
      src="https://bit.ly/dan-abramovdsadas"
      fallback="DA"
    />
    <Avatar
      className="border-4 border-white"
      src="https://bit.ly/dan-abramov"
      fallback="DA"
    />
    <Avatar
      className="border-4 border-white"
      src="https://bit.ly/dan-abramov"
      fallback="DA"
    />
    <Avatar
      className="border-4 border-white"
      src="https://bit.ly/dan-abramov"
      fallback="DA"
    />
    <Avatar
      className="border-4 border-white"
      src="https://bit.ly/dan-abramov"
      fallback="DA"
    />
  </AvatarGroup>
);

export const AvatarGroupShowLimit = () => (
  <AvatarGroup showMax={3}>
    <Avatar
      className="border-4 border-white"
      src="https://bit.ly/dan-abramovdsadas"
      fallback="DA"
    />
    <Avatar
      className="border-4 border-white"
      src="https://bit.ly/dan-abramov"
      fallback="DA"
    />
    <Avatar
      className="border-4 border-white"
      src="https://bit.ly/dan-abramov"
      fallback="DA"
    />
    <Avatar
      className="border-4 border-white"
      src="https://bit.ly/dan-abramov"
      fallback="DA"
    />
    <Avatar
      className="border-4 border-white"
      src="https://bit.ly/dan-abramov"
      fallback="DA"
    />
  </AvatarGroup>
);

export const AvatarGroupSize = () => (
  <React.Fragment>
    <AvatarGroup componentSize="xs">
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramovdsadas"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
    </AvatarGroup>
    <AvatarGroup componentSize="sm">
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramovdsadas"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
    </AvatarGroup>
    <AvatarGroup componentSize="md">
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramovdsadas"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
      <Avatar
        className="border-4 border-white"
        src="https://bit.ly/dan-abramov"
        fallback="DA"
      />
    </AvatarGroup>
  </React.Fragment>
);
