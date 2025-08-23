import { StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/button';
import { Input } from '../components/input';

export default function SignInScreen() {
  return (
    <View style={{ width: '100%' }}>
      <Text style={styles.title}>Login</Text>
      <Input icon='at-sign' placeHolder='Digite deu e-mail' />
      <Input icon='eye-off' placeHolder='Digite sua senha' />
      <Button title='Entrar' />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 32,
  },
});
