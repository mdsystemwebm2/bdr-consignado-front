import { Pressable, Text } from "react-native";
import { styles } from "./styles";

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
};
