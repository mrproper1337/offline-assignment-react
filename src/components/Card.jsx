import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseCardContainer from './BaseCardContainer';
import SelectedCardContainer from './SelectedCardContainer';
import List from './List';

const Title = styled.span`
  font-size: 1.4rem;
  font-weight: 900;
`;

const SubTitle = styled(Title)`
  font-size: 1.1rem;
  font-weight: 600;
`;

const Description = styled.p`
  margin: 15px 0;
`;

const Card = ({
  isSelected,
  title,
  director,
  releaseDate,
  setSelectedFilm,
  openingCrawl,
  characters,
  planets,
}) => {
  const handleClick = useCallback(() => {
    setSelectedFilm(isSelected ? null : title);
  }, [isSelected, title]);

  const CardContainer = isSelected ? SelectedCardContainer : BaseCardContainer;

  return (
    <CardContainer onClick={handleClick}>
      <Title>{title}</Title>
      <span>Directed by {director}</span>
      <span>{releaseDate}</span>
      {isSelected && (
        <>
          <Description>{openingCrawl}</Description>
          <SubTitle>Characters</SubTitle>
          <List array={characters} />
          <SubTitle>Planets</SubTitle>
          <List array={planets} />
        </>
      )}
    </CardContainer>
  );
};

Card.propTypes = {
  isSelected: PropTypes.bool,
  setSelectedFilm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  openingCrawl: PropTypes.string.isRequired,
  characters: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  planets: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

Card.defaultProps = {
  isSelected: false,
};

export default Card;
