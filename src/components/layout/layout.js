import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
import './layout.scss';
import GlobalStyle from 'global.css.js';

const Layout = ({ data, children, colour }) => (
  <div>
    <div className="Fade__Wrapper Fade__Wrapper--top">
      <div className={classnames('Fade', `Fade--${colour}`)} />
    </div>

    <div className="Layout">
      <GlobalStyle />
      <Head />
      <Header colour={colour} title={data.site.siteMetadata.siteTitle} />
      <div className="Layout__Main">{children}</div>
    </div>
  </div>
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
