import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { signUp, signIn, logOut } from '../auth';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const handleSignUp = async () => {
    const newUser = await signUp(email, password);
    setUser(newUser);
  };

  const handleSignIn = async () => {
    const loggedInUser = await signIn(email, password);
    setUser(loggedInUser);
  };

  const handleLogOut = async () => {
    await logOut();
    setUser(null);
  };

  return (
    <View style={{ padding: 20 }}>
      {user ? (
        <>
          <Text>Welcome, {user.email}</Text>
          <Button title="Logout" onPress={handleLogOut} />
        </>
      ) : (
        <>
          <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={{ marginBottom: 10, borderBottomWidth: 1 }} />
          <TextInput placeholder="Password" value={password} onChangeText={setPassword} secureTextEntry style={{ marginBottom: 10, borderBottomWidth: 1 }} />
          <Button title="Sign Up" onPress={handleSignUp} />
          <Button title="Login" onPress={handleSignIn} />
        </>
      )}
    </View>
  );
};

export default LoginScreen;
