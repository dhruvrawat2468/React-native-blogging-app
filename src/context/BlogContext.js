import react,{useState} from "react";
// import { useContext } from "react";
import jsonServer from "../api/jsonServer";
import createDataContext from "./createDataContext";

const blogReducer=(state,action)=>{
    switch(action.type){
        case 'get_blogpost':
            return action.payload;
    
        case 'edit_blogpost':
            return state.map((blogPost)=>{
                return blogPost.id===action.payload.id?action.payload:blogPost;
            });

        case 'delete_blogpost':
            return state.filter((blogPost)=>blogPost.id!==action.payload);
        default:
            return state;
    }
};
const addBlogPost=(dispatch)=>{
    return async(title,content,callback)=>{
        await jsonServer.post('/blogPosts',{title,content});
    callback();
    };
};
const getBlogPost=dispatch=>{
    return async()=>{
        const response=await jsonServer.get('/blogPosts');
        // console.log(response.data);
        dispatch({type:'get_blogpost',payload:response.data});
    }
}
const deleteBlogPost=(dispatch)=>{
    return async(id)=>{
        const response=await jsonServer.delete(`/blogPosts/${id}`);
        console.log(response.data);
        dispatch({type:'delete_blogpost',payload:id});
    };
};
const editBlogPost=dispatch=>{
    return async(id,title,content,callback)=>{
        await jsonServer.put(`/blogPosts/${id}`,{title,content});
        dispatch({type:'edit_blogpost',payload:{id,title,content}});
        callback();
    }
};
export const {Context,Provider}=createDataContext(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost,getBlogPost},[]);