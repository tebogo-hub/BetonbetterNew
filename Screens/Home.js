import React, { useState, useEffect } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, Button, Dimension } from 'react-native';
import { db } from '../config/Firebase';
import { getDocs, collection } from "firebase/firestore";


function Home({ navigation }) {

  const [ngoList, setNgoList] = useState([]);

  useEffect(async () => {

    let list = [];

    try {

      const querySnapshot = await getDocs(collection(db, "ngos"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());

        list.push(doc.data());

      });
      setNgoList(list);

    } catch (err) {

    }
  }, [])



  return (
    <View style={styles.container}>
      <View>
        <ImageBackground source={require('../assets/Background/run.jpg')} style={{ flex: 1, alignItems: 'center', width: '100%', height: 400, }}>
          <Text style={{ position: 'absolute', marginTop: 340, left: 15, fontSize: 24, color: 'white' }}>Bet</Text>
          <Text style={{ position: 'absolute', marginTop: 340, left: 55, fontSize: 24, color: 'rgba(94, 209, 253, 1)' }}>On</Text>
          <Text style={{ position: 'absolute', marginTop: 360, left: 15, fontSize: 24, color: 'rgba(184, 129, 207, 1)', }}>Better</Text>
        </ImageBackground>
      </View>


      <ScrollView style={styles.ScrollView}
        horizontal={true}
      >

      </ScrollView>
      <View style={{ flex: 1, marginTop: 405, }}>
        {ngoList.map((data) => (
          <TouchableOpacity onPress={() => navigation.navigate('Poppup', data)} style={styles.TouchableOpacityCard}>
            <Text style={{ position: 'absolute', marginLeft: 100, marginTop: 10, color: 'rgba(255, 172, 44, 1)', fontSize: 10, fontWeight: 'bold', }}>{data.orgName}</Text>
            <ImageBackground style={styles.imageContainer} source={require('../assets/Background/children.jpg')} />
            <Text style={{ position: 'absolute', marginLeft: 100, fontSize: 12, fontWeight: 'bold', marginTop: 35, marginRight: 10, }}>{data.orgDescription.substring(0, 20)}....</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.Text1}>
        <Text style={styles.Text2}>New campaigns</Text>
        <Text style={styles.Text3}>
          An NGO’s primary goal is to uplift society and raise awareness about a serious cause.
          Community engagement is arguably PR in literal form. Any campaign run by an NGO affects a community directly and indirectly.
          As a PR manager or campaign leader, you need to evaluate your internal communication strategy.

        </Text>
        <View style={{ left: 10, marginTop: 10, }}>
          <TouchableOpacity onPress={() => navigation.navigate('Campaigns')}><Text style={{ fontSize: 12, color: 'white' }}>See all....</Text></TouchableOpacity>
        </View>


      </View>
      <View style={{ marginTop: 335, }}>
        <Button title="Send gift" onPress={() => navigation.navigate('Gift')} color="rgba(255, 172, 44, 1)" />
      </View>


    </View>
  )
        
}


export default Home

const styles = StyleSheet.create({
  container: {

  },
  imageContainer: {
    position: 'absolute',
    width: 80,
    height: 80,
    marginTop: 10,
    marginLeft: 10,
    borderRadius: 16,
  },
  Button2: {
    marginTop: 10,
    marginLeft: 10,
  },
  ScrollView: {
    position: 'absolute',
    width: '100%',
    height: 155,
    backgroundColor: 'lightgray',
    marginTop: 400,
  },
  Text1: {
    position: 'absolute',
    width: "100%",
    height: 225,
    backgroundColor: 'gray',
    top: 550,
    alignSelf: 'center'
  },
  Text2: {
    position: 'absolute',
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
    fontSize: 18,
    fontWeight: "500",
  },
  TouchableOpacityCard: {
    position: 'absolute',
    width: 220,
    height: 130,
    backgroundColor: 'white',
    marginLeft: 10,
    marginTop: 5,
    borderRadius: 16,
  },
  Text3: {
    marginTop: 39,
    marginLeft: 10,
    fontSize: 9,
    fontWeight: '500',
    color: 'white'
  },
  BottomButton: {
    // position: 'relative',
    // alignSelf: 'center',
    // backgroundColor: "rgba(255, 172, 44, 1)",
    // width: "100%",
    // height: 180,
  },
  sendme: {
    position: 'relative',
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    marginTop: 10,
  },
  Button3: {
    position: 'absolute',
    top: 200,
    alignSelf: 'center',
    backgroundColor: '#ffac2c',
    height: 45,
    width: 200,
    borderRadius: 100,
  },





})