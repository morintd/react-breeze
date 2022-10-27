import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, KeyboardEvent, useCallback } from 'react';
import cn from 'classnames';

type InputColors = [string] | [string, string] | [string, string, string];

type Props = {
  error?: boolean;
  onEnter?: () => void;
  colors?: InputColors;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const FormInput = (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
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

  const classnames = cn(className, 'outline-none border rounded py-1.5 px-3 block focus:border-primary-500', {
    [`border-dark-100`]: !error,
    [`border-danger-300`]: error,
  });

  return <input ref={ref} {...others} className={classnames} onKeyPress={handleKeyPress} />;
};

export default forwardRef(FormInput);
