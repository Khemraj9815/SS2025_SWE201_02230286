import React, { useEffect } from "react";
import { View, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function SplashScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Home"); // Navigate to HomeScreen after 2.5 seconds
    }, 2500);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require("@/assets/images/gojek.png")} style={styles.logo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
    backgroundColor: "#fff", // White background
  },
  logo: {
    width: 150, // Adjust size as needed
    height: 150,
    resizeMode: "contain",
  },
});
