/**
 * Created by fran on 14/07/2017.
 */

import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { reduxForm }  from 'redux-form';
import { createPost } from '../actions/index'
import { Link } from 'react-router'

const FIELDS = {
    title:{
        id:1,
        type: 'input',
        label: 'Title for Post',
    },
    categories: {
        id:2,
        type: 'input',
        label: 'Categories for Post',

    },
    content:{
        id:3,
        type: 'textarea',
        label: 'Content for Post',

    }
}

class PostsNew extends Component{

    static contextTypes={
        router:PropTypes.object
    }
    renderField(fieldConfig, field ){
        const fieldHelper = this.props.fields[field];

        return(
            <div key={fieldConfig.id} className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`}>
                <label>
                    {fieldConfig.label}
                    <fieldConfig.type type="text" className="form-control" {...fieldHelper}/>
                </label>
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
            </div>
        )
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
        const { handleSubmit } = this.props;


        return(
            <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
                <h3>Create a new post</h3>
                {_.map(FIELDS,this.renderField.bind(this))}
                <button type="submit" className="btn btn-success" >Submit</button>
                <Link to="/" className="btn btn-danger btn-cancel">Cancel</Link>

            </form>
        )
    }
}

function validate(values){
    const errors ={};

    _.each(FIELDS, (type, field)=>{
        if(!values[field]){
            errors[field]= `Enter a ${field }`
        }
    })

    return errors;
}
export default reduxForm({
    form: 'PostsNewForm',
    fields: _.keys(FIELDS),
    validate
},null, { createPost })(PostsNew);
