// LoginScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FIREBASE_AUTH } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {KeyboardAvoidingView, Platform } from 'react-native';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const auth = FIREBASE_AUTH;


  
  const handleLogin = async () => {
    try {
      const response = await signInWithEmailAndPassword(auth, username, password);
      console.log('successful login');
      navigation.navigate("MainMenuScreen" as never);

    } catch (error : any){
      console.log(error);
    }
    /*
    // Validate username and password (add your validation logic here)
    if (username.trim() === 'user' && password === 'password') {
      // Navigate to the main menu screen if login is successful
      navigation.navigate("MainMenuScreen" as never);
    } else {
      // Show error message or handle login failure
      navigation.navigate("MainMenuScreen" as never);
      console.log('Invalid username or password');
    }
    */
    
  };
  
  const handleGoToSignUp = () => {
    navigation.navigate('SignupScreen' as never);
  };


  return (
    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
    
    <View style={styles.container}>
        
        
      <Text style={styles.title}> Companion Chatbot </Text>
      <Image source={require('./login.png')} style={styles.icon} />


      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        style={[styles.input, styles.inputMargin]}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={[styles.input,styles.inputMargin]}
      />
      <View style={styles.buttonContainerTwo}>
        <Button title="Login" onPress={handleLogin} style={styles.buttonTwo} />
        <Button title="Sign Up" onPress={handleGoToSignUp} style={styles.buttonTwo} />
      </View>
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20, // Adjust bottom margin to leave space for the button row
  },
  containerTwo:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  smiley: {
    fontSize: 220,
  },
  
  icon: {
    width: 350, // Adjust according to your image's aspect ratio
    height: 350,
    marginBottom: 80,
    borderRadius: 175, // Half of the width or height to make it circular
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    width: '30%',
    aspectRatio: 1, // To maintain aspect ratio (square)
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  input: {
    width: '80%',
    marginBottom: 50,
    padding: 15,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f0f9fa',
  },
  inputMargin: {
    marginBottom: 50, // Added margin between input fields
  },
  loginButton: {
    height: 60, // Increased height of login button
  },
  buttonContainerTwo: {
    flexDirection: 'row', // Align buttons horizontally
    justifyContent: 'space-around', // Evenly distribute space between buttons
    width: '80%',
    marginBottom: 20,
  },
  buttonTwo: {
    width: 400, // Adjust button width if needed
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default LoginScreen;
