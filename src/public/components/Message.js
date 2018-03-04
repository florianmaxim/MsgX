import React from 'react';

export default class Fruit extends React.Component {

    constructor(props){

        super(props)

        this.state = {

            name: props.match.params.fruitName
            
        }

    }

    handleOnClick(){
    }

    render(){

        return(

            <h1>
                {this.props.message.message}
            </h1>

        );
    }
}