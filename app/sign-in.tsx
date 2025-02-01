import { View, Text, Button, SafeAreaView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function SignIn() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
        <View>
          <Text>Sign In</Text>
          <Button title="Go to Sign Up" onPress={() => router.push("/sign-up")} />
          <Button title="Go to Home" onPress={() => router.push("/home")} />
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40, // Extra padding to avoid cutting off content
  },
});