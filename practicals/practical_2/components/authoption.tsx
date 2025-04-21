import React, { useState } from 'react'
import { View, Button, StyleSheet, TouchableOpacity, Text, Image } from 'react-native'
import EmailPasswordLogin from './email'
import MagicLinkLogin from '../components/magiclink'
import PhoneLogin from '../components/phonesms'
// import SocialLogin from './SocialLogin'

export default function AuthOption() {
  const [method, setMethod] = useState<string | null>(null)

  if (method === 'email') return <EmailPasswordLogin goBack={function (): void {
      throw new Error('Function not implemented.')
  } } />
  if (method === 'magic') return <MagicLinkLogin />
  if (method === 'phone') return <PhoneLogin />
  // if (method === 'social') return <SocialLogin />
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Choose Login Method</Text>
  
        {/* Login with Email & Password */}
        <TouchableOpacity style={styles.button} onPress={() => setMethod('email')}>
            
          <Text style={styles.buttonText}>Login with Email & Password</Text>
          <Image
            source={require('../assets/gmail.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
  
        {/* Login with Magic Link */}
        <TouchableOpacity style={styles.button} onPress={() => setMethod('magic')}>
          
          <Text style={styles.buttonText}>Login with Magic Link</Text>
          <Image
            source={require('../assets/star.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
  
        {/* Login with Phone (SMS) */}
        <TouchableOpacity style={styles.button} onPress={() => setMethod('phone')}>
          
          <Text style={styles.buttonText}>Login with Phone (SMS)</Text>
          <Image
            source={require('../assets/sms.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
  
        {/* Login with Google/Facebook */}
        <TouchableOpacity style={styles.button} onPress={() => setMethod('social')}>
          
          <Text style={styles.buttonText}>Login with Google</Text>
          <Image
            source={require('../assets/search.png')} 
            style={styles.icon}
          />
        </TouchableOpacity>
        
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      padding: 24,
      marginTop: 190,
      backgroundColor: '#fff',
      marginHorizontal: 20,
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: 20,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#4e73df',
      padding: 12,
      borderRadius: 25,
      marginVertical: 8,
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      alignContent: 'center',
      fontWeight: '600',
      marginRight: 20,
      marginLeft: 20,
    },
    icon: {
      width: 20,
      height: 20,  // Size of the icon
    },
  });