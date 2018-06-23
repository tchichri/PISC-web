import React from "react";
import { FormattedMessage } from "react-intl";
import Link from "gatsby-link";

const NotFoundPage = () => (
  <div>
    <FormattedMessage id="notFound" tagName="h1" />
    <FormattedMessage id="notFound_desc" tagName="p" />
    <Link to="/">Back home</Link>
    {/* <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
  </div>
);

export default NotFoundPage;
