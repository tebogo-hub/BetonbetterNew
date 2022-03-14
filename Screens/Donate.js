import React from 'react';
import { Octicons, Fontisto, Ionicons,  MaterialCommunityIcons, FontAwesome5,MaterialIcons } from '@expo/vector-icons';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

function Donate({ navigation}) {
    return (
        <View style={styles.container}>
            <View style={{ position: 'absolute', width: '100%', height: 150, backgroundColor: '#ffac2c' }}>
                <Text style={{ position: 'relative', textAlign: 'center', marginTop: 50, fontSize: 19, color: 'white', fontWeight: 'bold' }}>Select Donation</Text>
            </View>

            <TouchableOpacity onPress={()=> navigation.navigate('ContactForm' , "Donate food")} style={{ position: 'relative', width: 390, height: 100, backgroundColor: 'rgba(229, 229, 229, 1)', alignSelf: 'center', top: 155, borderRadius: 16, boxSizing: 'border-box', }}>
                <View>
                    <Text style={{ position: 'relative', textAlign: 'center', marginTop: 30, fontSize:18, }} name="Donate Food">Donate Food</Text>
                </View>
                <View style={{ position: 'absolute', width: 100, height: 80, backgroundColor: 'rgba(255, 172, 44, 1)', marginTop: 10, marginLeft: 10, borderRadius: 16, boxSizing: 'border-box' }}>
                    <View>
                        <Ionicons name="fast-food" size={50} color="white" style={{ position: 'absolute', alignSelf: 'center', top:10, }} />
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={()=> navigation.navigate('ContactForm' , "Donate books")} style={{ position: 'relative', width: 390, height: 100, backgroundColor: 'rgba(229, 229, 229, 1)', alignSelf: 'center', top: 165, borderRadius: 16, boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.5)' }}>
                <View>
                    <Text style={{ position: 'relative', textAlign: 'center', marginTop: 30, fontSize:18, }}>Donate Books</Text>
                </View>
                <View style={{ position: 'absolute', width: 100, height: 80, backgroundColor: 'rgba(255, 172, 44, 1)', marginTop: 10, marginLeft: 10, borderRadius: 16, boxSizing: 'border-box' }}>
                    <View>
                        < MaterialCommunityIcons  name="bookshelf" size={50} color="white" style={{ position: 'absolute', alignSelf: 'center', top:10,}} />
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('ContactForm', "Donate Clothes")} style={{ position: 'relative', width: 390, height: 100, backgroundColor: 'rgba(229, 229, 229, 1)', alignSelf: 'center', top: 175, borderRadius: 16, boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.5)' }}>
                <View>
                    <Text style={{ position: 'relative', textAlign: 'center', marginTop: 30, fontSize:18, }}>Donate Clothes</Text>
                </View>
                <View style={{ position: 'absolute', width: 100, height: 80, backgroundColor: 'rgba(255, 172, 44, 1)', marginTop: 10, marginLeft: 10, borderRadius: 16, boxSizing: 'border-box' }}>
                    <View>
                    <Ionicons name="ios-shirt-sharp" size={50} color="white" style={{ position: 'absolute', alignSelf: 'center', top:10, }}/>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('ContactForm', "Donate Christmas")} style={{ position: 'relative', width: 390, height: 100, backgroundColor: 'rgba(229, 229, 229, 1)', alignSelf: 'center', top: 185, borderRadius: 16, boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.5)' }}>
                <View>
                    <Text style={{ position: 'relative', textAlign: 'center', marginTop: 30, fontSize:18, marginLeft:20, }}>Donate Christmas</Text>
                </View>
                <View style={{ position: 'absolute', width: 100, height: 80, backgroundColor: 'rgba(255, 172, 44, 1)', marginTop: 10, marginLeft: 10, borderRadius: 16, boxSizing: 'border-box' }}>
                    <View>
                    <FontAwesome5 name="gifts" size={50} color="white" style={{ position: 'absolute', alignSelf: 'center', top:10,}}/>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('ContactForm', "Donate Educational ")} style={{ position: 'relative', width: 390, height: 100, backgroundColor: 'rgba(229, 229, 229, 1)', alignSelf: 'center', top: 195, borderRadius: 16, boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.5)' }}>
                <View>
                    <Text style={{ position: 'relative', textAlign: 'center', marginTop: 30, fontSize:18, marginLeft:20, }}>Donate Education</Text>
                </View>
                <View style={{ position: 'absolute', width: 100, height: 80, backgroundColor: 'rgba(255, 172, 44, 1)', marginTop: 10, marginLeft: 10, borderRadius: 16, boxSizing: 'border-box' }}>
                    <View>
                    <MaterialIcons name="cast-for-education" size={50} color="white"  style={{ position: 'absolute', alignSelf: 'center', top:10,}}/>
                    </View>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=> navigation.navigate('ContactForm', "Donate Religiouse")} style={{ position: 'relative', width: 390, height: 100, backgroundColor: 'rgba(229, 229, 229, 1)', alignSelf: 'center', top: 200, borderRadius: 16, boxSizing: 'border-box', boxShadow: 'rgba(0, 0, 0, 0.5)' }}>
                <View>
                    <Text style={{ position: 'relative', textAlign: 'center', marginTop: 30, fontSize:18, marginLeft:20, }}>Donate Religiouse</Text>
                </View>
                <View style={{ position: 'absolute', width: 100, height: 80, backgroundColor: 'rgba(255, 172, 44, 1)', marginTop: 10, marginLeft: 10, borderRadius: 16, boxSizing: 'border-box' }}>
                    <View>
                    <FontAwesome5 name="church" size={50} color="white"  style={{ position: 'absolute', alignSelf: 'center', top:10,}}/>
                    </View>
                </View>
            </TouchableOpacity>

        </View>
    )
}

export default Donate
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
    },
})
