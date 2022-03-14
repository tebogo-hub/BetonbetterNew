import React from 'react';
import { View, Text, TextInput, StyleSheet, Picker, TouchableOpacity, Linking } from 'react-native';


function ContactForm({ route }) {

    const TriggerMail = () => {
        Linking.openURL('mailto:teejaymellowgrind@gmail.com',)
    }
    return (
        <View style={styles.container}>

            <View style={{ position: 'absolute', width: '100%', height: 150, backgroundColor: '#ffac2c' }}>

                <Text style={{ position: 'relative', textAlign: 'center', marginTop: 50, fontSize: 19, color: 'white', fontWeight: 'bold' }}>Select Delivery</Text>
                <View>
                    <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: '500', color: 'white' }}>{route.params}</Text>
                </View>
            </View>


            <Picker style={{ height: 50, width: 300, position: 'relative', alignSelf: 'center', marginTop: 200, }}>
                <Picker.Item label="Personal Delivery" value="Personal collect" />
                <Picker.Item label="Organization Collect" value="Organization" />
            </Picker>

            <TextInput
                placeholder="Name"
                style={styles.input}
              
            />
            <TextInput
                placeholder="+27"
                style={styles.input2}
                keyboardType="numeric"
            />
            <TouchableOpacity style={styles.Button2} onPress={TriggerMail}>
                <Text style={{ position: 'relative', color: 'white', marginTop: 10, fontSize: 18, textAlign: 'center' }}>Next</Text>
            </TouchableOpacity>



        </View>
    )
}

export default ContactForm

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
    input: {
        position: 'absolute',
        marginTop: 300,
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
        marginTop: 350,
        borderWidth: 1,
        width: 300,
        height: 42,
        alignSelf: 'center',
        padding: 10,
        borderRadius: 10,
        borderColor: '#ffac2c'
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
})
