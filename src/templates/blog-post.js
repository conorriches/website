import React from 'react';
import { graphql, Link} from 'gatsby';
import Layout from '../components/layout';
import './blogpost.scss'

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout colour="millennial">
      <div className="BlogPost">
        <h1>{post.frontmatter.title}</h1>
        <div className='Blog__Meta'>
          <Link to="/blog">Back</Link>
          <small>{post.frontmatter.date}</small>
        </div>
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
        date(formatString: "MMMM DD, YYYY")
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
