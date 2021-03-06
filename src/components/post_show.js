/**
 * Created by fran on 16/07/2017.
 */


import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/index';
import { deletePost } from '../actions/index';
import { Link } from 'react-router'


class PostShow extends Component{


    static contextTypes={
        router:PropTypes.object
    }

    componentWillMount(){
        this.props.fetchPost(this.props.params.id)
    }

    onDeleteClick(){
         this.props.deletePost(this.props.params.id)
             .then(() => {
                 this.context.router.push('/')
             })
    }


    render(){
        const {post} = this.props;

        if(!post)
            return (<div>Loading...</div>)



        return(
         <div>
             <Link to="/">Back to index</Link>
             <button className="btn btn-danger delete" onClick={this.onDeleteClick.bind(this)}>Delete Post</button>
             <h3>{post.title}</h3>
             <h6>{post.categories}</h6>
             <p>{post.content}</p>
         </div>
        )
    }
}

function mapStateToProps(state){

    return { post: state.posts.post }
}

export default connect(mapStateToProps,{ fetchPost, deletePost })(PostShow);