// AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/Welcome';
import SelectProfile from '../screens/SelectProfile';
import ClientEmitTicketScreen from '../screens/Client/ticket/EmitTicket';
import ClientShowTicketScreen from '../screens/Client/ticket/ShowTicket';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="SelectProfile" component={SelectProfile} />
      <Stack.Screen name="ClientEmitTicket" component={ClientEmitTicketScreen} />
      <Stack.Screen name="ClientShowTicket" component={ClientShowTicketScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
