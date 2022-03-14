import React from 'react';
import { View, TouchableOpacity, ImageBackground, Text, StyleSheet } from 'react-native';



function Onbording1({ navigation }) {
    return (
        <View style={styles.container}>

            <ImageBackground style={styles.imageContainer} source={require('../assets/Onboarding/Donate-1.jpg')} />
            <Text style={{ textAlign: 'center', fontSize: 44, position: 'relative', top: 460, right: 0, color: 'rgba(255, 172, 44, 1)' }}>MAKE</Text>
            <Text style={{ textAlign: 'center', fontSize: 24, position: 'relative', top: 460, right: 0, color: 'rgba(184, 129, 207, 1)' }}>DONATION</Text>

            <View>
                <TouchableOpacity style={{ position: 'absolute', top: 650, backgroundColor: 'rgba(184, 129, 207, 1)', width: 100, height: 60, borderRadius: 20, marginLeft: 15, }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', marginTop: 15, fontWeight: '500' }} onPress={() => navigation.navigate('login')}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ position: 'absolute', top: 650, backgroundColor: 'rgba(94, 206, 253, 1)', width: 100, height: 60, borderRadius: 20, marginLeft: 300, }}>
                    <Text style={{ textAlign: 'center', fontSize: 20, color: 'white', marginTop: 15, fontWeight: '500' }} onPress={() => navigation.navigate('Onboarding2')}>Next</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}

export default Onbording1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: 'white'
    },
    imageContainer: {
        position: 'absolute',
        width: 300,
        height:300,
        marginTop: 150,
        marginLeft: 10,
        borderRadius: 16,
        alignSelf: 'center',
      },
})