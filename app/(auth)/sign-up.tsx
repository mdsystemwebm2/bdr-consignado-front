import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { DisplayAnImage } from "../../components/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Select } from "../../components/select";
import { api } from "../../services/api";
import { useAuth } from "../../contexts/AuthContext";

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  personType: string;
  social: string;
  cpf_cnpj: string;
  cep: string;
  state: string;
  city: string;
};

export default function SignUpScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const insets = useSafeAreaInsets();
  const [userType, setUserType] = useState("fisica");
  const { signIn } = useAuth();

  const passwordRef = useRef<TextInput>(null);
  const confirmPasswordRef = useRef<TextInput>(null);
  const phoneRef = useRef<TextInput>(null);
  const personTypeRef = useRef<TextInput>(null);
  const socialRef = useRef<TextInput>(null);
  const cpfCnpjRef = useRef<TextInput>(null);
  const cepRef = useRef<TextInput>(null);
  const stateRef = useRef<TextInput>(null);
  const cityRef = useRef<TextInput>(null);

  const handleSignUp = async (data: SignUpFormData) => {
    const userData = {
      name: data.name,
      email: data.email,
      password: data.password,
      password_confirmation: data.confirmPassword,
      phone: data.phone,
      cnpj_cpf: data.cpf_cnpj,
      address: `${data.city} ${data.state} ${data.cep}`,
      type: "consignado",
      responsible_id: 1,
    };

    try {
      await api.post("/register", userData);
      await signIn(data.email, data.password);
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  return (
    <SafeAreaView style={[styles.safeArea, { marginBottom: insets.bottom }]}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <DisplayAnImage src={require("../../assets/logo.png")} />

          <View style={{ width: "100%" }}>
            <Text style={styles.title}>Cadastro</Text>

            <View style={styles.form}>
              <Input
                icon="user"
                error={errors.name?.message}
                inputProps={{
                  placeholder: "Digite seu nome completo",
                  placeholderTextColor: "#fff",
                  returnKeyType: "next",
                  onSubmitEditing: () => passwordRef.current?.focus(),
                }}
                formProps={{
                  control,
                  name: "name",
                  rules: { required: "Nome é Obrigatório." },
                }}
              />

              <Input
                icon="at-sign"
                error={errors.email?.message}
                inputProps={{
                  placeholder: "Digite seu e-mail",
                  placeholderTextColor: "#fff",
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
                icon="lock"
                error={errors.password?.message}
                inputProps={{
                  placeholder: "Digite sua senha",
                  placeholderTextColor: "#fff",
                  secureTextEntry: true,
                  returnKeyType: "next",
                  onSubmitEditing: () => confirmPasswordRef.current?.focus(),
                }}
                formProps={{
                  control,
                  name: "password",
                  rules: { required: "Senha é Obrigatória." },
                }}
              />

              <Input
                ref={confirmPasswordRef}
                icon="lock"
                error={errors.confirmPassword?.message}
                inputProps={{
                  placeholder: "Confirme sua senha",
                  placeholderTextColor: "#fff",
                  secureTextEntry: true,
                  returnKeyType: "next",
                  onSubmitEditing: () => phoneRef.current?.focus(),
                }}
                formProps={{
                  control,
                  name: "confirmPassword",
                  rules: { required: "Confirmação de senha é Obrigatória." },
                }}
              />

              <Input
                ref={phoneRef}
                icon="phone"
                error={errors.phone?.message}
                inputProps={{
                  placeholder: "Digite seu telefone",
                  placeholderTextColor: "#fff",
                  keyboardType: "phone-pad",
                  returnKeyType: "next",
                  onSubmitEditing: () => personTypeRef.current?.focus(),
                }}
                formProps={{
                  control,
                  name: "phone",
                  rules: { required: "Telefone é Obrigatório." },
                }}
              />

              <Select
                options={[
                  { label: "Pessoa Física", value: "fisica" },
                  { label: "Pessoa Jurídica", value: "juridica" },
                ]}
                value={userType}
                onChange={setUserType}
              />

              <Input
                ref={socialRef}
                icon="briefcase"
                error={errors.social?.message}
                inputProps={{
                  placeholder: "Digite sua Razão Social",
                  placeholderTextColor: "#fff",
                  returnKeyType: "next",
                  onSubmitEditing: () => cpfCnpjRef.current?.focus(),
                }}
                formProps={{
                  control,
                  name: "social",
                  rules: { required: "Razão Social é Obrigatória." },
                }}
              />

              <Input
                ref={cpfCnpjRef}
                icon="inbox"
                error={errors.cpf_cnpj?.message}
                inputProps={{
                  placeholder: "Digite seu CPF ou CNPJ",
                  placeholderTextColor: "#fff",
                  keyboardType: "numeric",
                  returnKeyType: "next",
                  onSubmitEditing: () => cepRef.current?.focus(),
                }}
                formProps={{
                  control,
                  name: "cpf_cnpj",
                  rules: { required: "CPF ou CNPJ é Obrigatório." },
                }}
              />

              <Input
                ref={cepRef}
                icon="map-pin"
                error={errors.cep?.message}
                inputProps={{
                  placeholder: "Digite seu CEP",
                  placeholderTextColor: "#fff",
                  keyboardType: "numeric",
                  returnKeyType: "next",
                  onSubmitEditing: () => stateRef.current?.focus(),
                }}
                formProps={{
                  control,
                  name: "cep",
                  rules: { required: "CEP é Obrigatório." },
                }}
              />

              <Input
                ref={stateRef}
                icon="flag"
                error={errors.state?.message}
                inputProps={{
                  placeholder: "Digite seu Estado",
                  placeholderTextColor: "#fff",
                  returnKeyType: "next",
                  onSubmitEditing: () => cityRef.current?.focus(),
                }}
                formProps={{
                  control,
                  name: "state",
                  rules: { required: "Estado é Obrigatório." },
                }}
              />

              <Input
                ref={cityRef}
                icon="home"
                error={errors.city?.message}
                inputProps={{
                  placeholder: "Digite sua Cidade",
                  placeholderTextColor: "#fff",
                  returnKeyType: "done",
                }}
                formProps={{
                  control,
                  name: "city",
                  rules: { required: "Cidade é Obrigatória." },
                }}
              />

              <Button title="Cadastrar" onPress={handleSubmit(handleSignUp)} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#0A0C0B",
    marginTop: StatusBar.currentHeight || 0,
  },
  container: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
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
