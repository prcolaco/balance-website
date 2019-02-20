import React from "react";
import { Flex } from "rebass";
import { StaticQuery, graphql } from "gatsby";

import { ExternalLink } from "../Links";

const Footer = () => (
  <StaticQuery
    query={graphql`
      query FooterQuery {
        site {
          siteMetadata {
            urls {
              url
              label
            }
          }
        }
      }
    `}
    render={({ site: { siteMetadata } }) => (
      <Flex as="footer" justifyContent="space-evenly" alignItems="center">
        {siteMetadata.urls.map((link, index) => (
          <ExternalLink fontSize={1} key={index} href={link.url}>
            {link.label}
          </ExternalLink>
        ))}
      </Flex>
    )}
  />
);

export default Footer;
