import React from 'react';
import { Button } from '../../src/basicComponents/Button';
import { Modal, ModalDummyComponent } from '../../src/basicComponents/Modal';

export default {
  title: 'Components API|Basic Components/Modal',
  component: ModalDummyComponent,
};

export const ModalPlayground = () => {
  const [show, setShow] = React.useState(false);

  return (
    <React.Fragment>
      <Button
        className="bg-green-400 text-white rounded"
        onClick={() => setShow(true)}
      >
        Show Modal
      </Button>
      <Modal
        onBackdropClick={() => setShow(false)}
        show={show}
      >
        <h2>TEST MODAL</h2>
      </Modal>
    </React.Fragment>
  );
};
