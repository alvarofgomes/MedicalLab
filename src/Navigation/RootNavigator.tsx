import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useAuth } from '../context/AuthContext';
import AppNavigator from '../routes/Auth.routes';
import { AdmRoutes } from '../routes/Adm.routes';
import { AtendRoutes } from '../routes/Atend.routes';
import { ClientRoutes } from '../routes/Client.routes';

const Stack = createNativeStackNavigator();

const RootNavigator: React.FC = () => {
  const { profile } = useAuth();

  return (
    <NavigationContainer>
      {profile === 'auth' && <AppNavigator />}
      {profile === 'admin' && <AdmRoutes />}
      {profile === 'attend' && <AtendRoutes />}
      {profile === 'client' && <ClientRoutes />}
    </NavigationContainer>
  );
};

export default RootNavigator;
