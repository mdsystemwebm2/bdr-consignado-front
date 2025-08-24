import { StyleSheet, View } from 'react-native';

import { DisplayAnImage } from '../components/image';
import SignInScreen from './sign-in';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <DisplayAnImage src='https://reactnative.dev/img/tiny_logo.png' />
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0A0C0B',
    padding: 16,
    width: '100%',
  },
});
