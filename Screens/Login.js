import React, { useState } from 'react';
import { StyleSheet, TextInput, Text, TouchableOpacity, SafeAreaView } from 'react-native';

import Signin from '../auth/FirebaseLogin';
export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const login = (() => {
    Signin(email, password, navigation)
    navigation.navigate("Home")

  })
  const loadSc = () => {
    navigation.navigate("Loader")

  }
  const load = () => {
    loadSc()
    setTimeout(function time() {
      navigation.navigate("Home")

    }, 5000)
  }

  return (
    <SafeAreaView style={styles.container}>

      <Text style={{ position: 'absolute', marginTop: 97, left: 42, fontSize: 24, color: 'rgba(94, 209, 253, 1)' }}>Bet</Text>
      <Text style={{ position: 'absolute', marginTop: 97, left: 80, fontSize: 24, color: 'rgba(94, 209, 253, 1)' }}>On</Text>
      <Text style={{ position: 'absolute', marginTop: 120, left: 42, fontSize: 24, color: 'rgba(184, 129, 207, 1)', }}>Better</Text>

      <TextInput
        placeholder="Username"
        style={styles.input}
        onChange={(email) => setEmail(email)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input2}
        secureTextEntry={true}
        onChange={(password) => setPassword(password)}
      />

      <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 300, }}>Dont have account?</Text>
      <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('Signup')}>
        <Text style={{ color: 'blue' }}>Sign up</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.Button2}  onPress={() => load()}>
        <Text style={{ position: 'relative', color: 'white', marginTop: 10, fontSize: 18, textAlign: 'center' }}>Sign in</Text>
      </TouchableOpacity>


      <TouchableOpacity style={styles.Button3} onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={{ color: '#ffac2c' }}>Forgot Password ?</Text>
      </TouchableOpacity>

    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  input: {
    position: 'absolute',
    marginTop: 200,
    borderWidth: 1,
    width: 300,
    height: 42,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ffac2c'
  },
  input2: {
    position: 'absolute',
    marginTop: 250,
    borderWidth: 1,
    width: 300,
    height: 42,
    alignSelf: 'center',
    padding: 10,
    borderRadius: 10,
    borderColor: '#ffac2c'
  },
  Button: {
    position: 'absolute',
    top: 350,
    alignSelf: 'center',
  },
  Button2: {
    position: 'absolute',
    top: 400,
    alignSelf: 'center',
    backgroundColor: '#ffac2c',
    height: 45,
    width: 200,
    borderRadius: 100,
  },
  Button3: {
    position: 'absolute',
    top: 590,
    alignSelf: 'center',
  }


})


