import React, { FC } from "react";
import { useStaticQuery, graphql } from "gatsby";
import CSS from "csstype";

interface HeaderProps {
  children: any;
  bgColor: string;
}

const Header: FC<HeaderProps> = (props) => {
  const bgBucket = useStaticQuery(graphql`
    query Backgrounds {
      allFile(filter: {sourceInstanceName: {eq: "backgrounds"}}) {
        nodes {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  `)

  console.log(bgBucket)

  function getRandomBackground () {
    return bgBucket.allFile.nodes[Math.floor(Math.random() * bgBucket.allFile.nodes.length)].childImageSharp.fluid.src
  }

  const background: CSS.Properties = {
    // backgroundImage: "url('https://tailwind.build/placeholders/pictures/office.jpg')",
    // backgroundImage: `url(${image.file.childImageSharp.fluid.src})`,
    backgroundImage: `url(${getRandomBackground()})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  }

  return (
    <>
      <div className={`bg-${props.bgColor}`} style={background}>
      <section
        className={`backdrop-blur-xs backdrop-brightness-25 h-fit px-4 py-12 sm:px-16 lg:px-32 xl:px-64 2xl:px-128`}
      >
        {props.children}
      </section>
      </div>
    </>
  );
};

export default Header;
