import React, { useContext,useLayoutEffect } from 'react'
import { View, Text, FlatList, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { Context as BlogContext } from './context/BlogContext'
import {EvilIcons} from '@expo/vector-icons'

const ShowScreen = ({route,navigation}) => {
    const {state}=useContext(BlogContext);
    const blogPost=state.find((blogPost)=>blogPost.id===route.params.id);
    useLayoutEffect(() => {
      navigation.setOptions({
          headerRight: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Edit',{id:route.params.id})} >
                  <EvilIcons name="pencil" size={35} />
              </TouchableOpacity>
          ),
      });
  },[navigation]);
  return (
    <View>
        <Text>{blogPost.title}</Text>
        <Text>{blogPost.content}</Text>
    </View>
  )
}

export default ShowScreen
