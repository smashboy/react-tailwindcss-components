import React from 'react';
import { Field, FieldDummyComponent } from '../../src/basicComponents/Field';

export default {
  title: 'Components API|Basic Components/Field',
  component: FieldDummyComponent,
};

export const FieldPlayground = () => (
  <React.Fragment>
    <Field
      type="text"
      placeholder="Input Field"
      fullWidth
      classes={{
        root: { cutsom: 'bg-green-400 text-white rounded' },
        field: { custom: 'placeholder-white' },
      }}
    />
    <Field
      fullWidth
      component="select"
      className="bg-green-400 text-white rounded mt-4"
    >
      <option className="text-black" value="">
        Select Field
      </option>
      <option className="text-black" value="Option 1">
        Option 1
      </option>
      <option className="text-black" value="Option 2">
        Option 2
      </option>
      <option className="text-black" value="Option 3">
        Option 3
      </option>
    </Field>
    <Field
      component="textarea"
      placeholder="Textarea Field"
      className="border-green-400 border-2 rounded mt-4"
      fullWidth
    />
  </React.Fragment>
);

export const FieldSize = () => (
  <React.Fragment>
    <Field
      classes={{
        root: { cutsom: 'bg-green-400 text-white rounded ml-2' },
        field: { custom: 'placeholder-white' },
      }}
      type="text"
      placeholder="Extra Small"
      componentSize="xs"
    />
    <Field
      classes={{
        root: { cutsom: 'bg-green-400 text-white rounded ml-2' },
        field: { custom: 'placeholder-white' },
      }}
      type="text"
      placeholder="Small"
      componentSize="sm"
    />
    <Field
      classes={{
        root: { cutsom: 'bg-green-400 text-white rounded ml-2' },
        field: { custom: 'placeholder-white' },
      }}
      type="text"
      placeholder="Medium"
      componentSize="md"
    />
    <Field
      classes={{
        root: { cutsom: 'bg-green-400 text-white rounded ml-2' },
        field: { custom: 'placeholder-white' },
      }}
      type="text"
      placeholder="large"
      componentSize="lg"
    />
    <Field
      classes={{
        root: { cutsom: 'bg-green-400 text-white rounded ml-2' },
        field: { custom: 'placeholder-white' },
      }}
      type="text"
      placeholder="Extra Large"
      componentSize="xl"
    />
  </React.Fragment>
);

export const DisabledField = () => (
  <Field
    type="text"
    placeholder="Disabled"
    fullWidth
    classes={{
      root: { cutsom: 'bg-green-400 text-white rounded' },
      field: { custom: 'placeholder-white' },
    }}
    disabled
  />
);

// export const FieldIcon = () =>

export const MultipleSelect = () => (
  <Field
    className="border-green-400 border-2 rounded"
    fullWidth
    multipleSelect
    component="select"
  >
    <option className="text-black" value="">
      Select Option
    </option>
    <option className="text-black" value="Option 1">
      Option 1
    </option>
    <option className="text-black" value="Option 2">
      Option 2
    </option>
    <option className="text-black" value="Option 3">
      Option 3
    </option>
  </Field>
);

export const TextareaResize = () => (
  <Field
    component="textarea"
    placeholder="Textarea Styled"
    className="border-green-400 border-2 rounded"
    resize="both"
    fullWidth
  />
);

export const TextareaAutoResize = () => (
  <Field
    component="textarea"
    placeholder="Textarea Styled"
    className="border-green-400 border-2 rounded"
    resize="auto"
    rowsMin={5}
    rowsMax={10}
    fullWidth
  />
);
