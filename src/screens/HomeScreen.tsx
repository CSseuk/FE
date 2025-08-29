import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/RootNavigator';

export default function HomeScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList, 'Home'>>();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>🏠 Home</Text>
      <Button
        title="Go to Detail"
        onPress={() => navigation.navigate('Detail', { id: 1 })}
      />
    </View>
  );
}
