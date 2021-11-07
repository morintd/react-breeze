import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

import FormGroup from './FormGroup';
import FormInput from './FormInput';
import FormLabel from './FormLabel';

type Props = {
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLFormElement>, HTMLFormElement>;

function Form(props: Props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      {...props}
    />
  );
}

Form.Group = FormGroup;
Form.Input = FormInput;
Form.Label = FormLabel;

export default Form;
