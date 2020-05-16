import React from 'react';
import { Button } from '../../src/basicComponents/Button';
import {
  Popover,
  PopoverDummyComponent,
} from '../../src/basicComponents/Popover';

export default {
  title: 'Components API|Basic Components/Popover',
  component: PopoverDummyComponent,
};

export const TooltipPlayground = () => (
  <Popover label="tooltip" placement="right" withArrow>
    <Button className="bg-green-400 text-white rounded">Hover Me</Button>
  </Popover>
);

export const TooltipPlacement = () => (
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

export const TooltipTriggerEvent = () => (
  <React.Fragment>
    <Popover label="Hover Event">
      <Button className="bg-green-400 text-white rounded">Hover</Button>
    </Popover>
    <Popover label="Focus Event" className="ml-2" triggerEvent="focus">
      <Button className="bg-green-400 text-white rounded">Focus</Button>
    </Popover>
    <Popover label="none" className="ml-2" triggerEvent="none">
      <Button className="bg-green-400 text-white rounded">None</Button>
    </Popover>
  </React.Fragment>
);

export const TooltipSize = () => (
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

export const StyledTooltip = () => (
  <Popover
    label="tooltip boiz"
    placement="bottom"
    className="mr-2"
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
