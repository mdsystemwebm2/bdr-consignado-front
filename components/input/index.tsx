import { TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles";

interface InputProps {
  icon: keyof typeof Feather.glyphMap;
}

export const Input = ({ icon }: InputProps) => {
  return (
    <View style={styles.group}>
      <View style={styles.icon}>
        <Feather name={icon} size={18} color="#fff" />
      </View>
      <TextInput style={styles.input} />
    </View>
  );
};
