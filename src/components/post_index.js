/**
 * Created by fran on 14/07/2017.
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


class PostIndex extends Component{

    componentWillMount(){
        this.props.fetchPosts();
    }

    renderPosts(){
        return this.props.posts.map((post) => {
            return(

                <li className="list-group-item post" key={post.id}>
                    <Link to={'/posts/' + post.id}>
                        <span className="">{post.categories}</span>
                        <strong>{post.title}</strong>
                    </Link>
                </li>

            );
        });
    };
    render(){

        const transitionOptions = {
            transitionName:"fade",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 500
        }

         return (
            <div>
                <div className="text-xs-right">
                    <Link to="/posts/new" className="btn btn-primary">
                        Add a Post
                    </Link>
                </div>
                List of posts
                <h3>Posts</h3>
                <ul className="list-group">
                    <ReactCSSTransitionGroup {... transitionOptions }>
                    {this.renderPosts()}
                    </ReactCSSTransitionGroup>
                </ul>
            </div>
        )
    }

}

function mapStateToProps(state){

    return { posts: state.posts.all }
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

export default connect(mapStateToProps, { fetchPosts })(PostIndex);