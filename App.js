import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Otp from "./Otp";
export default function App() {
  return (
    <View style={styles.container}>
      <Otp />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#fff",
  },
});
