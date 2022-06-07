import React from 'react';
import { Dimensions, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
const { width } = Dimensions.get("screen")


const ImageCard = (props) =>{
    const { image } = props;
    return(
        <TouchableOpacity onPress={()=> alert('View '+image.filename)} style={styles.imageCard}>
            <Image source={{uri: image.uri }} style={styles.image} />
            <View style={styles.saveButtonView}>
                <TouchableOpacity  style={styles.saveBtn}>
                    <Text>Save ⚡</Text>
                </TouchableOpacity>
            </View>

            {/* <Text>{image.uri}</Text> */}
        </TouchableOpacity>
    )
}

export default ImageCard;

const styles = StyleSheet.create({
    imageCard: {
        width: width,
        height: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'black',
        marginBottom: 10,
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30
    },
    image: {
        width: '30%', 
        height: '100%',
    },
    saveButtonView: {
        paddingRight: 10
    },
    saveBtn: {
        backgroundColor: 'orange',
        padding: 10,
        borderRadius: 50
    }
})