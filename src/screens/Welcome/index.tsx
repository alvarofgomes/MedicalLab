import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../Navigation/types';

const WelcomeScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleStart = () => {
    navigation.navigate('SelectProfile'); // <<< ALTERADO AQUI
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/icon.png')} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.header}>Medical Lab!</Text>
        <Text style={styles.subtitle}>
          Tecnologia a favor de um atendimento mais humano.
        </Text>
      </View>
      <Button title="Vamos começar!" onPress={handleStart} color="#7B1FA2" />
      <Text style={styles.footer}>
        Aplicativo desenvolvido por devsantx {'\n'} Versão 1.0
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E1BEE7',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#7B1FA2',
  },
  subtitle: {
    fontSize: 16,
    color: '#6A1B9A',
    marginTop: 8,
  },
  footer: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 12,
    color: '#9C27B0',
  },
});

export default WelcomeScreen;
