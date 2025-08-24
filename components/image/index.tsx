import { Image, View } from 'react-native';

import { styles } from './styles';

interface ImageProps {
  src?: string;
}

export const DisplayAnImage = ({ src }: ImageProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={{ uri: src }} />
    </View>
  );
};
