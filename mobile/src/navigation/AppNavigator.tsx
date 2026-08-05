import { DarkTheme, DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';

import { MatchDetailsScreen } from '../screens/MatchDetailsScreen';
import { MatchListScreen } from '../screens/MatchListScreen';
import { SplashScreen } from '../screens/SplashScreen';
import { darkColors, lightColors } from '../theme/colors';

export type RootStackParamList = {
  Splash: undefined;
  LiveMatches: undefined;
  UpcomingMatches: undefined;
  CompletedMatches: undefined;
  MatchDetails: { matchId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  const scheme = useColorScheme();

  const navigationTheme =
    scheme === 'dark'
      ? {
          ...DarkTheme,
          colors: {
            ...DarkTheme.colors,
            primary: darkColors.primary,
            background: darkColors.background,
            card: darkColors.surface,
            text: darkColors.text,
            border: darkColors.border,
            notification: darkColors.danger,
          },
        }
      : {
          ...DefaultTheme,
          colors: {
            ...DefaultTheme.colors,
            primary: lightColors.primary,
            background: lightColors.background,
            card: lightColors.surface,
            text: lightColors.text,
            border: lightColors.border,
            notification: lightColors.danger,
          },
        };

  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="LiveMatches" component={MatchListScreen} />
        <Stack.Screen name="UpcomingMatches" component={MatchListScreen} />
        <Stack.Screen name="CompletedMatches" component={MatchListScreen} />
        <Stack.Screen name="MatchDetails" component={MatchDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
