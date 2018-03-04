import React from 'react';

import {Heading} from './Fruit_';

import ContainerFruits from '../containers/container-fruits';

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

            <div onClick={()=>this.handleOnClick()}>

                <Heading>

                    <h1>
                        Fruits
                    </h1>

                    <ContainerFruits/>

                </Heading>

            </div>
        );
    }
}


/* export default ({ match }) => (

    <BlockHeight>{match.params.blockHeight}</BlockHeight>

); */