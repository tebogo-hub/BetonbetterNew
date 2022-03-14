import React from 'react';
import Onbording1 from './Screens/Onbording1';
import Onboarding2 from './Screens/Onboarding2';
import Onboarding3 from './Screens/Onboarding3';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import Home from './Screens/Home';
import Poppup from './Screens/Poppup';
import Gift from './Screens/Gift';
import Campaigns from './Screens/Campaigns';
import Donate from './Screens/Donate';
import ContactForm from './Screens/ContactForm';
import Loader from './Screens/Loader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onbording1" component={Onbording1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
        <Stack.Screen name="Onboarding3" component={Onboarding3} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Loader" component={Loader} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Poppup" component={Poppup} />
        <Stack.Screen name="Campaigns" component={Campaigns} />
        <Stack.Screen name="Gift" component={Gift} />
        <Stack.Screen name="Donate" component={Donate} />
        <Stack.Screen name="ContactForm" component={ContactForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


