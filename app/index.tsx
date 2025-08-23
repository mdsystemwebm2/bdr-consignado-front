import { StyleSheet, View } from 'react-native';

import SignInScreen from './sign-in';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
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
