import React from 'react';
import { Button } from '../../src/basicComponents/Button';
import {
  Tooltip,
  TooltipDummyComponent,
} from '../../src/basicComponents/Tooltip';

export default {
  title: 'Components API|Basic Components/Tooltip',
  component: TooltipDummyComponent,
};

export const TooltipPlayground = () => (
  <Tooltip label="tooltip" placement="right" withArrow>
    <Button className="bg-green-400 text-white rounded">Hover Me</Button>
  </Tooltip>
);

export const TooltipPlacement = () => (
  <React.Fragment>
    <Tooltip label="top" placement="top" withArrow>
      <Button className="bg-green-400 text-white rounded">Top</Button>
    </Tooltip>
    <Tooltip label="right" placement="right" className="ml-2" withArrow>
      <Button className="bg-green-400 text-white rounded">Right</Button>
    </Tooltip>
    <Tooltip label="bottom" placement="bottom" className="ml-2" withArrow>
      <Button className="bg-green-400 text-white rounded">Bottom</Button>
    </Tooltip>
    <Tooltip label="left" placement="left" className="ml-2" withArrow>
      <Button className="bg-green-400 text-white rounded">Left</Button>
    </Tooltip>
  </React.Fragment>
);

export const TooltipTriggerEvent = () => (
  <React.Fragment>
    <Tooltip label="Hover Event">
      <Button className="bg-green-400 text-white rounded">Hover</Button>
    </Tooltip>
    <Tooltip label="Focus Event" className="ml-2" triggerEvent="focus">
      <Button className="bg-green-400 text-white rounded">Focus</Button>
    </Tooltip>
    <Tooltip label="none" className="ml-2" triggerEvent="none">
      <Button className="bg-green-400 text-white rounded">None</Button>
    </Tooltip>
  </React.Fragment>
);

export const TooltipSize = () => (
  <React.Fragment>
    <Tooltip label="Extra small" componentSize="xs">
      <Button className="bg-green-400 text-white rounded">XS</Button>
    </Tooltip>
    <Tooltip label="Small" className="ml-2" componentSize="sm">
      <Button className="bg-green-400 text-white rounded">SM</Button>
    </Tooltip>
    <Tooltip label="Medium" className="ml-2" componentSize="md">
      <Button className="bg-green-400 text-white rounded">MD</Button>
    </Tooltip>
    <Tooltip label="Large" className="ml-2" componentSize="lg">
      <Button className="bg-green-400 text-white rounded">LG</Button>
    </Tooltip>
    <Tooltip label="Extra Large" className="ml-2" componentSize="xl">
      <Button className="bg-green-400 text-white rounded">XL</Button>
    </Tooltip>
  </React.Fragment>
);

export const StyledTooltip = () => (
  <Tooltip
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
  </Tooltip>
);
