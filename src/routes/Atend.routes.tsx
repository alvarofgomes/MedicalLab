import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AttendantPanelScreen from '../screens/Atend/Panel';

const Stack = createNativeStackNavigator();

export function AtendRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomePanel" component={AttendantPanelScreen} />
    </Stack.Navigator>
  );
}
