import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  group: {
    height: 44,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 8,
  },
  icon: {
    height: 44,
    width: 44,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },

  input: {
    flex: 1,
    color: '#fff',
    paddingHorizontal: 8,
    fontSize: 16,
  },
});
