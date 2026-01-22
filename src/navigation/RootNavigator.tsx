import { TopNav, BotNav } from '@design-system/index';
import {
  createBottomTabNavigator,
  type BottomTabNavigationOptions,
} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
  type RouteProp,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  HomeScreen,
  BookmarkScreen,
  DocsScreen,
  DocsDetailScreen,
  MypageScreen,
  SplashScreen,
  SigninScreen,
  SignupScreen,
  QuizListScreen,
  QuizSolveScreen,
} from '@screens/index';
import { safeGoBack } from '@src/utils/safeGoBack';
import type { ViewStyle } from 'react-native';

import {
  RootStackParamList,
  TabParamList,
  AuthStackParamList,
  HomeStackParamList,
  DocsStackParamList,
} from './navigation.types';

const RootStack = createNativeStackNavigator<RootStackParamList>();
const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const HomeStack = createNativeStackNavigator<HomeStackParamList>();
const DocsStack = createNativeStackNavigator<DocsStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

const HIDE_TABBAR_ON = ['QuizSolve'] as const;

function tabBarStyleByRoute(
  route: RouteProp<TabParamList, keyof TabParamList>
): ViewStyle | undefined {
  const name = getFocusedRouteNameFromRoute(route) ?? 'HomeMain';
  if (HIDE_TABBAR_ON.includes(name as (typeof HIDE_TABBAR_ON)[number])) {
    return { display: 'none' };
  }
  return { display: 'flex' };
}

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="Splash"
        screenOptions={{ headerShown: false }}
      >
        <RootStack.Screen name="Splash" component={SplashScreen} />
        <RootStack.Screen name="Auth" component={AuthNavigator} />
        <RootStack.Screen name="Tabs" component={TabNavigator} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

function AuthNavigator() {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <AuthStack.Screen name="Login" component={SigninScreen} />
      <AuthStack.Screen
        name="Signup"
        component={SignupScreen}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <TopNav
              Logo={false}
              title="회원가입"
              leftIconName="chevron-left"
              onLeftPress={() =>
                safeGoBack(navigation, () => navigation.navigate('Login'))
              }
            />
          ),
        })}
      />
    </AuthStack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      tabBar={(props) => (
        <BotNav {...(props as Parameters<typeof BotNav>[0])} />
      )}
      screenOptions={{
        headerShown: true,
        header: () => <TopNav Logo={true} title="" />,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={({ route }): BottomTabNavigationOptions => ({
          headerShown: false,
          tabBarStyle: tabBarStyleByRoute(route),
          tabBarHideOnKeyboard: true,
        })}
      />
      <Tab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={{ title: '북마크' }}
      />
      <Tab.Screen
        name="Docs"
        component={DocsStackNavigator}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Mypage"
        component={MypageScreen}
        options={{ title: '마이페이지' }}
      />
    </Tab.Navigator>
  );
}

function HomeStackNavigator() {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <TopNav Logo={true} title="" />,
      }}
    >
      <HomeStack.Screen
        name="HomeMain"
        component={HomeScreen}
        options={{ title: '문제 풀기' }}
      />
      <HomeStack.Screen
        name="QuizList"
        component={QuizListScreen}
        options={({ navigation }) => ({
          headerShown: true,
          header: () => (
            <TopNav
              Logo={false}
              title="문제풀기"
              leftIconName="chevron-left"
              onLeftPress={() =>
                safeGoBack(navigation, () => navigation.navigate('HomeMain'))
              }
            />
          ),
        })}
      />
      <HomeStack.Screen
        name="QuizSolve"
        component={QuizSolveScreen}
        options={({ navigation, route }) => {
          const quizType = route.params?.quizType;
          return {
            headerShown: true,
            header: () => (
              <TopNav
                Logo={false}
                title="목록으로 돌아가기"
                leftIconName="chevron-left"
                onLeftPress={() =>
                  safeGoBack(navigation, () =>
                    navigation.navigate('QuizList', { quizType })
                  )
                }
              />
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

function DocsStackNavigator() {
  return (
    <DocsStack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <TopNav Logo={true} title="" />,
      }}
    >
      <DocsStack.Screen name="DocsMain" component={DocsScreen} />
      <DocsStack.Screen
        name="DocsDetail"
        component={DocsDetailScreen}
        options={({ navigation }) => ({
          header: () => (
            <TopNav
              Logo={false}
              title="목록으로 돌아가기"
              leftIconName="chevron-left"
              onLeftPress={() =>
                safeGoBack(navigation, () => navigation.navigate('DocsMain'))
              }
            />
          ),
        })}
      />
    </DocsStack.Navigator>
  );
}
