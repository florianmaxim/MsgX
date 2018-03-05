import React, {Component} from 'react';

import styled, {keyframes} from 'styled-components';

import * as config from '../../../config.json';

const LogoContainer = styled.div`
    z-index:5;

    position:fixed;

    left:3vw;
    bottom:3vw;

    @media(orientation: portrait){
      top:auto;
      bottom:4vh;

      left:50vw;

      transform: translateX(-50%);
      flex-direction: column;
    }
    
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const LogoOuter = styled.div`
    width: 10vw;
    height: 10vw;

    max-width:75px;
    max-height:75px;

    display: flex;
    align-items: center;
    justify-content: center;
    background:transparent;
    border: 10px solid transparent;
    box-sizing: border-box;
  
    font-family: Lato;
    font-size:2vw;
    max-font-size:1.5em;
    box-shadow: 0px 0px 15px rgba(255,255,255,0);
    color:white;
    opacity:.5;

    cursor: pointer;

    @media(orientation: portrait){
      font-size:5vw;
    }

    transition: 3s opacity;
`;

const LogoText = styled.div`

    width: 100vw;
    height: 14px;
    
    max-height:75px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    background:transparent;

    border: 10px solid transparent;
    box-sizing: border-box;

    font-family: Lato;
    font-size:14px;
    text-shadow: 0px 0px 5px rgba(0,0,0,.5);
    text-align:center;
    text-decoration: none;
    
    opacity:.5;

    cursor: pointer;

    @media(orientation: portrait){

    }

    transition: 1s opacity;
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

        <LogoContainer
            onMouseOver={()=>this.setState({logo:true})}
            onMouseOut={()=>this.setState({logo:false})}
            onTouchStart={()=>this.setState({logo:!this.state.logo})}                   
        >
         <a href={config.logoURL} target="blank"> 
          
          <LogoOuter       
            style={{
              boxShadow: this.state.logo?'0px 0px 15px rgba(255,255,255,.8)':'0px 0px 0px rgba(255,255,255,0)',
              display:config.logoEnabled?'flex':'none'
            }}>
            {config.logoInitials}
          </LogoOuter>
          
        </a>          
         
        </LogoContainer>

    );
}

}