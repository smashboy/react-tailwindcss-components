import React from 'react';
import { Field } from '../src';

export default {
  title: 'Field',
};

export const DefaultInput = () => <Field placeholder="Default Field" />;
export const CustomFieldInput = () => (
  <Field
    type="text"
    placeholder="Custom Field"
    classes={{
      root: { cutsom: 'bg-green-400 text-white rounded' },
      field: { custom: 'placeholder-white' },
    }}
  />
);

export const CustomOutlinedInput = () => (
  <Field
    className="border-green-400 border-2 rounded"
    type="text"
    placeholder="Custom Outlined"
  />
);

export const DisabledInput = () => (
  <Field
    type="text"
    placeholder="Disabled"
    classes={{
      root: { cutsom: 'bg-green-400 text-white rounded' },
      field: { custom: 'placeholder-white' },
    }}
    disabled
  />
);

export const DefaultSelect = () => (
  <Field fullWidth component="select">
    <option value="">Default Select</option>
    <option value="Option 1">Option 1</option>
    <option value="Option 2">Option 2</option>
    <option value="Option 3">Option 3</option>
  </Field>
);

export const CustomSelect = () => (
  <Field
    fullWidth
    component="select"
    className="bg-green-400 text-white rounded"
  >
    <option className="text-black" value="">
      Custom Select
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

export const DisabledSelect = () => (
  <Field
    className="bg-green-400 text-white rounded"
    fullWidth
    disabled
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

export const DefaultTextarea = () => (
  <Field component="textarea" placeholder="Default Textarea" />
);

export const StyledTextarea = () => (
  <Field
    component="textarea"
    placeholder="Textarea Styled"
    className="border-green-400 border-2 rounded"
  />
);
