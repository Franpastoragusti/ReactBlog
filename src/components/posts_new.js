/**
 * Created by fran on 14/07/2017.
 */


import React, { Component } from 'react';
import { reduxForm }  from 'redux-form';
import { createPost } from '../actions/index'


class PostsNew extends Component{
    render(){
        const { fields:{ title, categories, content },handleSubmit } = this.props;


        return(
            <form onSubmit={ handleSubmit(this.props.createPost) }>
                <h3>Create a new post</h3>
                <div className="form-group">
                    <label>
                        Title
                        <input type="text" className="form-control" {...title}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Categories
                        <input type="text" className="form-control" {...categories}/>
                    </label>
                </div>
                <div className="form-group">
                    <label>
                        Content
                        <textarea className="form-control" {...content}/>
                    </label>
                </div>
                <button type="submit" className="btn btn-success" >Submit</button>

            </form>
        )
    }
}


export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title','categories','content']
},null, { createPost })(PostsNew);
