import React, { ReactElement, ReactNode } from 'react';

import FormInput from './FormInput';
import FormLabel from './FormLabel';

type Props = {
  children: ReactNode;
  id: string;
};

function FormGroup(props: Props) {
  const { children, id } = props;

  return (
    <>
      {React.Children.map(children, (child) => {
        if ((child as ReactElement).type) {
          const element = child as ReactElement;

          if (element.type === FormInput) {
            return React.cloneElement(element, { id });
          }

          if (element.type === FormLabel) {
            return React.cloneElement(element, { htmlFor: id });
          }
        }

        return child;
      })}
    </>
  );
}

export default FormGroup;
