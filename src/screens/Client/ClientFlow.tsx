// src/screens/ClientFlow.tsx
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/types'

const ClientFlow: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleEmitTicket = () => {
    navigation.navigate('EmitTicket');
  };

  return (
    <View style={styles.container}>
      <Button title="Emitir Senha" onPress={handleEmitTicket} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ClientFlow;
