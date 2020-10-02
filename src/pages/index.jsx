import React from 'react';
import PropTypes from 'prop-types';
import CardList from '../components/CardList';
import fetchFilms from '../utils/fetchFilms';

const Index = ({ films }) => <CardList films={films || []} />;

Index.propTypes = {
  films: PropTypes.array.isRequired,
};

export async function getStaticProps() {
  return {
    props: {
      films: await fetchFilms(),
    },
  };
}

export default Index;
