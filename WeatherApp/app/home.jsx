
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { MyComponent } from '../components/AppBar/AppBar';
import { Cards } from '../components/Cards/Card'

export default function Home() {
  return (

      <View>
      <MyComponent />

      <View style={styles.content}>

      <LinearGradient
        // Background Linear Gradient
        colors={['rgba(0,0,0,0.6)', 'transparent']}
        style={styles.background}
      />

        <View style={styles.rowTemp}>
          <View style={styles.temperatura}>
            <Text style={styles.temp}>27</Text>
            <Text style={styles.prop}>°C</Text>

          </View>

          <Image
            style={styles.img}
            source={require('../assets/images/icons/sol.png')}
          />
        </View>
        <View style={styles.row}>
          <Text style={styles.status}>Nublado</Text>

        </View>


        <View style={styles.row}>
          <Text style={styles.city}>Ipuã, São Paulo</Text>
          
        </View>
        <View style={styles.row}>
          <Text style={styles.date}>Segunda, 20 Março</Text>
          
        </View>
        
        <View>
          <Cards />

        </View>

      </View>
      
    </View>

  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#3e0b79',
    height: '100%',
    paddingLeft: '20px',
    paddingRight: '20px',
    color: '#ffffff',
    height: '100%'

  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'roboto',
    width: '100%',
    color: '#ffffff'
    
  },
  temp:{
    fontSize: '4.5em',
    fontWeight: 'bold',
    color: '#ffffff'
  },
  prop: {
    display: 'flex',
    height: '25px',
    fontSize: '1.5em',
    height: '80% !important',
    fontWeight: 'bold',
    color: '#ffffff'
  },
  img: {
    width: '150px',
    height: '150px',
    color: '#ffffff'
  },
  temperatura: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'baseline',
    color: '#ffffff'

  },
  rowTemp: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'roboto',
    width: '100%',
    justifyContent: 'space-between',
    display: 'flex',
    color: '#ffffff'
  },
  status: {
    display: 'flex',
    alignContent: 'flex-start',
    fontSize: '1.5em',
    marginBottom: '5px',
    fontWeight: 'bold',
    color: '#ffffff'
  },
  city: {
    fontSize: '1.2em',
    color: '#ffffff'
  },
  date: {
    fontSize: '1.2em',
    color: '#ffffff'
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 180,
  },
  card: {
    backgroundColor: '#fffff',
  }
  

});