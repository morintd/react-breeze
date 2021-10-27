import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

export type Props = {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>;

function Title(props: Props) {
  const { as = 'h1', children, className, ...others } = props;
  const Heading = as;
  const classnames = cn(className, {
    'text-4xl': as === 'h1',
    'text-3xl': as === 'h2',
    'text-2xl': as === 'h3',
    'text-1xl': as === 'h4',
    'text-xl': as === 'h5',
    'text-lg': as === 'h6',
  });

  return (
    <Heading {...others} className={classnames}>
      {children}
    </Heading>
  );
}

export default Title;
