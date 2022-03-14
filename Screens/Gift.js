import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground,  } from 'react-native';
import { Ionicons, MaterialCommunityIcons, } from '@expo/vector-icons';

function Gift({ navigation }) {
  return (
    <View>


      <Text>teejay</Text>
      <View style={{ position: 'absolute', width: '100%', height: 100, backgroundColor: '#ffac2c' }}>
        <Text style={{ position: 'relative', textAlign: 'center', marginTop: 50, fontSize: 19, color: 'white', fontWeight: 'bold'}}>Daily Gifts</Text>
      </View>
      <ImageBackground style={styles.imageContainer} source={require('../assets/Background/backChild.jpg')} />

      <TouchableOpacity   onPress={()=> navigation.navigate('ContactForm', "Daily meals")} style={{ position: 'relative', width: 390, height: 100, backgroundColor: 'rgba(229, 229, 229, 1)', alignSelf: 'center', top: 365, borderRadius: 16, boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.5)' }}>
        <View>
          <Text style={{ position: 'relative', textAlign: 'center', marginTop: 10, fontSize: 24, fontWeight: 'bold' }}>Food drive</Text>
          <Text style={{ position: 'relative', marginLeft: 130, marginTop: 0, fontSize: 18, }}>Daily meals</Text>
        </View>
        <View style={{ position: 'absolute', width: 100, height: 80, backgroundColor: 'rgba(255, 172, 44, 1)', marginTop: 10, marginLeft: 10, borderRadius: 16, boxSizing: 'border-box' }}>
          <View>
            <Ionicons name="fast-food" size={50} color="white" style={{ position: 'absolute', alignSelf: 'center', top: 10, }} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=> navigation.navigate('ContactForm', "Help Ophens")} style={{ position: 'relative', width: 390, height: 100, backgroundColor: 'rgba(229, 229, 229, 1)', alignSelf: 'center', top: 375, borderRadius: 16, boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.5)' }}>
        <View>
          <Text style={{ position: 'relative', marginLeft: 145, marginTop: 10, fontSize: 24, fontWeight: 'bold' }}>Help Ophans</Text>
          <Text style={{ position: 'relative', marginLeft: 145, marginTop: 0, fontSize: 18, }}>Add Hope</Text>
        </View>
        <View style={{ position: 'absolute', width: 100, height: 80, backgroundColor: 'rgba(255, 172, 44, 1)', marginTop: 10, marginLeft: 10, borderRadius: 16, boxSizing: 'border-box' }}>
          <View>
            <MaterialCommunityIcons name="human-female-girl" size={50} color="white" style={{ position: 'absolute', alignSelf: 'center', top: 10, }} />
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity  onPress={()=> navigation.navigate('ContactForm', "School Project")} style={{ position: 'relative', width: 390, height: 100, backgroundColor: 'rgba(229, 229, 229, 1)', alignSelf: 'center', top: 385, borderRadius: 16, boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.5)' }}>
        <View>
          <Text style={{ position: 'relative', marginLeft: 145, marginTop: 10, fontSize: 24, fontWeight: 'bold' }}>Scool Projects</Text>
          <Text style={{ position: 'relative', marginLeft: 145, marginTop: 0, fontSize: 18, }}>Home works</Text>
        </View>
        <View style={{ position: 'absolute', width: 100, height: 80, backgroundColor: 'rgba(255, 172, 44, 1)', marginTop: 10, marginLeft: 10, borderRadius: 16, boxSizing: 'border-box' }}>
          <View>
            <Ionicons name="school-sharp" size={50} color="white" style={{ position: 'absolute', alignSelf: 'center', top: 10, }} />
          </View>
        </View>
      </TouchableOpacity>

    </View>
  )
}

export default Gift
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },
  imageContainer: {
    position: 'absolute',
    width: "100%",
    height: 250,
    marginTop: 100,
    marginLeft: 0,
    marginRight: 0,
  },
})
