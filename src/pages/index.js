import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Gallery from 'components/gallery';
import { graphql, Link } from 'gatsby';

import './index.scss';

const Index = ({ data }) => (
  <Layout colour="blue">
    <div
      dangerouslySetInnerHTML={{
        __html: data.homeJson.content.childMarkdownRemark.html,
      }}
    ></div>
    <Link to="/blog" className="BlogLink">
      Visit my blog <span className="chevron right"></span>
    </Link>

    <h3>Random thoughts and photos</h3>
    <Gallery items={data.homeJson.gallery} />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 300, quality:90, maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
