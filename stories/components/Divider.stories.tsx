import React from 'react';
import {
  Divider,
  DividerDummyComponent,
} from '../../src/basicComponents/Divider';
import { Button } from '../../src/basicComponents/Button'

export default {
  title: 'Components API|Basic Components/Divider',
  component: DividerDummyComponent,
};

export const DividerPlayground = () => (
  <ul className="w-1/4 bg-gray-200">
    <li className="p-2">Item 1</li>
    <Divider component="li" />
    <li className="p-2">Item 2</li>
    <Divider component="li" />
    <li className="p-2">Item 3</li>
    <Divider component="li" />
    <li className="p-2">Item 4</li>
  </ul>
);

export const VerticalDivider = () => <div className="flex flex-wrap">
  <Button>Save</Button>
  <Button>Cancel</Button>
  <Divider orientation="vertical" />
  <Button>Edit</Button>
</div>;
