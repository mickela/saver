import { Dimensions, StyleSheet, Text, View, TouchableOpacity, Alert, Image, ScrollView } from 'react-native';
import * as MediaLibrary from 'expo-media-library';
import * as StorageAccessFramework from 'expo-file-system';
import { useState, useEffect } from 'react';
import ImageCard from '../components/ImageCard';

const { width } = Dimensions.get("screen")


const ImageRenderer = (props) =>{
    const { media } = props;
    
    return media.assets.map((x,i) => 
        x.mediaType !== 'video' && (
            <ImageCard key={i} image={x} />
        )                
    )
}

export default function WhatsAppBusiness() {
    const [ mediaFiles, setMediaFiles ] = useState({ assets: [] });

    const getMediaFiles = async () =>{
        const album = await MediaLibrary.getAlbumAsync("Download");

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

            <ScrollView style={{ flex: 1, flexDirection: 'row', width: width, flexWrap: 'wrap' }}>
                <ImageRenderer media={mediaFiles} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        backgroundColor: '#14191f'
    },
});
