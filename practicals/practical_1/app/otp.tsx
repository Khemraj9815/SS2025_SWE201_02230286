import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function OTPVerificationScreen() {
  const navigation = useNavigation();
  const [otp, setOtp] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.headText}>Enter OTP</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter OTP"
        keyboardType="numeric"
        value={otp}
        onChangeText={setOtp}
      />

      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1,
  alignItems: 'center',
  justifyContent: 'center'
 },

  headText: { fontSize: 20,
  fontWeight: 'bold',
  marginBottom: 20 },
  input: { width: "80%",
  padding: 10,
  borderWidth: 1,
  borderColor: "#ccc",
  borderRadius: 8,
  textAlign: "center", 
  fontSize: 16 },
  submitButton: { backgroundColor: "green",
  padding: 15, 
  marginTop: 20, 
  borderRadius: 8 
},
  submitText: { color: "white",
  fontWeight: "bold" },
  backText: { marginTop: 20, color: "blue" },
});
