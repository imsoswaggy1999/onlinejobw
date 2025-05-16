// JobHiringApp/App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './app/firebaseConfig'; 
import IndexScreen from './app/index'; 
import LoginScreen from './app/screens/LoginScreen'; 
import SignUpScreen from './app/screens/SignUpScreen'; 
import Dashboard from './app/screens/Dashboard'; 

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(setUser);
    return () => unsubscribe(); 
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={user ? "Dashboard" : "Welcome"}
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="Welcome" component={IndexScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
