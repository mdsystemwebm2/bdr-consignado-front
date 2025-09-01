import { Redirect } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/button";
import { SplashScreen } from "../components/splash-screen";

export default function HomeScreen() {
  const { user, token, signOut, isLoading } = useAuth();

  if (!token) {
    return <Redirect href="/sign-in" />;
  }

  if (isLoading) {
    return <SplashScreen />;
  }

  function handleSignOut() {
    signOut();
  }

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>Home Screen LOGADO:{user?.name}</Text>

      <Button title="Sair" onPress={handleSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0C0B",
    padding: 16,
    width: "100%",
    height: "100%",
  },
});
