import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledList = styled.ul`
  margin: 5px 0 10px 0;
  padding: 0 17px;
`;

const List = ({ array }) => (
  <StyledList>
    {array && array.map((item) => <li key={item.name}>{item.name}</li>)}
  </StyledList>
);

List.propTypes = {
  array: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default List;
