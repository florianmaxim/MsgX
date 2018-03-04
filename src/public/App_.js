import styled, {injectGlobal} from 'styled-components';

injectGlobal`

  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  @import url('https://fonts.googleapis.com/css?family=Cinzel');
  @import url('https://fonts.googleapis.com/css?family=Roboto');

  body {
    margin: 0;

    background: radial-gradient(ellipse farthest-corner at right bottom, #FEDB37 0%, #FDB931 8%, #9f7928 30%, #8A6E2F 40%, transparent 80%),
    radial-gradient(ellipse farthest-corner at left top, #FFFFFF 0%, #FFFFAC 8%, #D1B464 25%, #5d4a1f 62.5%, #5d4a1f 100%);
  }

  input{

    width: 100vw;
    //word-break: break-all;

    margin: 0;
    padding:0;

    font-size: 5em;
    line-height: 5em;
    font-family: Roboto;

    text-align:center;

    text-shadow: 0px 0px 100px rgba(255, 255, 255, 1);

    color: white;
    background: transparent;

    border: 0;
    outline: none;


  }
`;

export const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  border: 0px solid gold;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);  
`;