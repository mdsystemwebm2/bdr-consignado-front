import { useEffect, useState } from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';

import { Button } from '../components/button';
import { SplashScreen } from '../components/splash-screen';
import { useAuth } from '../contexts/AuthContext';
import { api } from '../services/api';

type Consignado = {
  id: number;
  name: string;
  email: string;
};

export default function HomeScreen() {
  const { user, token, signOut, isLoading } = useAuth();
  const [consignados, setConsignados] = useState<Consignado[]>([]);

  if (isLoading) {
    return <SplashScreen />;
  }

  useEffect(() => {
    async function fetchConsignados() {
      try {
        const response = await api.get('/userdata');
        setConsignados(response.data.data);
      } catch (error) {
        console.error('Error fetching consignados:', error);
      }
    }

    if (token) {
      fetchConsignados();
    }
  }, [token]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{user?.name}</Text>

      <Text style={styles.subtitle}>Quantidade de Consignados: {consignados.length}</Text>

      <View style={styles.table}>
        <View style={[styles.tableRow, styles.tableHeader]}>
          <Text style={[styles.tableCell, styles.headerCell]}>Nome</Text>
          <Text style={[styles.tableCell, styles.headerCell]}>Email</Text>
        </View>

        {consignados.map((consignado) => (
          <View style={styles.tableRow} key={consignado.id}>
            <Text style={styles.tableCell}>{consignado.name}</Text>
            <Text style={styles.tableCell}>{consignado.email}</Text>
          </View>
        ))}
      </View>

      <Button title='Sair' onPress={signOut} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#0A0C0B',
    padding: 16,
    width: '100%',
    marginTop: StatusBar.currentHeight || 0,
  },
  title: { fontSize: 24, color: '#fff', marginBottom: 16 },
  subtitle: { fontSize: 16, color: '#fff', marginBottom: 12 },
  table: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 0,
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    paddingHorizontal: 4,
    borderBottomWidth: 1,
    borderColor: '#fff',
  },
  tableHeader: {
    backgroundColor: '#1C1F1D',
  },
  tableCell: {
    flex: 1,
    color: '#fff',
    paddingHorizontal: 4,
  },
  headerCell: {
    fontWeight: 'bold',
  },
});
