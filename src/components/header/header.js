import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';
import classnames from 'classnames';

import './header.scss';
import Title from 'components/title';
import Nav from 'components/header/nav';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({});

const Header = ({ title, colour }) => (
  <AnimatedContainer>
    <div className="Container">
      <Link to="/">
        <Title as="h1">{title}</Title>
      </Link>
      <Nav />
    </div>
    <div className="Fade__Wrapper">
      <div className={classnames('Fade', `Fade--${colour}`)} />
    </div>
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
