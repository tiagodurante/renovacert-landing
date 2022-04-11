import React, { FC } from "react";

interface PriceProps {
  children: any;
  quantity: number;
}

const Price: FC<PriceProps> = (props) => {
  return (
    <>
      <div className={`grid sm:grid-cols-${props.quantity} gap-2 md:py-16`}>
        {props.children}
      </div>
    </>
  );
};

export default Price;
