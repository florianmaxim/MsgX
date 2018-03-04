import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as fruits from '../actions/actions-fruits';

class ContainerFruits extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){

    addEventListener('click', () => this.props.fetchFruits())

  }

  render() {

    if(this.props.fruits===null){
      return (

        <h2>
          No fruits loaded.
        </h2>
      )
    }

    return (

      <div>

        {

          this.props.fruits.map((fruit, index) => {

            return (

              <div key={index}>

                <h1>{fruit.name}</h1>

              </div>

            );

          })

        }

      </div>

    );

  }

}

function props(state) {

  return {
    fruits: state.fruits
  };

}

function actions(dispatch){

  return bindActionCreators({

    fetchFruits: fruits.fetchFruits

  }, dispatch);

}

export default connect(props, actions)(ContainerFruits);