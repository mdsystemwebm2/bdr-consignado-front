import { StyleSheet, Text, View } from "react-native";
import { Button } from "../components/button";
import { Input } from "../components/input";

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Input icon="user" />
      <Button title="Entrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0C0B",
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
