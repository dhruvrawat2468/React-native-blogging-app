import react,{useContext,useLayoutEffect,useEffect} from 'react'
import {View,Text,FlatList,Button,StyleSheet,TouchableOpacity} from 'react-native'
import{Context as BlogContext} from './context/BlogContext'
import {Feather} from '@expo/vector-icons'
const IndexScreen = ({navigation}) => {
    const {state,deleteBlogPost,getBlogPost}=useContext(BlogContext);
    useEffect(()=>{
        getBlogPost();
     },[]);
    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: '#78290F', // Change this to your desired color
            },
            headerTintColor: 'white', 
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Create')} style={{ marginRight: 15 }}>
                    <Feather name="plus" size={30} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);
   

    return (
       
        <View style={styles.bg}>
            
            <FlatList data={state} keyExtractor={(blogPost)=>blogPost.title} renderItem={({item})=>{
                return(
                    <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                 <View style={styles.row}>
                    <Text style={styles.title}> 
                        {item.title}

                    </Text>
                    <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                    <Feather style={styles.icon} name="trash" />
                    </TouchableOpacity>
                </View>
                </TouchableOpacity>
                )
            }}/>
        </View>
        
    )
}

const styles=StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:10,
        borderTopWidth:1,
        borderColor:'gray',
        borderRadius:5,
        backgroundColor:'white',
        marginHorizontal:5,
        marginVertical:5
    },
    title:{
        fontSize:18
    },
    icon:{
        fontSize:24
    },
    bg:{
        flex:1,
        backgroundColor:'#432818'
    }
})
export default IndexScreen;