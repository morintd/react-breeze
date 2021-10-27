import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode, useCallback } from 'react';
import cn from 'classnames';

import { ColorVariants } from '../types/Colors';

import Spinner from './Spinner';

type Props = {
  color?: ColorVariants;
  outline?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function Button(props: Props) {
  const { color, outline, loading, disabled, children, className, onClick, ...others } = props;

  const classnames = cn(className, 'btn', {
    'btn-primary': !color,
    'btn-secondary': color === 'secondary',
    'btn-success': color === 'success',
    'btn-info': color === 'info',
    'btn-warning': color === 'warning',
    'btn-danger': color === 'danger',
    'btn-outline': outline,
    'btn-disabled': disabled,
    'btn-loading': loading,
  });

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (!loading && !disabled) onClick?.(event);
    },
    [loading, disabled, onClick],
  );

  return (
    <button {...others} onClick={handleClick} className={classnames}>
      <div className="relative">
        {loading && <Spinner className="absolute top-0 left-0 right-0 mx-auto" />}
        <div className={cn({ 'opacity-0': loading })}>{children}</div>
      </div>
    </button>
  );
}

export default Button;
