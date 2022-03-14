import React, { useState } from 'react';
import {Forgotpasswordf} from '../auth/forgotpassword';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';

function Forgotpassword({ navigation }) {

    const [email, setEmail] = useState('');

    const forgotpassword = (() => {
        Forgotpasswordf(email)
    })
    return (
        <View style={styles.container}>
            <Text style={{ position: 'absolute', marginTop: 97, left: 42, fontSize: 24, color: 'rgba(94, 209, 253, 1)' }}>Bet</Text>
            <Text style={{ position: 'absolute', marginTop: 97, left: 80, fontSize: 24, color: 'rgba(94, 209, 253, 1)' }}>On</Text>
            <Text style={{ position: 'absolute', marginTop: 119, left: 42, fontSize: 24, color: 'rgba(184, 129, 207, 1)', }}>Better</Text>
            <Text style={{ position: 'absolute', marginTop: 200, marginLeft: 42, fontSize: 19, color: '#ffac2c' }}>Forgot Password</Text>
            <Text style={{ position: 'absolute', marginTop: 250, textAlign: 'center', marginLeft: 42, marginRight: 42, }}>
                Enetr the Email Address that is Associate with your account and we will send you link to reset your password
            </Text>
            <TextInput
                placeholder="Password"
                style={styles.input2}
                onChangeText={(email) => setEmail(email)}
            />

            <TouchableOpacity style={styles.Button2} onPress={forgotpassword}>
                <Text style={{ position: 'absolute', color: 'white', marginLeft: 65, marginTop: 10, fontSize: 18, }}>Continue</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Forgotpassword

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    input2: {
        position: 'absolute',
        marginTop: 310,
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
        borderRadius: 16,
    },




})

