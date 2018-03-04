import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionsMessage from '../actions/actions-message';

class ContainerMessage extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      message: `${this.props.message.message}`,
      readonly: false
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

  render() {
    return (

         <input 
          type="text" 
          value={this.state.message}
          onChange={(event) => this.setState({message: event.target.value})}
          onSubmit={() => this.handleOnSubmit()}
          onDoubleClick={() => this.handleOnSubmit()}
          onKeyPress={(e) => this._handleKeyPress(e)}
          />

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