import { View, Text } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/RootNavigator';

export default function DetailScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'Detail'>>();
  const { id } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>📄 Detail Screen - ID: {id}</Text>
    </View>
  );
}
