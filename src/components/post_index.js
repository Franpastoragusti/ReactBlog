/**
 * Created by fran on 14/07/2017.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'

class PostIndex extends Component{

    componentWillMount(){
        this.props.fetchPosts();
    }

    render(){
        return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of posts
            </div>
        )
    }

}


/*to refactor to ES6 the function mapDispatchToProps, change
this{{{
  function mapDispathToProps(dispatch){
     return bindActionCreators({ fetchWeather }, dispatch)
 }
 and import { bindActionCreators } from 'redux';

 }}}for this{{{
    export default connect(null, { fetchPosts })(PostIndex)
    on the connect function
 }}}
}*/

export default connect(null, { fetchPosts })(PostIndex);