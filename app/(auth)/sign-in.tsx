import { StyleSheet, Text, TextInput, View } from "react-native";

import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { DisplayAnImage } from "../../components/image";
import { useRef } from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useForm } from "react-hook-form";

type SignInFormData = {
  email: string;
  password: string;
};

export default function SignInScreen() {
  const { signIn } = useAuth();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
  const passwordRef = useRef<TextInput>(null);

  const handleSignIn = (data: SignInFormData) => {
    signIn(data.email, data.password);
  };

  return (
    <View style={styles.container}>
      <DisplayAnImage src={require("../../assets/logo.png")} />
      <View style={{ width: "100%" }}>
        <Text style={styles.title}>Login</Text>

        <View style={styles.form}>
          <Input
            icon="at-sign"
            error={errors.email?.message}
            inputProps={{
              placeholder: "Digite seu e-mail",
              onSubmitEditing: () => passwordRef.current?.focus(),
              returnKeyType: "next",
              keyboardType: "email-address",
            }}
            formProps={{
              control,
              name: "email",
              rules: {
                required: "E-mail é Obrigatório.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Email inválido.",
                },
              },
            }}
          />
          <Input
            ref={passwordRef}
            icon="eye-off"
            error={errors.password?.message}
            inputProps={{
              placeholder: "Digite sua senha",
              secureTextEntry: true,
            }}
            formProps={{
              control,
              name: "password",
              rules: { required: "Senha é Obrigatória." },
            }}
          />
          <Button title="Entrar" onPress={handleSubmit(handleSignIn)} />
        </View>
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
  form: {
    gap: 22,
  },
});
