import react,{useContext} from 'react'
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity,TextInput} from 'react-native'
import BlogPostForm from './components/BlogPostForm'
import {Context as BlogContext} from './context/BlogContext'

const EditScreen = ({route,navigation}) => {
  const {state,editBlogPost}=useContext(BlogContext);
  const blogPost=state.find((blogPost)=>blogPost.id===route.params.id);
  return (
   <View>
    
     <BlogPostForm initialValues={{title:blogPost.title,content:blogPost.content}}
     onSubmit={(title,content)=>editBlogPost(route.params.id,title,content,()=>navigation.pop())}
     />
   </View>
  )
}

export default EditScreen
