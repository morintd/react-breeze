import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, KeyboardEvent, useCallback } from 'react';
import cn from 'classnames';

type InputColors = [string] | [string, string] | [string, string, string];

type Props = {
  error?: boolean;
  onEnter?: () => void;
  colors?: InputColors;
} & DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

const defaultColors = ['gray', 'blue', 'red'];

const FormInput = (props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
  const { colors = defaultColors, error, className, onKeyPress, onEnter, ...others } = props;

  const handleKeyPress = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      const keyCode = e.code || e.key;
      if (keyCode === 'Enter') {
        onEnter?.();
      }
    },
    [onKeyPress],
  );

  const classnames = cn(
    className,
    'outline-none border rounded py-1.5 px-3 block',
    `focus:border-${colors[1] ?? defaultColors[1]}-500`,
    {
      [`border-${colors[0] ?? defaultColors[0]}-300`]: !error,
      [`border-${colors[2] ?? defaultColors[2]}-300`]: error,
    },
  );

  return <input ref={ref} {...others} className={classnames} onKeyPress={handleKeyPress} />;
};

export default forwardRef(FormInput);
