import React from 'react';

import styled from 'styled-components';

const Button = styled.div`

    z-index: 2;

    position: fixed;

    bottom: 25vh;
    left: 50vw;
    transform: translateX(-50%);

    @media(orientation:portrait) {
        bottom: 15vh;
    }

    width: 250px;
    height: 53px;

    font-family: Lato;
    font-weight: bold;
  
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 2px;
   
    text-align:center;

    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-center;

    color: black;

    background: rgba(241,231,103,1);
    background: -moz-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(241,231,103,1)), color-stop(100%, rgba(255,215,0,1)));
    background: -webkit-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);
    background: -o-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);
    background: -ms-linear-gradient(top, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);
    background: linear-gradient(to bottom, rgba(241,231,103,1) 0%, rgba(255,215,0,1) 100%);

    border: 3px solid rgba(255,255,255, .25);
    
    border-radius: 5px;

    display: flex;
    align-items:center;
    justify-content:center;

    cursor: pointer;

    box-shadow: 0px -0px 10px rgba(255, 215, 0, .75);

    &:hover {
        //color: black;
        
        background: rgba(253,215,0,1);
        background: -moz-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(253,215,0,1)), color-stop(100%, rgba(241,232,103,1)));
        background: -webkit-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);
        background: -o-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);
        background: -ms-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);
        background: linear-gradient(to bottom, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);

       //border: 2.5px solid gold;
      }
`
export default class ComponentButton extends React.Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <Button 
                style={this.props.style} 
                onClick={this.props.onClick} 
                onTouchStart={this.props.onTouchStart} 
                onMouseDown={this.props.onMouseDown}
                onTouchEnd={this.props.onTouchEnd} 
                onMouseUp={this.props.onMouseUp}
                onMouseOver={this.props.onMouseOver}
                onMouseOut={this.props.onMouseOut} 
            >
                {this.props.caption}
            </Button>
        )
    }
}

export {ComponentButton}