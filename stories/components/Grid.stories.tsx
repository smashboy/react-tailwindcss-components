import React from 'react';
import { Grid, GridDummyComponent } from '../../src/basicComponents/Grid';

export default {
  title: 'Components API|Utility Components/Grid',
  component: GridDummyComponent,
};

export const GridPlayground = () => {
  return (
    <Grid spacing={10}>
      {new Array(4).fill(null).map((_, index) => (
        <Grid lg="w-6/12" md="w-4/12" xs="w-full" key={index} item>
          <div className="flex shadow p-5 h-32 items-center">Grid Item</div>
        </Grid>
      ))}
    </Grid>
  );
};
