import React from 'react';

import About from './components/About';

import Fruit from './components/Fruit';

import {Route, Switch} from 'react-router';

export default () =>

    <Switch>

        <Route path="/fruit/:fruitName" component={Fruit} />

        <Route path="/fruits" component={Fruit} />

        <Route path="/about" component={About} />

        <Route exactPath="/" component={About} />

    </Switch>