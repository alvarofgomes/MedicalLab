import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmitTicket from '../screens/Client/ticket/EmitTicket';
import ShowTicket from '../screens/Client/ticket/ShowTicket';
import { RootStackParamList } from '../Navigation/types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function ClientRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="EmitTicket" component={EmitTicket} />
      <Stack.Screen name="ClientShowTicket" component={ShowTicket} />
    </Stack.Navigator>
  );
}
