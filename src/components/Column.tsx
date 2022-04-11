import React, { FC } from "react";

interface ColumnProps {
  children: any;
  quantity: string;
}

const Column: FC<ColumnProps> = (props) => {
  return (
    <>
      <div className={`md:columns-${props.quantity} md:py-16`}>
        {props.children}
      </div>
    </>
  );
};

export default Column;
