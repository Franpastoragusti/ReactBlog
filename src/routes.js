/**
 * Created by fran on 14/07/2017.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index'

const Greeting = () => {
    return <div>Hey there!</div>
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostIndex}/>
        <Route path="greet" component={Greeting}/>
        <Route path="greet2" component={Greeting}/>
        <Route path="greet3" component={Greeting}/>
        <Route path="greet4" component={Greeting}/>
    </Route>
)