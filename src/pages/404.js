import React from "react";
import { FormattedMessage } from "react-intl";
import Link from "gatsby-link";

const NotFoundPage = () => (
  <div>
    <FormattedMessage id="notFound" tagName="h1" />
    <FormattedMessage id="notFound_desc" tagName="p" />
    <Link to="/">Back home</Link>
  </div>
);

export default NotFoundPage;
