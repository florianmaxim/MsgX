import React, {Component} from 'react';

import styled, {keyframes} from 'styled-components';

import * as config from '../../../config.json';

const LogoOuter = styled.a`

    margin: 2.5vh;

    width: 10vw;
    height: 10vw;

    max-width: 50px;
    max-height: 50px;    

    display: flex;
    align-items: center;
    justify-content: center;

    background:transparent;
  
    font-family: Lato;
    font-size: 25px;
    box-shadow: 0px 0px 15px rgba(255,255,255,0);

    color:white;
    opacity:.5;

    cursor: pointer;

    @media(orientation: portrait){
      font-size:5vw;
    }

    transition: 3s opacity;

    //box-sizing: border-box;
    //border: ${config.dev.helperBorder} solid purple;
`;

export default class ComponentLogo extends Component {

  constructor(props){
    super(props);

    this.state = {
        logo: true
    }
  }

  render(){
    return(

      <LogoOuter 
        href={config.logoURL} 
        target="blank"       
        style={{
          boxShadow: this.state.logo?'0px 0px 20px rgba(255,255,255,.85)':'0px 0px 0px rgba(255,255,255,0)'
        }}>
            {config.logoInitials}
      </LogoOuter>

    );
}

}