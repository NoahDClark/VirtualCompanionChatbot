
import React, { useState, useRef,useEffect  } from 'react';
import { View, Image, TextInput, Button, Text, StyleSheet, ScrollView,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import {KeyboardAvoidingView, Platform } from 'react-native';

const ChatScreen = () => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello, I am your companion chatbot! How was your day?', sender: 'bot' },
    // Initial message from the bot
  ]);
  const [inputText, setInputText] = useState('');
  //const scrollViewRef = useRef();
  const scrollViewRef = useRef<ScrollView|null>(null);
  

  const handleSend = async () => {
    if (inputText.trim()) {
        const newMessage = {
            id: messages.length + 1,
            text: inputText,
            sender: 'user',
        };
        setMessages(messages => [...messages, newMessage]);

        const processingMessage = {
            id: Date.now(),
            text: '...',
            sender: 'bot',
        };
        setMessages(messages => [...messages, processingMessage]);
        setInputText('');

        try {
            const response = await axios.post('127.0.0.1', { text: inputText });
            const botResponse = {
                id: messages.length + 2,
                text: response.data.reply,
                sender: 'bot',
            };
            setMessages(currentMessages => currentMessages.filter(m => m.text !== '...').concat(botResponse));
        } catch (error) {
            console.error('Failed to send/receive data:', error);
            // Handle failure: maybe push a failure message to chat or alert the user
        }
    }
};

  const goBack = () => {
    navigation.goBack();
  };


  const handleGoToMainMenu = () => {
    navigation.navigate('MainMenuScreen' as never);
  };

  const goToChatBot = () => {
    navigation.navigate("ChatScreen" as never);
  };
  const goToAccount = () => {
    navigation.navigate("AccountScreen" as never);
  };
  const goToChatHistory = () => {
    navigation.navigate("ChatHistoryScreen" as never);
  };

  useEffect(() => {
    scrollViewRef?.current?.scrollToEnd({ animated: true });
  }, [messages]);

  return (
    
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        style={styles.container}
        ref={scrollViewRef}
        contentContainerStyle={styles.contentContainer}
      >
        {messages.map((message) => (
          <View
            key={message.id}
            style={[
              styles.messageBubble,
              message.sender === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{message.text}</Text>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your message here..."
        />
        <TouchableOpacity onPress={handleSend}>
          <Image 
            source={require('./send.png')} // Update the path
            style={styles.iconSend} 
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.buttonContainer]}>
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
        <TouchableOpacity onPress={goToAccount}>
          <Image 
            source={require('./account.png')}//C:\projects\reactnative\AwesomeProject\assets\account.png // Update the path
            style={styles.icon} 
          />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
      

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    //justifyContent: 'space-between',
  },
  contentContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  messagesContainer: {
    flex: 1,
    padding: 10,
  },
  message: {
    marginVertical: 5,
    fontSize: 16,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
  },
  botMessage: {
    alignSelf: 'flex-start',
    backgroundColor: 'lightblue',
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    paddingVertical: 30,
  },
  input: {
    flex: 1,
    marginRight: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    padding: 10,
    backgroundColor: '#f0f9fa',
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
  icon: {
    width: 50, // Adjust according to your image's aspect ratio
    height: 50,
  },
  iconSend: {
    paddingTop: 20,
    width: 40, // Adjust according to your image's aspect ratio
    height: 40,
  },
  messageBubble: {
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    maxWidth: '80%',
  },
  messageText: {
    fontSize: 16,
  },
});

export default ChatScreen;