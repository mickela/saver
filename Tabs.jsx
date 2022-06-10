import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image } from 'react-native';
import WhatsApp from './Screens/WhatsApp';
import WhatsAppBusiness from './Screens/WhatsAppBusiness';

const Tab = createBottomTabNavigator();


export const Tabs = () =>{
    const TabBarIcon = ({focused, img}) => {
        let image = img == 'business' ? require(`./assets/whatsapp-business.png`) : require(`./assets/whatsapp2.png`);
        
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
            tabBarIcon: ({focused}) => <TabBarIcon focused={focused} img="personal" /> }} />

            <Tab.Screen name="WhatsApp Business" component={WhatsAppBusiness} options={{
            tabBarIcon: ({focused}) => <TabBarIcon focused={focused} img="business" /> }} />
        </Tab.Navigator>
    )
  
}

export default Tabs