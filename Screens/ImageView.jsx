import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';
const { width, height } = Dimensions.get("screen");
import { StatusBar } from 'expo-status-bar';


export class ImageView extends Component {
  render() {
    return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: '#0b0f13' }}>
            <View style={{ width, height: 500 }}>
                <Image source={{uri: this.props.route.params.uri}} style={{ width: '100%', height: '100%' }} />
            </View>
            <StatusBar style='light' backgroundColor='black' />
        </View>
    )
  }
}

export default ImageView