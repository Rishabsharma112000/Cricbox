import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MatchDetailsScreen } from '../screens/MatchDetailsScreen';
import { MatchListScreen } from '../screens/MatchListScreen';
import { SplashScreen } from '../screens/SplashScreen';

export type RootStackParamList = {
  Splash: undefined;
  MatchList: undefined;
  MatchDetails: { matchId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="MatchList" component={MatchListScreen} />
        <Stack.Screen name="MatchDetails" component={MatchDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
