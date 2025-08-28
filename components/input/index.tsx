import { Feather } from "@expo/vector-icons";

import { Text, TextInput, TextInputProps, View } from "react-native";

import { styles } from "./styles";
import { Controller, FieldValues, UseControllerProps } from "react-hook-form";
import { forwardRef } from "react";

interface InputProps<T extends FieldValues = any> {
  icon: keyof typeof Feather.glyphMap;
  error?: string;
  formProps: UseControllerProps<T>;
  inputProps: TextInputProps;
}
export const Input = forwardRef<TextInput, InputProps>(
  ({ icon, formProps, inputProps, error }, ref) => {
    return (
      <Controller
        render={({ field }) => (
          <View style={styles.container}>
            <View style={[styles.group]}>
              <TextInput
                ref={ref}
                value={field.value}
                onChangeText={field.onChange}
                style={styles.input}
                {...inputProps}
              />
              <View style={styles.icon}>
                <Feather name={icon} size={18} color="#fff" />
              </View>
            </View>

            {error && <Text style={styles.error}>{error}</Text>}
          </View>
        )}
        {...formProps}
      />
    );
  }
);
