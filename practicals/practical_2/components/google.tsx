// screens/GoogleAuthScreen.js
import React, { useEffect } from 'react';
import { View, Button, Alert } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { supabase } from '../lib/supabase';

WebBrowser.maybeCompleteAuthSession();

const redirectUri = AuthSession.makeRedirectUri({
  scheme: 'yourapp', 
});

export default function GoogleAuthScreen() {
  const handleLoginWithGoogle = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: redirectUri,
      },
    });

    if (error) {
      Alert.alert('Error', error.message);
      return;
    }

    const result = await AuthSession.startAsync({ authUrl: data?.url });

    if (result?.type === 'success') {
      Alert.alert('Success', 'Logged in with Google!');
    } else {
      Alert.alert('Cancelled');
    }
  };

  return (
    <View style={{ padding: 40 }}>
      <Button title="Login with Google" onPress={handleLoginWithGoogle} />
    </View>
  );
}
