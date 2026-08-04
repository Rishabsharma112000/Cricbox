import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { Match } from '../types';

type MatchCardProps = {
  match: Match;
  onPress: () => void;
};

export function MatchCard({ match, onPress }: MatchCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.headerRow}>
        <Text style={styles.teamsText}>
          {match.teamA} vs {match.teamB}
        </Text>
        <View style={[styles.badge, styles[`${match.status.toLowerCase()}Badge` as keyof typeof styles]]}>
          <Text style={styles.badgeText}>{match.status}</Text>
        </View>
      </View>

      <Text style={styles.scoreText}>{match.score}</Text>
      <Text style={styles.metaText}>Status: {match.result}</Text>
      <Text style={styles.metaText}>Venue: {match.venue}</Text>
      <Text style={styles.metaText}>Date: {match.matchDate}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  teamsText: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    color: '#111827',
  },
  scoreText: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 6,
  },
  metaText: {
    fontSize: 13,
    color: '#6b7280',
    marginBottom: 2,
  },
  badge: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  liveBadge: {
    backgroundColor: '#fee2e2',
  },
  upcomingBadge: {
    backgroundColor: '#dbeafe',
  },
  completedBadge: {
    backgroundColor: '#dcfce7',
  },
});
