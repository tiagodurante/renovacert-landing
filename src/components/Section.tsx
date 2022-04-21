import React, { FC } from "react";

interface SectionProps {
  children: any;
  bgColor: string;
  first?: boolean;
  skew?: boolean;
}

const Section: FC<SectionProps> = (props) => {
  return (
    <>
      <section className={`bg-${props.bgColor} ${props.first ? 'h-screen lg:h-fit' : 'h-fit'} px-4 py-12 sm:px-16 lg:px-32 xl:px-64 2xl:px-128 ${(props.skew) ? '-skew-y-12 transform-gpu' : ''}`}>
        {props.children}
      </section>
    </>
  );
};

export default Section;
