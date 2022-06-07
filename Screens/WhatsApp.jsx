import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as StorageAccessFramework from 'expo-file-system';
import { useState, useEffect } from 'react';

const { width } = Dimensions.get("screen")


const ImageRenderer = (props) =>{
    const { media } = props;
    
    return media.assets.map((x,i) => 
        x.mediaType !== 'video' && (
            <View key={i} style={{ width: '100%', height: 189 }}>
                <Image source={{uri: x.uri }} style={{ width: '100%', height: '90%' }} />
                <Text>{x.uri}</Text>
            </View>
        )                
    )
}

export default function WhatsApp() {
    const [ mediaFiles, setMediaFiles ] = useState({ assets: [] });

    const getMediaFiles = async () =>{
        const album = await MediaLibrary.getAlbumAsync("Pictures");

        // console.log(album);

        const media = await MediaLibrary.getAssetsAsync({
            mediaType: [ 'photo', 'video' ],
            album
        });

        setMediaFiles(media);

        // const saf = await StorageAccessFramework.readDirectoryAsync("file:///storage/emulated/0/Android/media/com.whatsapp/WhatsApp/Media/WhatsApp Images/Private");
        // console.log(saf)
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

            <ScrollView style={{ flex: 1, flexDirection: 'row', marginTop: 30, width: width, flexWrap: 'wrap' }}>
                <ImageRenderer media={mediaFiles} />
            </ScrollView>

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
