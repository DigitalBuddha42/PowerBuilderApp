import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { router } from "expo-router";

export default function SignUpComp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert("Success", "Account created!");
      router.push("/home"); // Redirect after sign-up
    } catch (error: any) {
      Alert.alert("Error", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  input: { width: "100%", padding: 10, marginVertical: 10, borderWidth: 1, borderRadius: 5 },
});
