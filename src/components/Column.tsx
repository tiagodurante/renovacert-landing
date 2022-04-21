import React, { FC, useState } from "react";

interface PriceProps {
  children: any;
}

const Price: FC<PriceProps> = (props) => {

  return (
    <>
      <div className={`grid grid-cols-1 sm:grid-cols-2 gap-6 sm:px-2 md:px-2 md:py-16`}>
        {props.children}
      </div>
    </>
  );
};

export default Price;
