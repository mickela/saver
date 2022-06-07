import { StyleSheet, View, Text } from 'react-native';
import WhatsApp from './Screens/WhatsApp';

export default function App() {
  return (
    <>
      <View style={styles.header}>
        <Text style={styles.headerText}>WhatsApp Status Saver</Text>
      </View>

      <WhatsApp />
    </>
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