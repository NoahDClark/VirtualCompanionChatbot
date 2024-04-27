// ChangePasswordScreen.tsx
import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ChangePasswordScreen = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const navigation = useNavigation();

  const handleChangePassword = () => {
    // Handle change password logic
    console.log('Change Password:', { currentPassword, newPassword, confirmNewPassword });
  };
  const handleGoBack = () => {
    // Handle change password logic
      navigation.navigate('AccountScreen' as never);

  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Current Password"
        value={currentPassword}
        onChangeText={setCurrentPassword}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="New Password"
        value={newPassword}
        onChangeText={setNewPassword}
        style={styles.input}
        secureTextEntry
      />
      <TextInput
        placeholder="Confirm New Password"
        value={confirmNewPassword}
        onChangeText={setConfirmNewPassword}
        style={styles.input}
        secureTextEntry
      />
      <Button title="Change Password" onPress={handleChangePassword} />
      <Button title="Go back" onPress={handleGoBack} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 50,
    marginBottom: 20,
    padding: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f0f9fa',
  },
});

export default ChangePasswordScreen;