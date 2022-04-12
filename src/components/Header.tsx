import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import CSS from "csstype";

interface HeaderProps {
  children: any;
  bgColor: string;
}

const Header: FC<HeaderProps> = (props) => {
  const image = useStaticQuery(graphql`
    query Backgrounds {
      file(sourceInstanceName: {eq: "backgrounds"}) {
        sourceInstanceName
        name
        childImageSharp {
          fluid {
            src
          }
        }
      }
    }
  `)

  const background: CSS.Properties = {
    // backgroundImage: "url('https://tailwind.build/placeholders/pictures/office.jpg')",
    backgroundImage: `url(${image.file.childImageSharp.fluid.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <>
      <div className={`bg-${props.bgColor}`} style={background}>
      <section
        className={`backdrop-blur-xs backdrop-brightness-15 h-fit px-4 py-12 sm:px-16 lg:px-32 xl:px-64 2xl:px-128`}
      >
        {props.children}
      </section>
      </div>
    </>
  );
};

export default Header;
