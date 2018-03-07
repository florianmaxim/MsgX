import * as config from '../../../config.json';

import styled from 'styled-components';

export default styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;

  box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);
  
  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid gold;
`;