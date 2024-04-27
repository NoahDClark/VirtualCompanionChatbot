import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, Image } from 'react-native';
import { FIREBASE_AUTH } from './firebaseConfig';
import { signOut } from 'firebase/auth';

const MainMenuScreen = () => {
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;

  const goToChatBot = () => {
    navigation.navigate("ChatScreen" as never);
  };
  
  const goToChatHistory = () => {
    navigation.navigate("ChatHistoryScreen" as never);
  };
  
  const goToLogout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
          navigation.navigate("LoginScreen" as never);

          console.log("Signed out successfully")
      }).catch((error) => {
      // An error happened.
      });
  };

  const goToAccountScreen = () => {
    navigation.navigate('AccountScreen' as never);
  };
  return (
    <View style={styles.container}>

    <Text style={styles.welcomeText}>Welcome to Companion Chat Bot</Text>

    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goToChatBot}>
          <Image 
            source={require('./chat.png')} // Update the path
            style={styles.icon} 
          />
          <Text style={styles.pageText}>Chat</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={goToChatHistory}>
          <Image 
            source={require('./history.png')} // Update the path
            style={styles.icon} 
          />
          <Text style={styles.pageText}>Chat History</Text>
        </TouchableOpacity>
        
    </View>
    <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goToLogout}>
          
          <Image 
            source={require('./logout.png')} // Update the path
            style={styles.icon} 
          />
          <Text style={styles.pageText}>Logout</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={goToAccountScreen}>
          <Image 
            source={require('./account.png')}//C:\projects\reactnative\AwesomeProject\assets\account.png // Update the path
            style={styles.icon} 
          />
          <Text style={styles.pageText}>Go to Account</Text>
        </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    width: '40%',
  },

  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
  },
  buttonSpace: {
    marginVertical: 10, // Adjust vertical margin for spacing
  },
  icon: {
    width: 50, // Adjust according to your image's aspect ratio
    height: 50,
  },
  pageText: {
    fontSize: 15, // Increase the font size as needed
    
    textAlign: 'center', // Center align text
    fontWeight: 'bold', // Make the text bold
    marginVertical: 20, // Adjust spacing between text elements if necessary
  },
  welcomeText: {
    fontSize: 32, // Big font size for the welcome text
    fontWeight: 'bold', // Make the text bold
    textAlign: 'center', // Center align text
    marginBottom: 80, // Add some margin at the bottom
  },
});

export default MainMenuScreen;