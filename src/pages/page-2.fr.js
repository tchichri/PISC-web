import React from "react";
import Link from "gatsby-link";

const SecondPage = () => (
  <div>
    <h1>Bienvenue sur la seconde page</h1>
    <p>site en multilingue avex Gatsby </p>
    <Link to="/fr/">Retour à la maison</Link>
  </div>
);

export default SecondPage;
