import React from "react";
import Link from "gatsby-link";

import styled, { css } from "styled-components";

// <FormattedMessage id="piscEdition">
//   {txt => <title>{txt}</title>}
// </FormattedMessage>


const Footer = props => (
  <div
    style={{
      background: "#3D3819",
      marginTop: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 1200,
        padding: "1.45rem 1.0875rem .45rem",
        display: "flex",
        alignItems: "baseline",
        justifyContent: "space-between"
      }}
    >
      <p style={{ color: "#fff", fontSize: "14px" }}>
        Copyright (c) 2016 - 2018 Paris International Salsa Congress
      </p>
      <div>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            margin: "14px 10px"
          }}
          href="tel:+33614091946"
        >
          <svg
            height="42px"
            width="42px"
            viewBox="0 0 141.732 141.732"
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "white" }}
          >
            <path d="M108.225 118.226h-66.22V10.889h66.22v107.337zm-38.263 10.899c0-2.951 2.37-5.345 5.294-5.345 2.925 0 5.294 2.394 5.294 5.345 0 2.95-2.369 5.348-5.294 5.348-2.924-.004-5.294-2.398-5.294-5.348m42.706 4.851h.009V5.314h-.002A5.338 5.338 0 0 0 107.336 0l-.057.002V0H42.894a5.341 5.341 0 0 0-5.335 5.314h-.001v128.661h.008c-.002.056-.008.111-.008.169 0 2.878 2.419 5.212 5.404 5.212.044 0 .087-.006.131-.007v.007h64.316c2.904 0 5.267-2.333 5.267-5.212.001-.057-.006-.113-.008-.168" />
          </svg>
        </a>
        <a
          style={{
            color: "white",
            textDecoration: "none",
            margin: "14px 10px"
          }}
          href="mailto:pisc@mouaze.com"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ fill: "white" }}
            height="42px"
            width="42px"
            viewBox="0 0 27.857 27.857"
          >
            <g fill="#fff">
              <path d="M2.203 5.331l10.034 7.948c.455.36 1.082.52 1.691.49.608.03 1.235-.129 1.69-.49l10.034-7.948c.804-.633.622-1.152-.398-1.152H2.604c-1.021 0-1.203.519-.401 1.152z" />
              <path d="M26.377 7.428l-10.965 8.325c-.41.308-.947.458-1.482.451-.536.007-1.073-.144-1.483-.451L1.48 7.428C.666 6.811 0 7.142 0 8.163v13.659c0 1.021.836 1.857 1.857 1.857H26a1.863 1.863 0 0 0 1.857-1.857V8.163c0-1.021-.666-1.352-1.48-.735z" />
            </g>
          </svg>
        </a>
      </div>
    </div>
  </div>
);

export default Footer;
