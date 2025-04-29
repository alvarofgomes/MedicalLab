// src/screens/Atend/Panel/index.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import { useTicketContext } from '../../../context/TicketContext';
import { Audio } from 'expo-av';
import { Ticket } from '../../../context/TickectsTypes';

let soundObject: Audio.Sound | null = null;

const AttendantPanelScreen: React.FC = () => {
  const {
    tickets,
    calledTickets,
    currentTicket,
    callNextTicket,
    finalizeTicket
  } = useTicketContext();

  const [soundLoaded, setSoundLoaded] = useState(false);

  // Carregar som
  useEffect(() => {
    const loadSound = async () => {
      try {
        const { sound } = await Audio.Sound.createAsync(
          require('../../../assets/sounds/notification.mp3')
        );
        soundObject = sound;
        setSoundLoaded(true);
      } catch (error) {
        console.error('Erro ao carregar som:', error);
      }
    };

    loadSound();

    return () => {
      if (soundObject) {
        soundObject.unloadAsync();
      }
    };
  }, []);

  const playNotificationSound = async () => {
    if (soundLoaded && soundObject) {
      try {
        await soundObject.replayAsync();
      } catch (error) {
        console.error('Erro ao reproduzir som:', error);
      }
    }
  };

  const handleCallNext = async () => {
    try {
      const nextTicket = callNextTicket();
      if (nextTicket) {
        await playNotificationSound();
        Alert.alert(
          'Senha Chamada',
          `Chamando: ${nextTicket.senha}\nTipo: ${nextTicket.type}`,
          [{ text: 'OK' }]
        );
      }
    } catch (error) {
      console.error('Erro ao chamar próxima senha:', error);
      Alert.alert('Erro', 'Não foi possível chamar a próxima senha');
    }
  };

  const handleFinalize = () => {
    if (currentTicket) {
      finalizeTicket(currentTicket.id);
      Alert.alert(
        'Atendimento Concluído',
        `Senha ${currentTicket.senha} atendida com sucesso!`
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Painel do Atendente</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Painel de informações */}
        <View style={styles.infoPanel}>
          <Text style={styles.infoTitle}>Senha Atual:</Text>
          <Text style={styles.currentTicket}>
            {currentTicket ? currentTicket.senha : '---'}
          </Text>
          <Text style={styles.queueInfo}>
            Senhas na fila: {tickets.length}
          </Text>
        </View>

        {/* Histórico de chamadas */}
        {calledTickets.length > 0 && (
          <View style={styles.historyPanel}>
            <Text style={styles.sectionTitle}>Últimas senhas chamadas:</Text>
            {calledTickets.slice(0, 5).map((ticket) => (
              <View key={ticket.id} style={styles.ticketItem}>
                <Text style={styles.ticketText}>{ticket.senha}</Text>
                <Text style={styles.ticketType}>{ticket.type}</Text>
              </View>
            ))}
          </View>
        )}

        {/* Botões de ação */}
        <View style={styles.buttonsContainer}>
          <Button
            title="Chamar Próxima Senha"
            onPress={handleCallNext}
            color="#2E86C1"
            disabled={tickets.length === 0}
          />

          {currentTicket && (
            <Button
              title="Finalizar Atendimento"
              onPress={handleFinalize}
              color="#28B463"
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
  },
  infoPanel: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  infoTitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 5,
  },
  currentTicket: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2E86C1',
    marginBottom: 15,
    textAlign: 'center',
  },
  queueInfo: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  historyPanel: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
  },
  ticketItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  ticketText: {
    fontSize: 16,
    color: '#333',
  },
  ticketType: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2E86C1',
  },
  buttonsContainer: {
    gap: 15,
  },
});

export default AttendantPanelScreen;
