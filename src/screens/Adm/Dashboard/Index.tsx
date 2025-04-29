import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; // Para ícones no React Native

const AdminDashboardScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Topo com ícone e saudação */}
      <View style={styles.header}>
        <MaterialIcons name="account-circle" size={40} color="#6b46c1" />
        <Text style={styles.title}>Olá, {'{nome}'}</Text>
      </View>

      {/* Área de gerar relatório */}
      <View style={styles.reportSection}>
        <Text style={styles.sectionTitle}>Gerar Relatório:</Text>
        <Button title="Semanal" onPress={() => {}} />
        <Button title="Mensal" onPress={() => {}} />
      </View>

      {/* Informações */}
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>Total de senhas emitidas:</Text>
        <Text style={styles.infoText}>Total de senhas atendidas:</Text>
        <Text style={styles.infoText}>Tempo médio dos atendimentos:</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#faf5ff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#6b46c1',
    marginLeft: 8,
  },
  reportSection: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6b46c1',
    marginBottom: 10,
  },
  infoSection: {
    marginTop: 30,
  },
  infoText: {
    fontSize: 18,
    color: '#6b46c1',
    marginBottom: 8,
  },
});

export default AdminDashboardScreen;
