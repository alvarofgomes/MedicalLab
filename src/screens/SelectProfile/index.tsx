// src/screens/SelectProfile/index.tsx
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useAuth } from '../../context/AuthContext';

export default function SelectProfile() {
  const { setProfile } = useAuth();

  return (
    <View style={styles.container}>
      <Button title="Admin" onPress={() => setProfile('admin')} />
      <Button title="Atendente" onPress={() => setProfile('attend')} />
      <Button title="Cliente" onPress={() => setProfile('client')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
