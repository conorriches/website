import React from 'react';
import { Link } from 'gatsby';
import './post-link.scss';

const PostLink = ({ post }) => (
  <div className="PostLink">
    <Link className="PostLink__Link" to={post.fields.slug}>
      <span className="PostLink__Chevron PostLink__Chevron--right"></span>
      {post.frontmatter.title}
    </Link>
  </div>
);
export default PostLink;
