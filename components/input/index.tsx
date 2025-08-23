import { Feather } from '@expo/vector-icons';

import { TextInput, View } from 'react-native';

import { styles } from './styles';

interface InputProps {
  icon: keyof typeof Feather.glyphMap;
  placeHolder?: string;
}

export const Input = ({ icon, placeHolder }: InputProps) => {
  return (
    <View style={styles.group}>
      <TextInput style={styles.input} placeholder={placeHolder} />
      <View style={styles.icon}>
        <Feather name={icon} size={18} color='#fff' />
      </View>
    </View>
  );
};
