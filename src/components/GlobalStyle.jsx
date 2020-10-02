import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *,
  :after,
  :before {
    box-sizing: border-box;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;
