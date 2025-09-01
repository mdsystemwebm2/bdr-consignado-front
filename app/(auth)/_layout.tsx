import { Stack } from "expo-router";
import { Text } from "react-native";

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="sign-in" options={{ title: "Login" }} />
      <Stack.Screen name="sign-up" options={{ title: "Cadastro" }} />
    </Stack>
  );
}
