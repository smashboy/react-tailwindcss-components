import React from 'react';
import { Button } from '../../src/basicComponents/Button';
import {
  Popover,
  PopoverDummyComponent,
} from '../../src/basicComponents/Popover';
import { Avatar } from '../../src/basicComponents/Avatar';

export default {
  title: 'Components API|Basic Components/Popover',
  component: PopoverDummyComponent,
};

export const PopoverPlayground = () => (
  <Popover label="popover" placement="right" withArrow>
    <Button className="bg-green-400 text-white rounded">Hover Me</Button>
  </Popover>
);

export const PopoverPlacement = () => (
  <React.Fragment>
    <Popover label="top" placement="top" withArrow>
      <Button className="bg-green-400 text-white rounded">Top</Button>
    </Popover>
    <Popover label="right" placement="right" className="ml-2" withArrow>
      <Button className="bg-green-400 text-white rounded">Right</Button>
    </Popover>
    <Popover label="bottom" placement="bottom" className="ml-2" withArrow>
      <Button className="bg-green-400 text-white rounded">Bottom</Button>
    </Popover>
    <Popover label="left" placement="left" className="ml-2" withArrow>
      <Button className="bg-green-400 text-white rounded">Left</Button>
    </Popover>
  </React.Fragment>
);

export const PopoverTriggerEvent = () => (
  <React.Fragment>
    <Popover label="Hover Event">
      <Button className="bg-green-400 text-white rounded">Hover</Button>
    </Popover>
    <Popover label="Focus Event" className="ml-2" triggerEvent="focus">
      <Button className="bg-green-400 text-white rounded">Focus</Button>
    </Popover>
    <Popover label="Click Event" className="ml-2" triggerEvent="click">
      <Button className="bg-green-400 text-white rounded">Click</Button>
    </Popover>
    <Popover label="none" className="ml-2" triggerEvent="none">
      <Button className="bg-green-400 text-white rounded">None</Button>
    </Popover>
  </React.Fragment>
);

export const PopoverSize = () => (
  <React.Fragment>
    <Popover label="Extra small" componentSize="xs">
      <Button className="bg-green-400 text-white rounded">XS</Button>
    </Popover>
    <Popover label="Small" className="ml-2" componentSize="sm">
      <Button className="bg-green-400 text-white rounded">SM</Button>
    </Popover>
    <Popover label="Medium" className="ml-2" componentSize="md">
      <Button className="bg-green-400 text-white rounded">MD</Button>
    </Popover>
    <Popover label="Large" className="ml-2" componentSize="lg">
      <Button className="bg-green-400 text-white rounded">LG</Button>
    </Popover>
    <Popover label="Extra Large" className="ml-2" componentSize="xl">
      <Button className="bg-green-400 text-white rounded">XL</Button>
    </Popover>
  </React.Fragment>
);

export const StyledPopover = () => (
  <Popover
    label="tooltip boiz"
    className="m-4"
    withArrow
    classes={{
      label: {
        disableDefault: { backgroundColor: true },
        custom: 'rounded bg-red-400',
      },
      arrow: {
        disableDefault: { color: true },
        custom: 'text-red-400',
      },
    }}
  >
    <Button className="bg-green-400 text-white rounded">Bottom</Button>
  </Popover>
);

export const ComplexPopover = () => (
  <Popover
    className="m-4"
    triggerEvent="click"
    classes={{
      label: {
        disableDefault: { backgroundColor: true },
        custom: 'rounded bg-gray-400',
      },
    }}
    render={({ setShow }) => (
      <div className="p-4 flex flex-wrap justify-center">
        <Avatar
          src="https://bit.ly/dan-abramov"
          className="mb-2"
          componentSize="sm"
        />
        <Button
          onClick={() => setShow(false)}
          className="bg-red-400 rounded"
          fullWidth
        >
          Delete
        </Button>
      </div>
    )}
  >
    <Button className="bg-green-400 text-white rounded">Complex</Button>
  </Popover>
);
