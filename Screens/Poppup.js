import React from 'react';
import { Entypo, SimpleLineIcons  } from '@expo/vector-icons';
import getDirections from 'react-native-google-maps-directions'
import { View, ImageBackground, TouchableOpacity, Text, StyleSheet, SafeAreaView } from 'react-native';



function Poppup( { navigation, route }) {
  const myData = route.params

  const handleGetDirections = () => {
      const data = {
          source: {
              latitude: -28.73226,
              longitude:  24.76232,
          },
          destination: {
              latitude: -28.7651928982,
              longitude: 24.7582140736
          },
          params: [
              {
                  key: "travelmode",
                  value: "driving"        // may be "walking", "bicycling" or "transit" as well
              },
              {
                  key: "dir_action",
                  value: "navigate"       // this instantly initializes navigation using the given travel mode
              }
          ],
          waypoints: [
              {
                  latitude: -33.8600025,
                  longitude: 18.697452
              },
              {
                  latitude: -33.8600026,
                  longitude: 18.697453
              },
              {
                  latitude: -33.8600036,
                  longitude: 18.697493
              }
          ]
      }

      getDirections(data)
  }
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.imageContainer} source={require('../assets/Background/children.jpg')} />
      <View>
        <Text style={{ position: 'absolute', marginLeft: 10, marginTop: 255, color: 'rgba(255, 172, 44, 1)', fontSize: 18, fontWeight: 'bold', }}>{myData.orgName}</Text>
        <Text style={{ position: 'absolute', marginLeft: 10, fontSize: 12, marginTop: 280, marginRight: 10, color: 'grey' }}>{myData.orgDescription}</Text>


        <Text style={{ position: 'absolute', marginLeft: 10, marginTop: 355, color: 'rgba(255, 172, 44, 1)', fontSize: 15, fontWeight: 'bold', }}>Contact Information</Text>
        <Text style={{ position: 'absolute', marginLeft: 10, fontSize: 11, fontWeight: '500', marginTop: 385, color: 'grey' }}>Phone: {myData.orgPhone}</Text>
        <Text style={{ position: 'absolute', marginLeft: 10, fontSize: 11, fontWeight: '500', marginTop: 405, color: 'grey' }}>Email: {myData.orgEmail}</Text>
        <Text style={{ position: 'absolute', marginLeft: 10, fontSize: 11, fontWeight: '500', marginTop: 425, color: 'grey' }}>City: {myData.orgCity}</Text>
        <Text style={{ position: 'absolute', marginLeft: 10, fontSize: 11, fontWeight: '500', marginTop: 445, color: 'grey' }}>Code: {myData.orgZip}</Text>

        <Text style={{ position: 'absolute', marginLeft: 12, marginTop: 490, color: 'rgba(255, 172, 44, 1)', fontSize: 15, fontWeight: 'bold', }}>Location/My address</Text>
      
        <Text style={{ position: 'absolute', marginLeft: 30, fontSize: 11, fontWeight: '500', marginTop: 520, color: 'grey' }}>{myData.orgAddress}</Text>
        <TouchableOpacity  onPress={handleGetDirections}><SimpleLineIcons name="location-pin" size={24} color="black" style={{ position: 'relative', marginTop: 515, color: 'grey',  marginLeft: 5 }} /></TouchableOpacity>
       

        <Text style={{ position: 'absolute', marginLeft: 10, marginTop: 550, color: 'rgba(255, 172, 44, 1)', fontSize: 15, fontWeight: 'bold', }}>About us</Text>
        <Text style={{ position: 'absolute', marginLeft: 10, fontSize: 11, fontWeight: '500', marginTop: 575, marginRight: 10, color: 'grey' }}>{myData.orgAbout}</Text>

        <TouchableOpacity style={styles.Button2} onPress={() =>navigation.navigate('Donate')}>
          <Text style={{ position: 'relative', color: 'white', textAlign:'center', marginTop: 10, fontSize: 18, }}>Next</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}

export default Poppup

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    position: 'absolute',
    width: "100%",
    height: 250,
    marginTop: 0,
    marginLeft: 0,
    marginRight: 0,
  },
  Button2: {
    position: 'absolute',
    top: 750,
    alignSelf: 'center',
    backgroundColor: '#ffac2c',
    height: 45,
    width: 200,
    borderRadius: 100,
  },
})
