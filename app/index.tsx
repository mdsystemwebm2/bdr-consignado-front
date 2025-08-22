import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Screen!</Text>

      <Link href="/sign-in" asChild>
        <Pressable style={styles.link}>
          <Text style={styles.linkText}>Ir para Login</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    padding: 12,
    backgroundColor: "#007bff",
    borderRadius: 5,
  },
  linkText: {
    color: "#fff",
    textAlign: "center",
  },
});
