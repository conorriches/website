import React from 'react';
import { Link } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import './post-link.scss';

const PostLink = ({ post }) => {
  return (
    <div className="PostLink">
      <Link className="PostLink__Link" to={post.fields.slug}>
        <div className="PostLink__Image">
          <img src={post.frontmatter.featuredImage?.childImageSharp?.fixed.srcWebp} alt=""/>
        </div>
        <div className="PostLink__Details">
          <div className="PostLink__Title">{post.frontmatter.title}</div>
          <div className="PostLink__Excerpt">
            {post.frontmatter.excerpt !== 'false'
              ? post.frontmatter.excerpt || post.excerpt
              : ''}
          </div>
        </div>
      </Link>
    </div>
  );
};
export default PostLink;
