import * as config from '../../../config.json';

import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionsMessage from '../actions/actions-message';
import * as actionsNotifications from '../actions/actions-notifications';

import ComponentOuter from '../components/component-outer';

import ComponentButton from '../components/component-button';
import ComponentLogo   from '../components/component-logo';

import styled from 'styled-components';


const ComponentNotificationsWrapper = styled.div`

  z-index: 1;

  position: fixed;
  top: 0;
  left:0;

  transition: 0.5s all;

  margin:0;
  padding:0;

  width: 100vw;

  background: red;
  
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @media(orientation: portrait){

  }

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid green;
`;

const ComponentNotificationsText = styled.div`

  width: 75vw;

  transition: 0.125s all;
  transition-delay: 0s; 

  margin: 5vw;
  padding:0;
  
  font-family: Roboto;
  font-size: 2.5vh;
  font-weight: 600;
  letter-spacing: .125vh;
  text-align: left;
  
  color: white;
  text-shadow: 0px -0px 5px rgba(255, 255, 255, .5);
  text-transform: uppercase;

  @media(orientation: portrait){
  }

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid green;
`;

const ComponentNotificationsClose = styled.div`

  width: 25vw;

  margin: 0;
  padding:0;
  
  transition: 0.125s all;
  transition-delay: 0s; 

  font-family: Open Sans;
  font-size: 2.5vh;
  letter-spacing: .125vh;
  text-align:center;

  font-weight: 600;
  
  color: white;

  cursor: pointer;
  user-select: none;

  @media(orientation: portrait){

    margin-right: 2.5vh;

  }

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid blue;
`;

const ComponentTextarea = styled.textarea`

  z-index:0;

  position: fixed;

  top:0;

  margin: 0;

  padding: 5vw;
  padding-top: 5vh;
  padding-bottom: 40vh;  

  width: 90vw;
  height: 100vh;

  background: transparent;

  font-family: Roboto;
  font-size: 10vh;
  color: white;
  text-shadow: 0px -0px 50px rgba(255, 215, 0, .75);

  text-align: center;
  resize: both;

  overflow: hidden;
  overflow-y: scroll;

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

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid blue;
`;

const ComponentPriceWrapper = styled.div`

  z-index:1;

  position: fixed;

  bottom: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid purple;

`;

const ComponentPriceLine = styled.div`

  margin-bottom: 8px;
  
  width: 100%;

  cursor: pointer;
  user-select: none;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid blue;

`;

const ComponentPriceValue = styled.div`

  width: 100%;

  margin: 0;
  padding: 0;
  
  font-family: Lato;
  font-size: 18px;
  font-weight: 600;
  
  color: black;

  text-align: left;

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid green;  

`;

const ComponentPriceCurrency = styled.div`

  width: 100%;

  margin: 0;
  padding: 0;
  
  font-family: Lato;
  font-size: 18px;
  font-weight: 600;
  
  color: black;

  text-align: right;

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid red;

`;

const ComponentDate = styled.div`

  width: 100%;

  margin-top: 8px;
  margin-bottom:0;  

  margin-left:0;
  margin-right:0;
  
  padding:0;
  
  font-family: Lato;
  font-size: 18px;
  font-weight: 600;
  
  color: black;

  text-align: center;

  box-sizing: border-box;
  border: ${config.dev.helperBorder} solid purple;

`;


class ContainerMessage extends React.Component {

  constructor(props){
    super(props);
    this.state = {

      count: 0,

      message: '',
      author: '',
      date: 0,
      price: 0,

      caption: `${config.buttonCaption}`,
      currency: 0,

      startedTyping: false
    }
  }

  componentDidMount(){

    //alert(this.props.match.params.count)

    this.props.getConnectionType();

    this.props.getCount();    
    this.props.getMessage();
    this.props.getAuthor();
    this.props.getPrice();
    this.props.getStep();
    this.props.getDate();

    setInterval(()=>{
      if(!this.state.startedTyping)
      this.props.setNotification({
        message: config.notifications.dontHesitate[Math.floor(Math.random()*config.notifications.dontHesitate.length)],
        url: null
      })    
    }, 45000)

  }

  componentWillReceiveProps(props){

    if(!this.props.message.connectionType){

      let notification = config.notifications.dontHesitate[Math.floor(Math.random()*config.notifications.dontHesitate.length)]
      let url = 'https://github.com/florianmaxim/msgx';

      if(props.message.connectionType==='websocket'){
        notification = config.notifications.notConnected;
      }
      
      this.props.setNotification({
        message:notification,
        url: url
      });

    }

    this.setState({
      count: props.message.count,

      message: `${String(props.message.message)}`,
      author: String(props.message.author),
      date: Date(props.message.date),
      price: Number(props.message.price),

      caption: `${String(this.state.count)}. (${String(props.message.author).substr(0,12)}...)` 
    })

  }

  handleOnClickButton(){

    if(this.props.message.connectionType==='blockchain'){

      const message = {
        count: this.state.count,
        message: this.state.message,
        price: this.state.price,
        author: this.state.author,
        date: this.state.date,
        step: this.state.step,        
      }  

      this.props.setMessage(message);

    }else{

      this.props.setNotification({
        message:config.notifications.cantSet,
        url: 'https://github.com/florianmaxim/msgx'
      });
      
    }
  }

  handleChange(event) {

    this.setState({
      startedTyping: true,
      message: event.target.value,
      count: Number(this.props.message.count)+1,
    });

    //If we are on the blockchain we are able to set the next msg...
    if(this.props.message.connectionType==='blockchain'){

      //console.log(this.props.message.price+'+'+this.props.message.step+'='+(Number(this.props.message.price)+Number(this.props.message.step)));

      this.setState({

        //caption: `${String(this.state.count)}. (${web3.eth.coinbase.toString().substr(0,8)}...`
        //caption: `send (${web3.eth.coinbase.toString().substr(0,8)}...)`,
        caption: `set ${this.state.count}.`,

        date: new Date(),

        author: String(web3.eth.coinbase),

        price: Number(this.props.message.price)+Number(this.props.message.step)
      })
    }  
  }

  toggleCurrency(){
    this.setState({currency:this.state.currency<config.currencies.length-1?this.state.currency+1:0})
  }

  renderPrice(){
    return `${((this.state.price/1000000000000000000)*config.currencies[this.state.currency][1]).toFixed(5)}`;
  }

  render() {
    return (
      <ComponentOuter>
           
          
          <ComponentNotificationsWrapper
            style={{
              height: this.props.notifications.closed?'0':'17.5vh',
            }}
          >

           <a href={`${this.props.notifications.url}`} target="blank">
            <ComponentNotificationsText
              style={{
                opacity: this.props.notifications.closed?'0':'1'
              }}
            >
              {this.props.notifications.message}
            </ComponentNotificationsText>
            </a>
            <ComponentNotificationsClose
              style={{
                opacity: this.props.notifications.closed?'0':'1'
              }}
              onClick={()=>this.props.closeNotification()}
            >
            ╳
            </ComponentNotificationsClose>

          </ComponentNotificationsWrapper>

            <ComponentTextarea
               value={`${this.state.message}`}
               onChange={(event) => {this.handleChange(event)}} 
            />

          <ComponentPriceWrapper>

            <ComponentPriceLine onClick={() => this.toggleCurrency()}>

              <ComponentPriceValue>{this.renderPrice()}</ComponentPriceValue>
              <ComponentPriceCurrency>{`${config.currencies[this.state.currency][0]}`}</ComponentPriceCurrency>
              
            </ComponentPriceLine>
            
            <ComponentButton 
              caption={this.state.caption} 
              onClick={() => this.handleOnClickButton()}   
            />

            <ComponentDate>{this.state.date.toString().substr(0,24)}</ComponentDate>

            <ComponentLogo/>

          </ComponentPriceWrapper>

          
      </ComponentOuter>
    );
  }

}

function props(state) {

  return {
    message: state.message,
    notifications: state.notifications
  };

}

function actions(dispatch){

  return bindActionCreators({

    getConnectionType: actionsMessage.getConnectionType,

    getCount: actionsMessage.getCount,
    getMessage: actionsMessage.getMessage,    
    getAuthor:  actionsMessage.getAuthor,
    getPrice:   actionsMessage.getPrice,  
    getStep:   actionsMessage.getStep,          
    getDate:    actionsMessage.getDate,    

    setMessage:  actionsMessage.setMessage,

    setNotification:   actionsNotifications.setNotification,
    closeNotification: actionsNotifications.closeNotification  

  }, dispatch);

}

export default connect(props, actions)(ContainerMessage);

/*
 <ComponentTextarea
          value={`${this.state.message}`}
          onChange={(event) => this.handleChange(event)} 
          />
*/