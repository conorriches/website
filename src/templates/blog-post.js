import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout colour="millennial">
      <div>
        <small>{post.frontmatter.date}</small>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  );
};
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default BlogPost;
