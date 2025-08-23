import { StyleSheet, Text, View } from 'react-native';

import { Button } from './components/button';

export default function App() {
  return (
    <View>
      <Text>Open up App.tsx to start working on your app!</Text>

      <Button title='Entrar' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
});
