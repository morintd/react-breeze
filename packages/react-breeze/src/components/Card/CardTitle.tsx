import React from 'react';
import cn from 'classnames';

import Title, { Props as TitleProps } from '../Title';

type Props = TitleProps;

function CardTitle(props: Props) {
  const { as = 'h3', className, ...others } = props;

  return <Title {...others} as={as} className={cn('mb-2', className)} />;
}

export default CardTitle;
