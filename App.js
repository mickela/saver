import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text, Image } from 'react-native';
import WhatsApp from './Screens/WhatsApp';
import WhatsAppBusiness from './Screens/WhatsAppBusiness';
import { StatusBar } from 'expo-status-bar';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

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

  const TabBarIcon = ({focused, img}) => {
    let image = require(`./assets/whatsapp2.png`) || require(`./assets/whatsapp.png`);
    
    return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <Image
          source={image}
          resizeMode="contain"
          style={{
              width: focused ? 60 : 40 ,
              height: focused ? 60 : 40,
              marginBottom: focused ? 30 : 0,
          }}
      />
    </View>
  )};

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="WhatsAppBusiness" component={WhatsAppBusiness} options={{
          title: "WhatsApp Business",
          ...headerStyles
        }} />
        <Stack.Screen name="WhatsApp" component={WhatsApp} options={{
          ...headerStyles
        }} />
      </Stack.Navigator> */}
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          style: {
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              elevation: 0,
              backgroundColor: "red",
              borderTopColor: "transparent",
              height: 100,
          },
          // tabBarBackground: {

          // },
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff"
      }}
    >
        <Tab.Screen name="WhatsApp" component={WhatsApp} options={{
          tabBarIcon: ({focused}) => <TabBarIcon focused={focused} img="./assets/whatsapp.png" /> }} />
        <Tab.Screen name="WhatsAppBusiness" component={WhatsAppBusiness} />
      </Tab.Navigator>
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