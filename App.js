import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Image } from 'react-native';
import ImageView from './Screens/ImageView';
import { StatusBar } from 'expo-status-bar';
import Tabs from './Tabs';
const Stack = createNativeStackNavigator();

export default function App() {
  const headerStyles = {
    headerStyle: {
      backgroundColor: "#f4511e",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Tabs'}>
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }}/>
        <Stack.Screen name="ImageView" component={ImageView} options={{
          title: "Image View",
          headerTintColor: "#fff",
          headerTransparent: true,
          headerTitle: ""
        }} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'black',
    paddingTop: 50,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  headerText: {
    fontSize: 25,
    color: 'white'
  }
});