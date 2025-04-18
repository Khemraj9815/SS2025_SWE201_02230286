import React, { useState } from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text } from 'react-native'
import EmailPasswordLogin from './email'
import MagicLinkLogin from '../components/magiclink'
// import PhoneLogin from './PhoneLogin'
// import SocialLogin from './SocialLogin'

export default function AuthOption() {
  const [method, setMethod] = useState<string | null>(null)

  if (method === 'email') return <EmailPasswordLogin goBack={function (): void {
      throw new Error('Function not implemented.')
  } } />
  if (method === 'magic') return <MagicLinkLogin />
  // if (method === 'phone') return <PhoneLogin />
  // if (method === 'social') return <SocialLogin />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose Login Method</Text>

      <TouchableOpacity style={styles.button} onPress={() => setMethod('email')}>
        <Text style={styles.buttonText}>Login with Email & Password</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setMethod('magic')}>
        <Text style={styles.buttonText}>Login with Magic Link</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setMethod('phone')}>
        <Text style={styles.buttonText}>Login with Phone (SMS)</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => setMethod('social')}>
        <Text style={styles.buttonText}>Login with Google/Facebook</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    margin: 15,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,

  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },
})
