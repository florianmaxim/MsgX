import React from 'react';

import styled from 'styled-components';

const Button = styled.div`
    
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

    display: flex;
    align-items:center;
    justify-content:center;

    cursor: pointer;

    border: 1px solid rgba(255,255,255, .85);
    //border: 1px solid rgba(0,0,0, .85);
    
    border-radius: 5px;

    box-shadow: 0px 0px 25px rgba(255, 255, 0, .85);

    &:hover {
        
        background: rgba(253,215,0,1);
        background: -moz-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(253,215,0,1)), color-stop(100%, rgba(241,232,103,1)));
        background: -webkit-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);
        background: -o-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);
        background: -ms-linear-gradient(top, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);
        background: linear-gradient(to bottom, rgba(253,215,0,1) 0%, rgba(241,232,103,1) 100%);

      }

    overflow: hidden;
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