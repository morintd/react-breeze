import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import { HeadingLevel } from '../types';

export type Props = {
  children: ReactNode;
  as?: HeadingLevel;
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

function Title(props: Props) {
  const { as = 'h1', children, className, ...others } = props;
  const Heading = as;
  const classnames = cn(className, {
    'text-4xl': as === 'h1',
    'text-3xl': as === 'h2',
    'text-2xl': as === 'h3',
    'text-xl': as === 'h4',
    'text-lg': as === 'h5',
    'text-base': as === 'h6',
  });

  return (
    <Heading {...others} className={classnames}>
      {children}
    </Heading>
  );
}

export default Title;
