import React, { FC } from "react";

interface PriceProps {
  children: any;
  bgColor: string;
  txColor: string;
  title: string,
  price: number;
  customClass?: string;
}

const Price: FC<PriceProps> = (props) => {
  return (
    <>
      <div className={`bg-${props.bgColor} px-4 sm:px-8 py-10 text-center ${props.customClass}`}>
        <p className={`text-${props.txColor} uppercase text-lg sm:text-1xl lg:text-2xl font-bold`}>{props.title}</p>
        <p className={`text-${props.txColor} pt-10`}>a partir de</p>
        <div className={`text-${props.txColor} pb-6 font-medium`}>R$<span className="text-5xl font-bold">{props.price}</span></div>
        {props.children}
      </div>
    </>
  );
};

export default Price;
