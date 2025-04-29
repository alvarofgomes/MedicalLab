// App.tsx
import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { TicketProvider } from './src/context/TicketContext';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/AppRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <TicketProvider>
          <AppRoutes />
        </TicketProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
