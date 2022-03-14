import React, { useState } from "react"
import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";

import FirebaseSignup from '../auth/FirebaseSignup'


export default function Signup({ navigation }) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmpassword] = useState('');

    const signup = (() => {
        FirebaseSignup(email, password, navigation);
    })

    return (
        <SafeAreaView>
            <Text style={{ position: 'absolute', marginTop: 97, left: 42, fontSize: 24, color: 'rgba(94, 209, 253, 1)' }}>Bet</Text>
            <Text style={{ position: 'absolute', marginTop: 97, left: 80, fontSize: 24, color: 'rgba(94, 209, 253, 1)' }}>On</Text>
            <Text style={{ position: 'absolute', marginTop: 120, left: 42, fontSize: 24, color: 'rgba(184, 129, 207, 1)', }}>Better</Text>

            <TextInput
                placeholder="Name"
                style={styles.input}

                onChangeText={(name) => setName(name)}
            />
            <TextInput
                placeholder="Email"
                style={styles.input2}
                onChangeText={(email) => setEmail(email)}
            />
            <TextInput
                placeholder="Password"
                style={styles.input3}
                secureTextEntry={true} 
                onChangeText={(password) => setPassword(password)}
                />
           

            <TextInput
                placeholder="Confirm Password"
                style={styles.input4}
                onChangeText={(password) => setConfirmpassword(password)}
            />

            <TouchableOpacity style={styles.Button2} onPress={signup}>
                <Text style={{ position: 'absolute', color: 'white', marginLeft: 70, marginTop: 10, fontSize: 18, }}>Sign up</Text>
            </TouchableOpacity>
        </SafeAreaView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 0,
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
    input3: {
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
    input4: {
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
        top: 520,
        alignSelf: 'center',
        backgroundColor: '#ffac2c',
        height: 45,
        width: 200,
        borderRadius: 16,
    },
});
