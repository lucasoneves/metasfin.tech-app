import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthLayout = () => {
  return (
    <SafeAreaView>
      {/* <Text>Hello</Text> */}
      <Text style={styles.logo}>Metasfin.tech</Text>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="sign-up" />
        <Stack.Screen name="login" />
        <Stack.Screen name="forgot-password" />
      </Stack>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    marginBottom: 30,
  },
});

export default AuthLayout;
