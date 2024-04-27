
import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';


const ChatHistoryScreen = () => {
  
  const chatHistory = [
    { date: '2024-03-01', numMessages: 34, sentiment: 'Positive' },
    { date: '2024-03-15', numMessages: 16, sentiment: 'Neutral' },
    { date: '2024-03-22', numMessages: 23, sentiment: 'Negative' },
  ];

    const navigation = useNavigation();
    
  const handleGoToMainMenu = () => {
    navigation.navigate('MainMenuScreen' as never);
  };

  const goToChatBot = () => {
    navigation.navigate("ChatScreen" as never);
  };
  const goToChatHistory = () => {
    navigation.navigate("ChatHistoryScreen" as never);
  };


  const goToAccountScreen = () => {
    navigation.navigate('AccountScreen' as never);
  };

  return (
    <View style={styles.container}>
    <Text style={styles.title}>Chat history page (Work in Progress)</Text>

      {chatHistory.map((item, index) => (
        <View key={index} style={styles.chatBlock}>
          <Text style={styles.chatDate}>{item.date}</Text>
          <Text style={styles.chatInfo}>Messages Sent: {item.numMessages}</Text>
          <Text style={styles.chatInfo}>Sentiment: {item.sentiment}</Text>
        </View>
      ))}
      {/* Add more dates as needed */}
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 20,
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
  chatBlock: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
    width:250,
  },
  chatDate: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  chatInfo: {
    fontSize: 16,
    marginBottom: 3,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 100,
  },
});

export default ChatHistoryScreen;