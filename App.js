import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchaleOpacity } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { StorageAccessFramework } from 'expo-file-system';




export default function App() {

  const getFiles = async () =>{
    // Requests permissions for external directory
    const permissions = await StorageAccessFramework.requestDirectoryPermissionsAsync();

    if (permissions.granted) {
      // Gets SAF URI from response
      const uri = permissions.directoryUri;

      // Gets all files inside of selected directory
      const files = await StorageAccessFramework.readDirectoryAsync(uri);
      alert(`Files inside ${uri}:\n\n${JSON.stringify(files)}`);
    }
  }  

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start 1 working on your app!</Text>
      <TouchaleOpacity onPress={getFiles()}>Click me!</TouchaleOpacity>
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
  },
});
