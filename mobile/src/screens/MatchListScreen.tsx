import { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { MatchCard } from '../components/MatchCard';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { getMatches } from '../services/matchService';
import type { Match, MatchStatus } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'MatchList'>;

const TABS: Array<{ key: MatchStatus; label: string }> = [
  { key: 'LIVE', label: 'Live' },
  { key: 'UPCOMING', label: 'Upcoming' },
  { key: 'COMPLETED', label: 'Completed' },
];

export function MatchListScreen({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<MatchStatus>('LIVE');
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadMatches(activeTab);
  }, [activeTab]);

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
          <ActivityIndicator size="large" color="#2563eb" />
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
      <View style={styles.tabRow}>
        {TABS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <TouchableOpacity
              key={tab.key}
              style={[styles.tab, isActive && styles.activeTab]}
              onPress={() => setActiveTab(tab.key)}
            >
              <Text style={[styles.tabText, isActive && styles.activeTabText]}>{tab.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {loading && !matches.length ? (
        renderEmptyState()
      ) : error && !matches.length ? (
        renderEmptyState()
      ) : matches.length === 0 ? (
        renderEmptyState()
      ) : (
        <FlatList
          data={matches}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <MatchCard
              match={item}
              onPress={() => navigation.navigate('MatchDetails', { matchId: item.id.toString() })}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    padding: 16,
  },
  tabRow: {
    flexDirection: 'row',
    marginBottom: 16,
    gap: 8,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 999,
    backgroundColor: '#e5e7eb',
  },
  activeTab: {
    backgroundColor: '#2563eb',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#374151',
  },
  activeTabText: {
    color: '#fff',
  },
  listContent: {
    paddingBottom: 16,
  },
  stateContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stateText: {
    fontSize: 15,
    color: '#6b7280',
    marginTop: 8,
  },
});
