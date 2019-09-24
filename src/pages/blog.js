import React from 'react';
import { graphql } from 'gatsby';
import Layout from 'components/layout';
import Box from 'components/Box';
import PostLink from '../components/post-link';

import './blog.scss';

class BlogPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ query: event.target.value });
  }

  filter(edge) {
    if (this.state.query) {
      return (
        edge.node.frontmatter.title
          .toLowerCase()
          .indexOf(this.state.query.toLowerCase()) >= 0
      );
    }
    return true;
  }

  render() {
    const {
      data: {
        allMarkdownRemark: { edges },
      },
    } = this.props;

    const Posts = edges
      .filter(edge => !!edge.node.frontmatter.date)
      .filter(edge => this.filter(edge))
      .map(edge => {
        return <PostLink key={edge.node.id} post={edge.node} />;
      });
    return (
      <Layout colour="blue">
        <div className="Blog">
          <div className="Blog__SearchWrapper">
            <input
              className="Blog__Search"
              type="text"
              placeholder="Search"
              value={this.state.query}
              onChange={this.handleChange}
            />
          </div>

          <div className="Blog__Posts">{Posts}</div>
        </div>
      </Layout>
    );
  }
}
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
