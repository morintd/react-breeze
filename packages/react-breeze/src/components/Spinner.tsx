import React, { DetailedHTMLProps, HTMLAttributes } from 'react';
import cn from 'classnames';

import { PrimaryColorVariant, BonusColorVariants, ColorVariants } from '../types';

type Props = {
  color?: PrimaryColorVariant | ColorVariants | BonusColorVariants;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Spinner(props: Props) {
  const { className, color, ...others } = props;
  const classnames = cn(className, 'h-6 w-6 flex items-center content-center');

  const svgClassnames = cn('animate-spin h-5 w-5 inline', {
    'text-light': !color,
    'text-dark': color === 'dark',
    'text-primary': color === 'primary',
    'text-secondary': color === 'secondary',
    'text-success': color === 'success',
    'text-info': color === 'info',
    'text-warning': color === 'warning',
    'text-danger': color === 'danger',
  });

  return (
    <div {...others} className={classnames}>
      <svg role="status" className={svgClassnames} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 25 25">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    </div>
  );
}

export default Spinner;
