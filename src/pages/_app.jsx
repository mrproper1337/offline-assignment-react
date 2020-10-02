import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from '../components/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.element,
  pageProps: PropTypes.object,
};

export default MyApp;
