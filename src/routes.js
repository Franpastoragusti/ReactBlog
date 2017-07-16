/**
 * Created by fran on 14/07/2017.
 */
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/post_index';
import PostsNew from './components/posts_new';
import PostShow from './components/post_show';

const Greeting = () => {
    return <div>Hey there!</div>
}

export default (
    <Route path="/" component={App}>
        <IndexRoute component={PostIndex}/>
        <Route path="posts/new" components={PostsNew}/>
        <Route path="post/:id" components={PostShow}/>
    </Route>
)