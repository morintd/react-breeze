import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import CardTitle from './CardTitle';

type Props = {
  children: ReactNode;
  color?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Card(props: Props) {
  const { className, ...others } = props;

  const classnames = cn(className, `border border-dark-50 shadow-md rounded p-4`);

  return <div {...others} className={classnames} />;
}

Card.Title = CardTitle;

export default Card;
