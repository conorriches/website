import React from 'react';
import { Link } from 'gatsby';
import './post-link.scss';

const PostLink = ({ post }) => (
  <div className="PostLink">
    <span className="PostLink__LinkWrapper">
      <Link className="PostLink__Link" to={post.fields.slug}>
        <div className="PostLink__Title">{post.frontmatter.title}</div>
        <div className="PostLink__Excerpt">
          {post.frontmatter.excerpt !== 'false'
            ? post.frontmatter.excerpt || post.excerpt
            : ''}
        </div>
      </Link>
    </span>
  </div>
);
export default PostLink;
