import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionsMessage from '../actions/actions-message';

import ComponentButton from '../components/component-button';

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
  top: 50vh;

  transform: translate3d(0,-50%,0);

`;

const Guy = styled.textarea`

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

`;

class ContainerMessage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      message: `${this.props.message.message}`,
      readonly: false,
      caption: `buy (eth ${(this.props.message.price/1000000000000000000).toFixed(3)})`
    }
  }

  componentDidMount(){
    this.props.getMessage();
    this.props.getPrice();
    this.props.getAuthor();
  }

  componentWillReceiveProps(props){
    this.setState({
      message: `${props.message.message}`,
      caption:  `buy (eth ${(this.props.message.price/1000000000000000000).toFixed(3)})`
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

  render() {
    return (
      <Outer>
          <Wrapper>
            <Guy
               value={`${this.state.message}`}
               onChange={(event) => this.handleChange(event)} 
            />
          </Wrapper>
          <ComponentButton 
            caption={this.state.caption}
            onClick={() => this.handleOnSubmit()}   
          />
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