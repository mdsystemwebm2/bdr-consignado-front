import { Image, ImageSourcePropType, View } from "react-native";

import { styles } from "./styles";

interface ImageProps {
  src?: ImageSourcePropType;
}

export const DisplayAnImage = ({ src }: ImageProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.tinyLogo} source={src} />
    </View>
  );
};
