import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, Text } from 'react-native';
import WhatsApp from './Screens/WhatsApp';
import WhatsAppBusiness from './Screens/WhatsAppBusiness';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="WhatsAppBusiness" component={WhatsAppBusiness} options={{
          title: "WhatsApp Business",
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }} />
        <Stack.Screen name="WhatsApp" component={WhatsApp} options />
      </Stack.Navigator>
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