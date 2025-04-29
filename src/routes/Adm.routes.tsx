import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AdminDashboardScreen from '../screens/Adm/Dashboard/Index';
import ReportsScreen from '../screens/Adm/Reports';

const Stack = createNativeStackNavigator();

export function AdmRoutes() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Dashboard" component={AdminDashboardScreen} />
      <Stack.Screen name="ReportsScreen" component={ReportsScreen} />
    </Stack.Navigator>
  );
}
