/**
 * Created by fran on 14/07/2017.
 */

import React, { Component } from 'react';


class PostIndex extends Component{

    componentWillMount(){
        console.log('this wuld be a good time to call an action creator to fetch post')
    }

    render(){
        return (
            <div>List of posts</div>
        )
    }

}

export default PostIndex;