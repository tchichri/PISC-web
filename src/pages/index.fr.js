import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <div>
    <h1>Bienvenue</h1>
    <p>site en multilingue avec Gatsby </p>
    <Link to="/fr/page-2/">aller à la page 2</Link>
  </div>
)

export default IndexPage
