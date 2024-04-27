// AccountScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { FIREBASE_AUTH } from './firebaseConfig';
import { Switch } from 'react-native-gesture-handler';


const AccountScreen = () => {
  const navigation = useNavigation();
  const auth = FIREBASE_AUTH;
  const user = auth.currentUser;

  
  //const [userName, setUserName] = useState('');

  /*
  if (user !== null) {
    // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
  
    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
  }
  */

  const handleChangePassword = () => {
    // Handle changing password logic
    navigation.navigate('ChangePasswordScreen' as never);
    console.log('Changing password...');
  };

  
  const handleGoToMainMenu = () => {
    navigation.navigate('MainMenuScreen' as never);
  };

  const goToChatBot = () => {
    navigation.navigate("ChatScreen" as never);
  };

  const goToAccountScreen = () => {
    navigation.navigate('AccountScreen' as never);
  };
  
  const goToChatHistory = () => {
    navigation.navigate('ChatHistoryScreen' as never);
  };
  const [emailNotificationsEnabled, setEmailNotificationsEnabled] = useState(false);

  const toggleEmailNotifications = () => {
    setEmailNotificationsEnabled(previousState => !previousState);
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.sectionTop}>
        <Text style={styles.sectionTitle}>Account</Text>
        <Text style={styles.label}>Username: Example</Text>
        <Text style={styles.label}>Email: {user.email} </Text>
        <Button title="Change Password" onPress={handleChangePassword} />
      </View>
        
      <View style={styles.sectionTop}>
        <Text style={styles.sectionTitle}>Email Notifications</Text>
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Receive Email Notifications</Text>
          <Switch
            value={emailNotificationsEnabled}
            onValueChange={toggleEmailNotifications}
          />
        </View>
      </View>
      
      <View style={styles.sectionTop}>
        <Text style={styles.sectionTitle}>Help and Support</Text>
        <Button title="FAQ" onPress={handleChangePassword} />
        <Text style={styles.label}></Text>
        <Button title="Support" onPress={handleChangePassword} />
        {/* Add your help and support content here */}
      </View>

      
      <View style={[styles.buttonContainer, styles.bottomButtonContainer]}>
        <TouchableOpacity onPress={handleGoToMainMenu}>
          <Image 
            source={require('./house.png')} // Update the path
            style={styles.icon} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToChatBot}>
          <Image 
            source={require('./chat.png')} // Update the path
            style={styles.icon} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToChatHistory}>
          <Image 
            source={require('./history.png')} // Update the path
            style={styles.icon} 
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={goToAccountScreen}>
          <Image 
            source={require('./account.png')}//C:\projects\reactnative\AwesomeProject\assets\account.png // Update the path
            style={styles.icon} 
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 100,
    justifyContent: 'center',
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },

  button: {
    width: '25%',
    aspectRatio: 1, // To maintain aspect ratio (square)
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 0,
  },
  icon: {
    width: 50, // Adjust according to your image's aspect ratio
    height: 50,
  },
  sectionTop: {
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  switchLabel: {
    fontSize: 16,
  },
});

export default AccountScreen;