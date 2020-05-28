import React from 'react';
import { Button } from '../../src/basicComponents/Button';
import { Drawer, DrawerDummyComponent } from '../../src/basicComponents/Drawer';
import { Divider } from '../../src/basicComponents/Divider';

export default {
  title: 'Components API|Basic Components/Drawer',
  component: DrawerDummyComponent,
};

export const DrawerPlayground = () => {
  const [show, setShow] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        className="bg-green-400 text-white rounded"
        onClick={() => setShow(true)}
      >
        Show Drawer
      </Button>
      <Drawer
        position="bottom"
        onBackdropClick={() => setShow(false)}
        show={show}
      >
        <div className="p-2">
          <ul>
            <li className="py-2 px-8">Item 1</li>
            <li className="py-2 px-8">Item 2</li>
            <li className="py-2 px-8">Item 3</li>
            <li className="py-2 px-8">Item 4</li>
          </ul>
          <Divider />
          <ul>
            <li className="py-2 px-8">Item 1</li>
            <li className="py-2 px-8">Item 2</li>
          </ul>
        </div>
      </Drawer>
    </React.Fragment>
  );
};
