import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../../../Navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ticket } from '../../../context/TickectsTypes';

// Tipagem para o route
type ShowTicketRouteProp = RouteProp<RootStackParamList, 'ClientShowTicket'>;

const ClientShowTicketScreen: React.FC = () => {
  const route = useRoute<ShowTicketRouteProp>();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Adicionando verificação segura para o ticket
  const ticket = route.params?.ticket;

  if (!ticket) {
    return (
      <View style={styles.container}>
        <Text>Nenhum ticket encontrado</Text>
        <Button title="Voltar" onPress={() => navigation.goBack()} color="#007bff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sua Senha</Text>
      <View style={styles.ticketCard}>
        <Text style={styles.ticketText}>{ticket.senha}</Text>
        <Text style={styles.typeText}>Tipo: {ticket.type}</Text>
        <Text style={styles.dateText}>
          Emissão: {new Date(ticket.createdAt).toLocaleString()}
        </Text>
      </View>
      <Button title="Voltar" onPress={() => navigation.goBack()} color="#007bff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F2F1',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#00796B',
    marginBottom: 24,
  },
  ticketCard: {
    backgroundColor: 'white',
    padding: 32,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  ticketText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#004D40',
  },
  typeText: {
    fontSize: 20,
    marginTop: 12,
    color: '#00796B',
  },
  dateText: {
    fontSize: 16,
    marginTop: 8,
    color: '#757575',
  },
});

export default ClientShowTicketScreen;
