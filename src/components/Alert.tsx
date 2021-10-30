import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import { ColorVariants } from '../types';

type Props = {
  color?: ColorVariants;
  visible?: boolean;
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Alert(props: Props) {
  const { color, className, visible = true, ...others } = props;
  const classnames = cn(className, 'py-1.5 px-3 border rounded', {
    'bg-primary-100 text-primary-800 border-primary-200': !color,
    'bg-secondary-100 text-secondary-800 border-secondary-200': color === 'secondary',
    'bg-success-100 text-success-800 border-success-200': color === 'success',
    'bg-info-100 text-info-800 border-info-200': color === 'info',
    'bg-warning-100 text-warning-800 border-warning-200': color === 'warning',
    'bg-danger-100 text-danger-800 border-danger-200': color === 'danger',
    'opacity-0': !visible,
  });

  return <div {...others} role="alert" className={classnames} />;
}

export default Alert;
