import * as config from '../../../config.json';

import styled from 'styled-components';

export default styled.div`
  
  margin: 0;
  padding: 0;
  
  width: 100vw;
  min-height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);  

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid gold;

`;