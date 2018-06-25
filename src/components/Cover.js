import React from "react";
import Link from "gatsby-link";

import imgCover from "../assets/bg-yamulee-01.jpg";
import imgCover02 from "../assets/bg-yamulee-02.jpg";

const Cover = props => (
  <div
    style={{
      // background: "#006158",
      marginTop: "-1.45rem",
      marginBottom: "1.45rem",
      height: "calc(100vh - 111px)",
      backgroundImage: `url(${imgCover})`,
      // backgroundImage: `url(${imgCover02})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      position: "relative",
    }}
  >
    
  </div>
);

export default Cover;