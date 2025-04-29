// src/routes/AppRoutes.tsx
import React from 'react';
import { useAuth } from '../context/AuthContext';
import AppNavigator from './Auth.routes';
import { AdmRoutes } from './Adm.routes';
import { AtendRoutes } from './Atend.routes';
import { ClientRoutes } from './Client.routes';

export function AppRoutes() {
  const { profile } = useAuth();

  if (profile === 'auth') {
    return <AppNavigator />;
  }

  if (profile === 'admin') {
    return <AdmRoutes />;
  }

  if (profile === 'attend') {
    return <AtendRoutes />;
  }

  if (profile === 'client') {
    return <ClientRoutes />;
  }

  // Default fallback
  return <AppNavigator />;
}
