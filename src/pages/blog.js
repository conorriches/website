import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';

import PostLink from '../components/post-link';
const BlogPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => {
      console.log(edge);
      return <PostLink key={edge.node.id} post={edge.node} />;
    });
  return (
    <Layout>
      <div>{Posts}</div>
    </Layout>
  );
};
export default BlogPage;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
