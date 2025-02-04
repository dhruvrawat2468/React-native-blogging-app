import React, { useContext,useState} from 'react'
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity,TextInput} from 'react-native'
import { Context as BlogContext } from './context/BlogContext'
import BlogPostForm from './components/BlogPostForm'

const CreateScreen = ({navigation}) => {
    const{addBlogPost}=useContext(BlogContext);
    return(
        <BlogPostForm onSubmit={(title,content)=>addBlogPost(title,content,()=>navigation.navigate("Index"))}/>
    )
}

export default CreateScreen
