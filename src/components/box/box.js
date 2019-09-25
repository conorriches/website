import React from 'react';
import PropTypes from 'prop-types';
import './box.scss';

const Box = ({ children }) => <div className="Box">{children}</div>;

Box.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Box;
