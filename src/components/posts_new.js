/**
 * Created by fran on 14/07/2017.
 */


import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { createPost } from '../actions/index'
import { Link } from 'react-router'



class PostsNew extends Component{

    static contextTypes={
        router:PropTypes.object
    }

    onSubmit(props){
        this.props.createPost(props)
            .then(() => {
                //post created, user to the index
                //we navegate to the index calling this.context.router.push with the new path
                this.context.router.push('/')
            })
    }
    render(){
        const { fields:{ title, categories, content },handleSubmit } = this.props;


        return(
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Create a new post</h3>
                <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
                    <label>
                        Title
                        <input type="text" className="form-control" {...title}/>
                    </label>
                    <div className="text-help">
                        {title.touched ? title.error : ''}
                    </div>
                </div>
                <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
                    <label>
                        Categories
                        <input type="text" className="form-control" {...categories}/>
                    </label>
                    <div className="text-help">
                        {categories.touched ? categories.error : ''}
                    </div>
                </div>
                <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
                    <label>
                        Content
                        <textarea className="form-control" {...content}/>
                    </label>
                    <div className="text-help">
                        {content.touched ? content.error : ''}
                    </div>
                </div>
                <button type="submit" className="btn btn-success" >Submit</button>
                <Link to="/" className="btn btn-danger btn-cancel">Cancel</Link>

            </form>
        )
    }
}

function validate(values){
    const errors ={};

    if (!values.title){
        errors.title = 'Enter a Username';
    }
    if (!values.categories){
        errors.categories = 'Enter a categories';
    }
    if (!values.content){
        errors.content = 'Enter a content';
    }

    return errors;
}
export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title','categories','content'],
    validate
},null, { createPost })(PostsNew);
