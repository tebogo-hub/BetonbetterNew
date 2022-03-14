import React from 'react';
import { View, Text, ImageBackground, StyleSheet, ActivityIndicator } from 'react-native';


function Loader() {
  return (
    <ImageBackground
    style={styles.bannersContainer}>
    <Text style={{
        textAlign: 'center',
        marginTop: 50,
        color: "Black",
        fontSize: 18,}}>Welcome</Text>

    <View style={{

        flex: 1,
        justifyContent: "center"

    }}>
        <ActivityIndicator size="large" color="orange" />
        <Text style={{ position: 'relative', textAlign: 'center'}}>Loading...</Text>
    </View>

</ImageBackground>
  )
}

export default Loader
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:0,

},
bannersContainer: {
    position: "relative",
    width:"100%",
    height: "100%",
    left: 0,
    top: 0,
},
})