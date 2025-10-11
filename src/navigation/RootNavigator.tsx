import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TopNav, BotNav } from '@design-system/index';
import {
  RootStackParamList,
  TabParamList,
  AuthStackParamList,
} from './navigation.types';
import {
  HomeScreen,
  BookmarkScreen,
  DocsScreen,
  MypageScreen,
  SplashScreen,
  LoginScreen,
  SignupScreen,
} from '@screens/index';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName='Splash'
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name='Splash' component={SplashScreen} />
        <RootStack.Screen
          name='Auth'
          component={AuthNavigator}
          options={{
            headerShown: true,
            header: () => <TopNav Logo={true} title='' />,
          }}
        />
        <RootStack.Screen name='Tabs' component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <TopNav Logo={true} title='' />,
      }}
    >
      <AuthStack.Screen name='Login' component={LoginScreen} />
      <AuthStack.Screen name='Signup' component={SignupScreen} />
    </AuthStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => <BotNav {...(props as any)} />}
      screenOptions={{
        headerShown: true,
        header: () => <TopNav Logo={true} title='' />,
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{ title: '문제풀기' }}
      />
      <Tab.Screen
        name='Bookmark'
        component={BookmarkScreen}
        options={{ title: '북마크' }}
      />
      <Tab.Screen
        name='Docs'
        component={DocsScreen}
        options={{ title: '개념설명' }}
      />
      <Tab.Screen
        name='Mypage'
        component={MypageScreen}
        options={{ title: '마이페이지' }}
      />
    </Tab.Navigator>
  );
}
