import React, { FC } from "react";

interface SectionProps {
  children: any;
  first?: boolean;
  bgColor: string;
}

const Section: FC<SectionProps> = (props) => {
  return (
    <>
      <section className={`bg-${props.bgColor} ${props.first ? 'h-screen lg:h-fit' : 'h-fit'} px-4 py-12 sm:px-16 lg:px-32 xl:px-64 2xl:px-128`}>
        {props.children}
      </section>
    </>
  );
};

export default Section;
