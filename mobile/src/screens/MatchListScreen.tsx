import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MatchCard } from '../components/MatchCard';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { getMatches } from '../services/matchService';
import type { AppColors } from '../theme/colors';
import { useAppColors } from '../theme/colors';
import type { Match, MatchStatus } from '../types';

type MatchListRouteName = 'LiveMatches' | 'UpcomingMatches' | 'CompletedMatches';

type Props = NativeStackScreenProps<RootStackParamList, MatchListRouteName>;

const BOTTOM_BAR_HEIGHT = 64;

const TABS: Array<{ key: MatchStatus; label: string; route: MatchListRouteName }> = [
  { key: 'LIVE', label: 'Live', route: 'LiveMatches' },
  { key: 'UPCOMING', label: 'Upcoming', route: 'UpcomingMatches' },
  { key: 'COMPLETED', label: 'Completed', route: 'CompletedMatches' },
];

const STATUS_BY_ROUTE: Record<MatchListRouteName, MatchStatus> = {
  LiveMatches: 'LIVE',
  UpcomingMatches: 'UPCOMING',
  CompletedMatches: 'COMPLETED',
};

export function MatchListScreen({ navigation, route }: Props) {
  const colors = useAppColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const activeStatus = STATUS_BY_ROUTE[route.name];
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMatches(activeStatus);
  }, [activeStatus]);

  async function loadMatches(status: MatchStatus) {
    setLoading(true);
    setError(null);

    try {
      const data = await getMatches(status);
      setMatches(data);
    } catch (err) {
      setError('Failed to load matches.');
      setMatches([]);
    } finally {
      setLoading(false);
    }
  }

  function renderEmptyState() {
    if (loading) {
      return (
        <View style={styles.stateContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
          <Text style={styles.stateText}>Loading matches...</Text>
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.stateContainer}>
          <Text style={styles.stateText}>{error}</Text>
        </View>
      );
    }

    return (
      <View style={styles.stateContainer}>
        <Text style={styles.stateText}>No matches found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={matches}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmptyState}
        refreshing={loading}
        onRefresh={() => loadMatches(activeStatus)}
        renderItem={({ item }) => (
          <MatchCard match={item} onPress={() => navigation.navigate('MatchDetails', { matchId: item.id.toString() })} />
        )}
      />

      <View style={styles.bottomBar}>
        {TABS.map((tab) => {
          const isActive = activeStatus === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.bottomTab, isActive && styles.activeBottomTab]}
              onPress={() => {
                if (!isActive) {
                  navigation.replace(tab.route);
                }
              }}
              activeOpacity={0.85}
            >
              <Text style={[styles.bottomTabText, isActive && styles.activeBottomTabText]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
});

function createStyles(colors: AppColors) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    listContent: {
      flexGrow: 1,
      padding: 16,
      paddingBottom: BOTTOM_BAR_HEIGHT + 16,
    },
    stateContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    stateText: {
      fontSize: 15,
      color: colors.mutedText,
      marginTop: 8,
    },
    bottomBar: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: BOTTOM_BAR_HEIGHT,
      paddingHorizontal: 12,
      paddingVertical: 10,
      backgroundColor: colors.surface,
      borderTopWidth: 1,
      borderTopColor: colors.border,
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
    },
    bottomTab: {
      flex: 1,
      height: 44,
      borderRadius: 999,
      backgroundColor: colors.surface2,
      borderWidth: 1,
      borderColor: colors.border,
      alignItems: 'center',
      justifyContent: 'center',
    },
    activeBottomTab: {
      backgroundColor: colors.primary,
      borderColor: colors.primary,
    },
    bottomTabText: {
      fontSize: 13,
      fontWeight: '700',
      color: colors.text,
    },
    activeBottomTabText: {
      color: colors.onPrimary,
    },
  });
}
