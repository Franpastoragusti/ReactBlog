import Axios from 'axios';


export const FETCH_POSTS = 'FETCH_POSTS';
export const FETCH_POST = 'FETCH_POST';
export const CREATE_POST = 'CREATE_POST';
export const DELETE_POST = 'DELETE_POST';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=asdawdawdasdwadad';


export function fetchPosts() {

    const request = Axios.get(`${ROOT_URL}/posts${API_KEY}`);

    // TO make the request and implement thunk
    // return(dispatch) =>{
    //     request.then(({data})=>{
    //         dispatch({
    //             type: 'FETCH_POSTS',
    //             payload: data
    //         })
    //     })
    // }
    //
    return{
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPost(props){
    const request = Axios.post(`${ROOT_URL}/posts${API_KEY}`, props);

    return{
        type: CREATE_POST,
        payload: request
    }
}

export function fetchPost(id){

    const request = Axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return{
        type: FETCH_POST,
        payload: request
    }
}

export function deletePost(id){

    const request = Axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return{
        type: DELETE_POST,
        payload: request
    }
}