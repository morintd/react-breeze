import React, { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import cn from 'classnames';

type Props = {
  children: ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

function Container(props: Props) {
  const { children, className, ...others } = props;
  const classnames = cn(className, 'w-full flex justify-center items-center');

  return (
    <div {...others} className={classnames}>
      <div className="xs:max-w-xs md:max-w-md xl:max-w-xl flex-1">{children}</div>
    </div>
  );
}

export default Container;
