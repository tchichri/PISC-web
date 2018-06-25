import React from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Cover from "../components/Cover";
import Helmet from "react-helmet";
import { getCurrentLangKey, getLangs, getUrlForLang } from "ptz-i18n";
import { IntlProvider } from "react-intl";
import { FormattedMessage } from 'react-intl';
import "intl";
import "./index.css";

const TemplateWrapper = ({ children, data, location, i18nMessages }) => {
  const url = location.pathname;
  const { langs, defaultLangKey } = data.site.siteMetadata.languages;
  const langKey = getCurrentLangKey(langs, defaultLangKey, url);
  const homeLink = `/${langKey}/`;
  const langsMenu = getLangs(langs, langKey, getUrlForLang(homeLink, url));

  return (
    <IntlProvider locale={langKey} messages={i18nMessages}>
      <div>
        <Helmet
          defaultTitle="Paris International Salsa Congress 2019"
          titleTemplate="%s | Paris International Salsa Congress 2019"
          meta={[
            { name: "description", content: "Sample" },
            { name: "keywords", content: "sample, something" }
          ]}
        >
          <html lang={langKey} />
          <FormattedMessage id="piscEdition">
            {(txt) => (
              <title>
                {txt}
              </title>
            )}
          </FormattedMessage>
          {/* <FormattedMessage tagName="title" id="piscEdition" />
          <title>{"4th edition"}</title> */}
        </Helmet>
        <Header langs={langsMenu} />
        <Cover />
        <div
          style={{
            margin: "0 auto",
            maxWidth: 1200,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          {children()}
        </div>
        <Footer langs={langsMenu} />
      </div>
    </IntlProvider>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;

export const pageQuery = graphql`
  query Layout {
    site {
      siteMetadata {
        languages {
          defaultLangKey
          langs
        }
      }
    }

  }
`;
