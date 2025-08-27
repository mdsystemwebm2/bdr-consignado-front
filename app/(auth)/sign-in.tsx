import { StyleSheet, Text, View } from "react-native";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { DisplayAnImage } from "../../components/image";
import { use, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useRouter } from "expo-router";

export default function SignInScreen() {
  const { signIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    signIn(email, password);
  };

  return (
    <View style={styles.container}>
      <DisplayAnImage src="https://reactnative.dev/img/tiny_logo.png" />
      <View style={{ width: "100%" }}>
        <Text style={styles.title}>Login</Text>
        <Input
          icon="at-sign"
          placeHolder="Digite deu e-mail"
          value={email}
          onChange={setEmail}
        />
        <Input
          icon="eye-off"
          placeHolder="Digite sua senha"
          value={password}
          onChange={setPassword}
        />
        <Button title="Entrar" onPress={handleSignIn} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0C0B",
    color: "#fff",
    padding: 16,
    width: "100%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 32,
  },
});
