import React, { DetailedHTMLProps, LabelHTMLAttributes } from 'react';
import cn from 'classnames';

type Props = DetailedHTMLProps<LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement>;

function FormLabel(props: Props) {
  const { className, ...others } = props;
  const classnames = cn(className, 'inline-block mb-1');

  return <label {...others} className={classnames} />;
}

export default FormLabel;
