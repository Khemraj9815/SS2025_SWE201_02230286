import React, { useState } from 'react'
import { Alert, StyleSheet, View, Text, TouchableOpacity, Button } from 'react-native'
import { supabase } from '../lib/supabase'
// import { Button, Input } from '@rneui/themed'
import AuthOption from './authoption'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationHelpersContext } from '@react-navigation/native'
import { Input } from '@rneui/base';
import App from '../App';

type Props = {
  goBack: () => void
}

export default function EmailPasswordLogin({  }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  // const [method, setMethod] = useState<string | null>(null)
  
  //   if (method === 'authoption') return <AuthOption goBack={function (): void {
  //       throw new Error('Function not implemented.')
  //   } } />

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
  }

  async function signUpWithEmail() {
    setLoading(true)
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    if (!session) Alert.alert('Please check your inbox for email verification!')
    setLoading(false)
  }

  return (
    <View style={styles.container}>
      {/* <TouchableOpacity onPress={() => setMethod('authoption')}>
              <Text >back</Text>
            </TouchableOpacity>
 */}
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={setEmail}
          value={email}
          placeholder="email"
          autoCapitalize="none"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          placeholder="Password"
          autoCapitalize="none"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Button title="Sign in" disabled={loading} onPress={signInWithEmail} />
      </View>
      <View style={styles.verticallySpaced}>
        <Button title="Sign up" disabled={loading} onPress={signUpWithEmail} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
    padding: 8,
  },
  backText: {
    fontSize: 18,
    color: '#4a90e2',
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
})
