import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
const mapPin = <Icon name="map-marker-alt" size={30} color="#629bed" />;

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {mapPin}
        <Text style={styles.city}>London</Text>
      </View>
      <Text style={styles.date}>Mon, 20 March</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'roboto'
  },
  city: {
    marginLeft: 8,
    fontSize: 30,
    color: '#216cdb',
  },
  date: {
    fontSize: 16,
    color: '#216cdb',
    marginTop: 4,
  },
});
