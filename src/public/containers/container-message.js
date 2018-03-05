import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionsMessage from '../actions/actions-message';

import ComponentButton from '../components/component-button';
import ComponentLogo   from '../components/component-logo';

import styled from 'styled-components';

const Outer = styled.div`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  border: 0px solid gold;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  box-shadow: 0px 0px 50px rgba(255, 255, 255, 1);  
`;

const Wrapper = styled.div`

  position: absolute;

  left: 0;
  top: 0;

`;

const Textarea = styled.textarea`

  position: relative;
  
  margin-left: 5vw;
  width: 90vw;
  
  margin-top: 5vh;
  height: 90vh;

  background: transparent;

  font-family: Roboto;
  font-size: 10vh;
  color: white;
  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);

  text-align: center;
  resize: both;

  overflow: hidden;
  overflow-y: scroll;

  border: 0;
  outline: 0;

  text-shadow: 0 1px 0 hsl(174,5%,80%),
  1px 2px 0 hsl(174,5%,75%),
  2px 3px 0 hsl(174,5%,70%),
  3px 4px 0 hsl(174,5%,66%),
  4px 5px 0 hsl(174,5%,64%),

  0 0 5px rgba(0,0,0,.05),
  0 1px 3px rgba(0,0,0,.2),
  0 3px 5px rgba(0,0,0,.2),
  0 5px 10px rgba(0,0,0,.2);

`;

const PriceWrapper = styled.div`

  position: absolute;

  bottom: 15vh;
  left: 50vw;
  transform: translate3d(-50%,0,0);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`;

const Price = styled.div`

  width: 95%;
  height: 35px; 

  cursor: pointer;
  user-select: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  h1{
    margin:0;
    padding:0;
    
    font-family: Lato;
    font-size: 18px;
    font-weight: 600;
    
    color: black;
  }
`;

const Toggle = styled.div`

  position: fixed;

  height: 5vh;
  
  left: auto;
  top: 2.5vw;
  right: 2.5vw;
  bottom: auto;

  font-family: Roboto;
  font-size: 7.5vh;
  
  color: white;
  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);

  text-shadow:
  0 1px 0 hsl(174,5%,80%),
  1px 2px 0 hsl(174,5%,75%),
  2px 3px 0 hsl(174,5%,70%);

  @media(orientation: portrait){
    height: 5vh;
    
    left: auto;

    top: 5vw;
    right: 5vw;

    bottom: auto;
  }

  transform: translate3d(0%,-50%,0);

  cursor: pointer;
  user-select: none;
`;

const currencies = [
  ["EUR", 700],
  ["ETH", 1],
  ["USD", 850]
]

class ContainerMessage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      message: `${this.props.message.message}`,
      readonly: false,
      caption: `buy`,
      currency: 0,
      toggle: 0
    }
  }

  componentDidMount(){
    this.props.getMessage();
    this.props.getPrice();
    this.props.getAuthor();
  }

  componentWillReceiveProps(props){
    this.setState({
      message: `${props.message.message}`
    })
  }

  handleOnSubmit(){
    this.props.setMessage(this.state.message, this.props.message.price)
  }

  _handleKeyPress(e){
    if (e.key === 'Enter') {
      this.handleOnSubmit()
    }
  }

  handleChange(event) {
    this.setState({message: event.target.value});
  }

  toggleCurrency(){
    this.setState({currency:this.state.currency<currencies.length-1?this.state.currency+1:0})
  }

  toggle(){
    this.setState({
      toggle: this.state.toggle<1?this.state.toggle+1:0
    });

    switch(this.state.toggle){
      case 0:
        this.setState({message: this.props.message.message})
      break;
      case 1:
        this.setState({message: this.props.message.author})
      break;
    }

  }

  render() {
    return (
      <Outer>
          <Wrapper>
            <Textarea
               value={`${this.state.message}`}
               onChange={(event) => {this.handleChange(event)}} 
            />
          </Wrapper>
          
          <PriceWrapper>

            <Price onClick={() => this.toggleCurrency()}>

              <h1>{`${((this.props.message.price/1000000000000000000)*currencies[this.state.currency][1]).toFixed(2)}`}</h1>
              <h1>{`${currencies[this.state.currency][0]} ▼`}</h1>
              
            </Price>

            <ComponentButton 
              caption={this.state.caption}
              onClick={() => this.handleOnSubmit()}   
            />
            
          </PriceWrapper>

          <ComponentLogo/>
      </Outer>
    );
  }

}

function props(state) {

  return {
    message: state.message
  };

}

function actions(dispatch){

  return bindActionCreators({

    getMessage: actionsMessage.getMessage,
    getPrice:   actionsMessage.getPrice,    
    getAuthor:  actionsMessage.getAuthor,

    setMessage:  actionsMessage.setMessage

  }, dispatch);

}

export default connect(props, actions)(ContainerMessage);

/*
 <textarea
          value={`${this.state.message}`}
          onChange={(event) => this.handleChange(event)} 
          />
*/