import React, { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode, useCallback } from 'react';
import cn from 'classnames';

import { ColorVariants } from '../types';

import Spinner from './Spinner';

type Props = {
  color?: ColorVariants;
  outline?: boolean;
  loading?: boolean;
  disabled?: boolean;
  children: ReactNode;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

function Button(props: Props) {
  const { color = 'primary', outline, loading, disabled, children, className, onClick, ...others } = props;

  const classnames = cn(className, 'py-1.5 px-3 rounded border-2', {
    [`bg-${color}-500 text-light border-${color}-500`]: !outline,
    [`hover:bg-${color}-600 active:bg-${color}-700`]: !loading && !disabled && !outline,
    [`bg-light text-${color}-500 border-${color}-500`]: outline,
    [`hover:bg-${color}-50 active:bg-${color}-100`]: outline && !disabled && !loading,
    'font-semibold': outline && !loading,
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
        {loading && <Spinner color={outline ? color : 'light'} className="absolute top-0 left-0 right-0 mx-auto" />}
        <div className={cn({ 'opacity-0': loading })}>{children}</div>
      </div>
    </button>
  );
}

export default Button;
