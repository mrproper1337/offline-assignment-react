import React from 'react';
import PropTypes from 'prop-types';

import BaseCard from './BaseCard';

const Card = ({ children, ...props }) => (
  <BaseCard {...props}>{children}</BaseCard>
);

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Card;
