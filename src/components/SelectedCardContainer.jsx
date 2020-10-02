import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import BaseCard from './BaseCard';

const SelectedCard = styled(BaseCard)`
  position: absolute;
  width: 98vw;
  z-index: 5;
`;

const Card = ({ children, ...props }) => (
  <SelectedCard {...props}>{children}</SelectedCard>
);

Card.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export default Card;
