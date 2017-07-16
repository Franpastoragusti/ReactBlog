/**
 * Created by fran on 16/07/2017.
 */


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';

class PostShow extends Component{

    componentWillMount(){
        this.props.fetchPost(this.props.params.id)
    }
    render(){
        return(
         <div>Show post:{this.props.params.id}</div>
        )
    }
}

export default connect(null,{ fetchPost })(PostShow);