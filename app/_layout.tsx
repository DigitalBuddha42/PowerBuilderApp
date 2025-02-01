import { Stack } from "expo-router";
import { View, StyleSheet, SafeAreaView } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Stack screenOptions={{ headerShown: false }} />
        </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  safeArea: {
      flex: 1,
      backgroundColor: "#121212", // Dark background (adjust as needed)
    },
    container: {
      flex: 1, // Ensures full screen usage
      paddingHorizontal: 16, // Keeps consistent spacing
      justifyContent: "center", // Centers content
  },
});

