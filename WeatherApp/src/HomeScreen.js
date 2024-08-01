import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { LinearGradient } from 'expo-linear-gradient';
const mapPin = <Icon name="map-marker-alt" size={30} color="#629bed" />;

export default function Home() {
  return (
    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(255,228,225,0.8)', 'transparent']}
        style={styles.background}
      />
      <View style={styles.card}>
        <View style={styles.row}>
          {mapPin}
          <Text style={styles.city}>London</Text>
        </View>
        <Text style={styles.date}>Mon, 20 March</Text>
        <View style={styles.row}>
          <Text style={styles.temp}>27</Text>
          <Text style={styles.prop}>°C</Text>
        </View>
        
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'rgb(224,255,255)',
    
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'roboto',
    marginTop: '25px',
    
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
  card: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    width: '80%',
    borderRadius: '20px',
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: '15px',
    height: '95%'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 300,
  },
  temp:{
    fontSize: '5em'
  },
  prop: {
    textAlign: 'start',
    display: 'flex',
    alignItems: 'start',
    height: '45%',
    fontSize: '1.5em'
  }
});
