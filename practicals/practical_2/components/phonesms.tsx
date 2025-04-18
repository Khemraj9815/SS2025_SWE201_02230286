import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { supabase } from '../lib/supabase';

export default function PhoneLogin() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [step, setStep] = useState<'send' | 'verify'>('send');

  // Format phone number to E.164
  const formatPhone = (input: string): string => {
    let p = input.trim();

    // Remove any characters that are not numbers or '+'
    p = p.replace(/[^+\d]/g, '');

    // If it starts with 0, remove it
    if (p.startsWith('0')) {
      p = p.slice(1);
    }

    // If it doesn't start with +, prepend +975 (for Bhutan)
    if (!p.startsWith('+')) {
      p = '+975' + p;
    }

    return p;
  };

  const sendOtp = async () => {
    const formattedPhone = formatPhone(phone);

    const { error } = await supabase.auth.signInWithOtp({
      phone: formattedPhone,
      options: {
        channel: 'sms',
      },
    });

    if (error) {
      setMessage(` ${error.message}`);
    } else {
      setMessage(' OTP sent! Check your SMS.');
      setStep('verify');
    }
  };

  const verifyOtp = async () => {
    const formattedPhone = formatPhone(phone);

    const { data, error } = await supabase.auth.verifyOtp({
      phone: formattedPhone,
      token: otp,
      type: 'sms',
    });

    if (error) {
      setMessage(` ${error.message}`);
    } else {
      setMessage(' Logged in!');
      console.log('Session:', data.session);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Phone Login</Text>

      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="+975 _ _ _ _ _ _ _ _"
        keyboardType="phone-pad"
        editable={step === 'send'}
      />

      {step === 'verify' && (
        <TextInput
          style={styles.input}
          value={otp}
          onChangeText={setOtp}
          placeholder="Enter OTP"
          keyboardType="number-pad"
        />
      )}

      <Button
        title={step === 'send' ? 'Send OTP' : 'Verify OTP'}
        onPress={step === 'send' ? sendOtp : verifyOtp}
      />

      {message !== '' && <Text style={styles.message}>{message}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 6,
    marginBottom: 10,
  },
  message: {
    marginTop: 15,
    fontSize: 16,
  },
});
