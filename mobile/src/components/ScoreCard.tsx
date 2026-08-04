import { StyleSheet, Text, View } from 'react-native';

import type { ScorecardItem } from '../types';

type ScoreCardProps = {
  scorecard: ScorecardItem[];
};

export function ScoreCard({ scorecard }: ScoreCardProps) {
  if (scorecard.length === 0) {
    return <Text style={styles.emptyText}>No scorecard available.</Text>;
  }

  return (
    <View style={styles.card}>
      <View style={styles.headerRow}>
        <Text style={styles.headerText}>Batsman</Text>
        <Text style={styles.headerText}>Runs</Text>
      </View>

      {scorecard.map((item, index) => (
        <View key={`${item.batsman}-${index}`} style={styles.row}>
          <Text style={styles.batsmanText}>{item.batsman}</Text>
          <Text style={styles.runsText}>{item.runs}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#6b7280',
    textTransform: 'uppercase',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f4f6',
  },
  batsmanText: {
    fontSize: 14,
    color: '#111827',
    flex: 1,
  },
  runsText: {
    fontSize: 14,
    color: '#111827',
    fontWeight: '600',
  },
  emptyText: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 16,
  },
});
