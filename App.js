import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import IndexScreen from './src/IndexScreen';
import  {Provider as BlogProvider}  from './src/context/BlogContext'; // Ensure correct import
import ShowScreen from './src/ShowScreen';
import CreateScreen from './src/CreateScreen';
import EditScreen from './src/EditScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Index" component={IndexScreen} options={{ title: "Blogs" }} />
        <Stack.Screen name="Show" component={ShowScreen} options={{ title: "ShowScreen" }} />
        <Stack.Screen name="Create" component={CreateScreen} options={{ title: "CreateScreen" }} />
        <Stack.Screen name="Edit" component={EditScreen} options={{ title: "EditScreen" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// ✅ Wrap the App inside BlogProvider
export default function MainApp() {
  return (
    <BlogProvider>
      <App />
    </BlogProvider>
  );
}

