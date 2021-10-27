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

  const classnames = cn(className, 'py-1.5 px-3 rounded border-2', {
    // Primary
    'bg-primary text-light border-primary': !color && !outline,
    'hover:bg-primary-600 active:bg-primary-700': !color && !loading && !disabled && !outline,
    'bg-light font-bold text-primary border-primary': !color && outline,
    // Secondary
    'bg-secondary text-light border-secondary': color === 'secondary' && !outline,
    'hover:bg-secondary-600 active:bg-secondary-700': color === 'secondary' && !loading && !disabled && !outline,
    'bg-light font-bold text-secondary border-secondary': color === 'secondary' && outline,
    // Success
    'bg-success text-light border-success': color === 'success' && !outline,
    'hover:bg-success-600 active:bg-success-700': color === 'success' && !loading && !disabled && !outline,
    'bg-light font-bold text-success border-success': color === 'success' && outline,
    // Info
    'bg-info text-light border-info': color === 'info' && !outline,
    'hover:bg-info-600 active:bg-info-700': color === 'info' && !loading && !disabled && !outline,
    'bg-light font-bold text-info border-info': color === 'info' && outline,
    // Warning
    'bg-warning text-light border-warning': color === 'warning' && !outline,
    'hover:bg-warning-600 active:bg-warning-700': color === 'warning' && !loading && !disabled && !outline,
    'bg-light font-bold text-warning border-warning': color === 'warning' && outline,
    // Danger
    'bg-danger text-light border-danger': color === 'danger' && !outline,
    'hover:bg-danger-600 active:bg-danger-700': color === 'danger' && !loading && !disabled && !outline,
    'bg-light font-bold text-danger border-danger': color === 'danger' && outline,
    // General
    'hover:bg-light-600 active:bg-light-700': outline && !disabled && !loading,
    'opacity-40 cursor-default': disabled,
    'cursor-default': loading,
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
