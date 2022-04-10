import React, { FC } from "react";

interface ColumnProps {
  children: any;
  quantity: number;
  // first?: boolean;
  // bgColor: string;
}

const Column: FC<ColumnProps> = (props) => {
  return (
    <>
      <div className={`sm:columns-${props.quantity} md:py-16`}>
        {props.children}
      </div>
    </>
  );
};

export default Column;
