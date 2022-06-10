import React from "react";
import {
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
const { width } = Dimensions.get("screen");
import * as Sharing from "expo-sharing";

const ImageCard = (props) => {
  const { image, navigation } = props;

  const openShareDialogAsync = async (uri) => {
    if (Platform.OS === "web") {
      alert(`Uh oh, sharing isn't available on your platform`);
      return;
    }

    await Sharing.shareAsync(uri);
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ImageView", { uri: image.uri })}
      style={styles.imageCard}
    >
      <Image source={{ uri: image.uri }} style={styles.image} />
      <View style={styles.saveButtonView}>
        <TouchableOpacity
          onPress={() => openShareDialogAsync(image.uri)}
          style={styles.saveBtn}
        >
          <Text>Share 🚀</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.saveBtn}>
          <Text>Save ⚡</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ImageCard;

const styles = StyleSheet.create({
  imageCard: {
    width: width,
    height: 100,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "black",
    marginBottom: 10,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
  },
  image: {
    width: "30%",
    height: "100%",
  },
  saveButtonView: {
    paddingRight: 15,
  },
  saveBtn: {
    backgroundColor: "#f4511e",
    padding: 7,
    borderRadius: 50,
    marginVertical: 5,
  },
});
