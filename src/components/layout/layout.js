import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import { LayoutBox } from './layout.css';
import GlobalStyle from 'global.css.js';

const Layout = ({ data, children, colour }) => (
  <LayoutBox>
    <GlobalStyle />
    <Head />
    <Header colour={colour} title={data.site.siteMetadata.siteTitle} />
    {children}
  </LayoutBox>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
