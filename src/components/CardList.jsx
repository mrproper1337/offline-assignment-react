import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from './Card';

const FlexList = styled.div`
  position: relative;
  margin: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const CardList = ({ films }) => {
  const [selectedFilm, setSelectedFilm] = useState(null);

  return (
    <FlexList>
      {films.map((film) => (
        <Card
          key={film.title}
          isSelected={film.title === selectedFilm}
          setSelectedFilm={setSelectedFilm}
          {...film}
        />
      ))}
    </FlexList>
  );
};

CardList.propTypes = {
  films: PropTypes.arrayOf(PropTypes.object),
};

CardList.defaultProps = {
  films: [],
};

export default CardList;
