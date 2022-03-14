import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, Linking, ScrollView } from 'react-native';
import { db } from '../config/Firebase';
import { getDocs, collection } from "firebase/firestore";



function Campaigns() {

  
  const TriggerMail = () => {
    Linking.openURL('mailto:teejaymellowgrind@gmail.com',)
  }

 
  const [campList, setCampList] = useState([]);
  useEffect(async () => {

    let list = [];

    try {

      const querySnapshot = await getDocs(collection(db, "Campaign"));
      querySnapshot.forEach((doc) => {

        console.log(doc.id, " => ", doc.data());

        list.push(doc.data());

      });
      setCampList(list);

    } catch (err) {

    }
  }, [])
  return (
    <View style={styles.container}>
      <View style={{ position: 'absolute', width: '100%', height: 100, backgroundColor: '#ffac2c' }}>
        <Text style={{ position: 'relative', textAlign: 'center', marginTop: 50, fontSize: 19, color: 'white', fontWeight: 'bold' }}>Campaigns</Text>
      </View>

      <View style={{ marginTop: 100, }}>
        {campList.map((data) => (
          <View style={styles.CardView}>
            <Text style={{ position: 'relative', textAlign: 'center', marginTop: 10, color: 'rgba(255, 172, 44, 1)', fontSize: 18, fontWeight: 'bold', }}>{data.campName}</Text>
            <Text style={{ position: 'absolute', marginTop: 35, color: 'rgba(255, 172, 44)', fontSize: 9, marginLeft: 10, marginRight: 10, }}>{data.campDescription}</Text>
            <Text style={{ position: 'relative', marginLeft: 10, marginTop: 40, fontWeight: 'bold', }}>
              Donate to Foundation  for kids to receive Food.
            </Text>
            <Text style={{ position: 'absolute', marginLeft: 10, fontSize: 9, fontWeight: '500', marginTop: 100, color: 'grey' }}>Phone: {data.campPhone}</Text>
            <Text style={{ position: 'absolute', marginLeft: 10, fontSize: 9, fontWeight: '500', marginTop: 120, color: 'grey' }}>Email: {data.campEmail}</Text>
            <Text style={{ position: 'absolute', marginLeft: 10, fontSize: 9, fontWeight: '500', marginTop: 135, color: 'grey' }}>City: {data.campCity}</Text>
            <TouchableOpacity style={styles.Button2} onPress={TriggerMail}>
              <Text style={{ color: 'white', textAlign: 'center', marginTop: 5, fontSize: 10, }}>Email me</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  )
}

export default Campaigns

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  Button2: {
    position: 'absolute',
    top: 150,
    alignSelf: 'center',
    backgroundColor: '#ffac2c',
    height: 30,
    width: 380,
    borderRadius: 100,
    marginLeft: 10,
  },
  CardView: {
    position: 'relative', 
    width: 390, 
    height: 190, 
    backgroundColor: 'rgba(229, 229, 229, 1)', 
    alignSelf: 'center',
    marginTop:10,
    borderRadius: 16, 
    
  }
})