import React from 'react';

import Message from './containers/container-message';

import {Route, Switch} from 'react-router';

export default () =>

    <Switch>

        <Route path="/set/:message" component={Message} />

        <Route exactPath="/" component={Message} />

    </Switch>