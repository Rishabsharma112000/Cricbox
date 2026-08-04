import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { MatchDetailsScreen } from '../screens/MatchDetailsScreen';
import { MatchListScreen } from '../screens/MatchListScreen';

export type RootStackParamList = {
  MatchList: undefined;
  MatchDetails: { matchId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MatchList"
          component={MatchListScreen}
          options={{ title: 'Matches' }}
        />
        <Stack.Screen
          name="MatchDetails"
          component={MatchDetailsScreen}
          options={{ title: 'Match Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
