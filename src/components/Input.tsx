import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, KeyboardEvent, useCallback } from 'react';
import cn from 'classnames';

type Props = {
  error?: string;
  onEnter?: () => void;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const Input = forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { error, className, onKeyPress, onEnter, ...others } = props;

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const keyCode = e.code || e.key;
      if (keyCode === 'Enter') {
        onEnter?.();
      }
    },
    [onKeyPress],
  );

  const classnames = cn(className, 'outline-none border border-dark rounded py-1.5 px-3 focus:border-primary', {
    'border-danger': error,
  });

  return <input ref={ref} {...others} className={classnames} onKeyPress={handleKeyPress} />;
});

export default Input;
