import React from 'react';
import { Button } from '../../src/basicComponents/Button';
import {
  Backdrop,
  BackdropDummyComponent,
} from '../../src/basicComponents/Backdrop';

export default {
  title: 'Components API|Basic Components/Backdrop',
  component: BackdropDummyComponent,
};

export const BackdropPlayground = () => {
  const [show, setShow] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        className="bg-green-400 text-white rounded"
        onClick={() => setShow(true)}
      >
        Show Backdrop
      </Button>
      <Backdrop show={show} onClick={() => setShow(false)}>
        loading...
      </Backdrop>
    </React.Fragment>
  );
};
