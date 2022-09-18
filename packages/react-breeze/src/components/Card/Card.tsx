import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

import { Color } from '../../types';

import CardTitle from './CardTitle';

type Props = {
  children: ReactNode;
  color?: string;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Card(props: Props) {
  const { color = Color.Gray, className, ...others } = props;

  const classnames = cn(className, `border border-${color}-300 rounded p-4`);

  return <div {...others} className={classnames} />;
}

Card.Title = CardTitle;

export default Card;
