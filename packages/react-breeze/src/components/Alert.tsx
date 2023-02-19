import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import { ColorVariants } from '../types';

type Props = {
  color?: ColorVariants;
  visible?: boolean;
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Alert(props: Props) {
  const { color = 'primary', className, visible = true, ...others } = props;
  const classnames = cn(className, `py-1.5 px-3 border rounded bg-${color}-100 text-${color}-800 border-${color}-200`, {
    'opacity-0': !visible,
  });

  return <div {...others} role="alert" className={classnames} />;
}

export default Alert;
