import React, { FC, useState } from "react";

interface PriceProps {
  children: any;
  quantity: number;
}

const Price: FC<PriceProps> = (props) => {
  const [quantityValue] = useState<number>(props.quantity)

  return (
    <>
      <div className={`grid sm:grid-cols-${quantityValue} gap-2 sm:px-2 md:px-2 md:py-16`}>
        {props.children}
      </div>
    </>
  );
};

export default Price;
