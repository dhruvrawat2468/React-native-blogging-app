import react,{useState,useContext} from "react";
import {View,Text,TextInput,StyleSheet,Button} from "react-native";
// import {Context as BlogContext} from "../context/BlogContext";
const BlogPostForm=({onSubmit,initialValues={title:'',content:''}})=>{
    const[title,setTitle]=useState(initialValues.title);
    const[content,setContent]=useState(initialValues.content);
  return (
    <View>
        <Text style={{marginHorizontal:5,fontSize:18}}>Enter Title</Text>
        <TextInput style={styles.input} value={title}onChangeText={xyz=>setTitle(xyz)}/>
        <Text style={{marginHorizontal:5,fontSize:18}}>Enter Content</Text>
        <TextInput style={styles.input1} value={content} onChangeText={xyz=>setContent(xyz)}/>
        <Button title='Save Blog Post' onPress={()=>onSubmit(title,content)}/>
    </View>
  )
}

const styles=StyleSheet.create({
    input:{
        fontSize:18,
        borderWidth:1,
        borderColor:'black',
        marginBottom:15,
        padding:5,
        margin:5
    },
    input1:{
      fontSize:18,
      borderWidth:1,
      borderColor:'black',
      marginBottom:15,
      padding:5,
      margin:5,
      height:100,
      textAlignVertical:'top'
    }
});
export default BlogPostForm;
