//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Home from './Screen/Home';
import Demo from './Screen/Demo'
import Studio from './Screen/Studio';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Mobile from './Screen/Mobile';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='home' screenOptions={{headerShown:false}}>
      <Stack.Screen name='home' component={Home} />
      <Stack.Screen name="demo" component={Demo} />
      <Stack.Screen name="studio" component={Studio} />
      <Stack.Screen name="mobile" component={Mobile} />

    </Stack.Navigator>
  </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
