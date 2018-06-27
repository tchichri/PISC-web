import React from "react";
import Link from "gatsby-link";
import { FormattedMessage } from "react-intl";
import Helmet from "react-helmet";

const IndexPage = () => (
  <div>
    <Helmet
      meta={[
        {
          name: "description",
          content:
            "The Paris International Salsa Congress, it’s more than 2000 passionnate and generous dancers coming from all over the world to gather and share their Love of the Latin dances such as salsa, bachata and kizomba !"
        },
        {
          name: "keywords",
          content:
            "Salsa, bachata, kizomba, mambo, salsa congress, salsa festival"
        }
      ]}
    >
      <title>4th edition “JUNGLE” 16 - 22 april</title>
    </Helmet>
    <h1 style={{ textAlign: "center", color: "#006158" }}>
      The PISC <br /> Paris International Salsa Congress
    </h1>

    <p>
      The Paris International Salsa Congress, it’s more than 2000 passionnate
      and generous dancers coming from all over the world to gather and share
      their Love of the Latin dances such as salsa, bachata and kizomba !
    </p>
    <p>
      The PISC is also the opportunity to visit the most beautiful city of the
      world. Pre-parties are organized the 3 nights before the congress so that
      our friends who come to discover the charming french capital can also
      benefit salsa party in Paris and meet other PISCers !
    </p>
    <p>
      We would like to make the PISC, a salsa congress just like PARIS :
      Professionnal, Amusing, Responsive, Innovating and Somptuous.
    </p>

    <h2 style={{ textAlign: "center", color: "#006158" }}>
      In 2019, the PISC edition is « JUNGLE »
    </h2>
    <p>
      We are so many and each so different. Each individual has his own
      identity: a heritage, a character, a story, a culture, a physical, a style
      of dress, in short attributes that make him unique.
    </p>
    <p>
      We like to see this diversity as a jungle, where its so different animals
      all have a place and a role in the animal kingdom.
    </p>
    <p>
      We wish this year that the PISC is like this jungle! Let&#39;s wake up to
      the primary instinct that lies dormant in us ... and which is revealed on
      the dance floor to the sound of salsa, Bachata or Kizomba music!
    </p>
    <p>
      If like us, you want to explore these differences, reveal your true nature
      and let go, come and venture into our jungle around a common passion:
      dance!
    </p>
    <div style={{ textAlign: "center", marginTop: "3.45rem" }}>
      <a
        style={{
          background: "#006158",
          fontSize: "22px",
          color: "white",
          textDecoration: "none",
          padding: "10px 16px",
          borderRadius: 4
        }}
        href="https://www.billetweb.fr/pisc-2019"
      >
        Buy your PASS
      </a>
    </div>
  </div>
);

export default IndexPage;
