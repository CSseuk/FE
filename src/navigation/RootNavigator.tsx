import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@screens/HomeScreen';
import DetailScreen from '@screens/DetailScreen';

export type RootStackParamList = {
  Home: undefined;
  Detail: { id: number };
  Test: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
