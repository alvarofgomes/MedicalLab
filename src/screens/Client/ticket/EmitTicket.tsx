import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../Navigation/types';
import { useTicketContext } from '../../../context/TicketContext';

const ClientEmitTicketScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [loading, setLoading] = useState(false);
  const { emitTicket } = useTicketContext();

  const handleEmit = async (type: 'SP' | 'SE' | 'SG') => {
    setLoading(true);

    try {
      // Chama a função emitTicket do contexto que já retorna um ticket válido
      const ticket = emitTicket(type);
      setLoading(false);

      // Navega para a tela de exibição passando o ticket gerado
      navigation.navigate('ClientShowTicket', { ticket });
    } catch (error) {
      setLoading(false);
      console.error('Erro ao emitir ticket:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Emitir Senha</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#2C5282" />
      ) : (
        <>
          <Button title="Senha Prioritária (SP)" onPress={() => handleEmit('SP')} />
          <Button title="Senha Exame (SE)" onPress={() => handleEmit('SE')} />
          <Button title="Senha Geral (SG)" onPress={() => handleEmit('SG')} />
        </>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#BFDBFE',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C5282',
    marginBottom: 20,
  },
});

export default ClientEmitTicketScreen;
