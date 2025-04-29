import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

const ReportsScreen: React.FC = () => {
  const todayFormatted = new Date().toLocaleDateString('pt-BR');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Relatório Diário ({todayFormatted})</Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Senhas Emitidas</Text>
          <Text style={styles.cardCount}>10</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Senhas Atendidas</Text>
          <Text style={styles.cardCount}>5</Text>
        </View>
        {/* Adicionar outras cards aqui */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F9F7E3',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FBBF24',
    marginBottom: 16,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#FEE2A1',
    padding: 16,
    borderRadius: 12,
    marginBottom: 16,
    width: '48%',
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6B3D2A',
  },
  cardCount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#9C4D00',
  },
});

export default ReportsScreen;
