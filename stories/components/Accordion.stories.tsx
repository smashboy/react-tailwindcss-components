import React from 'react';
import { Button } from '../../src/basicComponents/Button';
import {
  AccordionDummyComponent,
  Accordion,
  AccordionItem,
} from '../../src/basicComponents/Accordion';

export default {
  title: 'Components API|Basic Components/Accordion/Accordion',
  component: AccordionDummyComponent,
};

export const AccordionPlayground = () => (
  <Accordion values={['a', 'b', 'c']} defaultValues={['a', 'b']}>
    <AccordionItem
      value="a"
      classes={{ panel: { custom: 'p-4 bg-gray-200' } }}
      headerComponent={({ isExpanded, setExpanded }) => (
        <Button
          className="inline-flex w-full flex-wrap justify-between shadow"
          onClick={() => setExpanded('a')}
        >
          <div>Item 1</div>
          <svg
            className={`transform fill-current h-4 w-4 ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </Button>
      )}
    >
      Sunlight reaches Earth's atmosphere and is scattered in all directions by
      all the gases and particles in the air. Blue light is scattered more than
      the other colors because it travels as shorter, smaller waves. This is why
      we see a blue sky most of the time.
    </AccordionItem>
    <AccordionItem
      value="b"
      disabled
      classes={{ panel: { custom: 'p-4 bg-gray-200' } }}
      headerComponent={({ isExpanded, setExpanded }) => (
        <Button
          className="inline-flex w-full justify-between shadow"
          onClick={() => setExpanded('b')}
        >
          <div>Item 2</div>
          <svg
            className={`transform fill-current h-4 w-4 ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </Button>
      )}
    >
      It's really hot inside Jupiter! No one knows exactly how hot, but
      scientists think it could be about 43,000°F (24,000°C) near Jupiter's
      center, or core.
    </AccordionItem>
    <AccordionItem
      value="c"
      classes={{ panel: { custom: 'p-4 bg-gray-200' } }}
      headerComponent={({ isExpanded, setExpanded }) => (
        <Button
          className="inline-flex w-full justify-between shadow"
          onClick={() => setExpanded('c')}
        >
          <div>Item 3</div>
          <svg
            className={`transform fill-current h-4 w-4 ${
              isExpanded ? 'rotate-180' : 'rotate-0'
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </Button>
      )}
    >
      A black hole is an area of such immense gravity that nothing -- not even
      light -- can escape from it.
    </AccordionItem>
  </Accordion>
);
