import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { FormattedMessage } from 'react-intl';

const SelectLanguage = (props) => {
  const links = props.langs.map(lang =>
    <Link to={lang.link} key={lang.langKey} style={{
      color: '#000'
    }}>
      <li style={{display: "inline-block", margin: "0 6px"}} selected={lang.selected}>
        {lang.langKey}
      </li>
    </Link>
  );

  return (
    <section style={{
        display: "flex",
      }}>
      <header style={{
        color: '#000'
        

      }}>
        <FormattedMessage  id="selectLanguage" />
        <ul style={{margin: 0, display: "inline-block", listStyle: "none",}}>
          {links}
        </ul>
      </header>
    </section>
  );
};

SelectLanguage.propTypes = {
  langs: PropTypes.array
};

export default SelectLanguage;
