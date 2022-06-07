import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import { useState, useEffect } from 'react';


const ImageRenderer = (props) =>{
    const { media } = props;
    
    return media.assets.map(x => 
        x.mediaType !== 'video' && (
            <Image source={{uri: x.uri }} style={{ width: '50%', height: 159 }} />
        )                
    )
}

export default function WhatsApp() {
    const [ mediaFiles, setMediaFiles ] = useState({ assets: [] });

    const getMediaFiles = async () =>{
        const media = await MediaLibrary.getAssetsAsync({
            mediaType: [ 'photo', 'video' ]
        });

        setMediaFiles(media);
    }

    const getPermissions = async () =>{
        
        const permissionAlert = () =>{
        Alert.alert("Permission required", "This app needs permission to read media files!"
            [
            {
                text: "Proceed",
                onPress: () => getFiles()
            },
            {
                text: "Cancel",
                onPress: permissionAlert()
            }
            ]
        );
        }
        
        // Get user permission
        const permission = await MediaLibrary.getPermissionsAsync();

        // If permission was previously granted
        if(permission.granted){
            getMediaFiles();
        }

        // Probably first time launching app
        if(permission.granted == false && permission.canAskAgain == true){
            const {status, canAskAgain} = await MediaLibrary.requestPermissionsAsync();

            if(status == 'denied' && canAskAgain == true){
                permissionAlert();
            }

            if(status == 'granted'){
                getMediaFiles();
            }

            if(status == 'denied' && canAskAgain == false){
                permissionAlert();
            }
        }
    }

    useEffect(() => {
      getPermissions();
    }, [])
    

    return (
        <View style={styles.container}>

            <View style={{ flex: 1, flexDirection: 'row', marginTop: 30, width: 406, flexWrap: 'wrap' }}>
                <ImageRenderer media={mediaFiles} />
            </View>

            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
    },
});
