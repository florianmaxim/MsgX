import * as config from '../../../config.json';

import styled from 'styled-components';

export default styled.div`

  width: 100vw;
  height: 100vh;

  
  margin: 0;
  padding: 0;
  

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid gold;

`;