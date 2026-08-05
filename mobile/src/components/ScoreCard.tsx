import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { AppColors } from '../theme/colors';
import { useAppColors } from '../theme/colors';
import type { ScorecardItem } from '../types';

type ScoreCardProps = {
  scorecard: ScorecardItem[];
};

export function ScoreCard({ scorecard }: ScoreCardProps) {
  const colors = useAppColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

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

function createStyles(colors: AppColors) {
  return StyleSheet.create({
    card: {
      backgroundColor: colors.surface,
      borderRadius: 12,
      padding: 12,
      marginBottom: 16,
      borderWidth: 1,
      borderColor: colors.border,
    },
    headerRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    headerText: {
      fontSize: 13,
      fontWeight: '700',
      color: colors.mutedText,
      textTransform: 'uppercase',
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: colors.border,
    },
    batsmanText: {
      fontSize: 14,
      color: colors.text,
      flex: 1,
    },
    runsText: {
      fontSize: 14,
      color: colors.text,
      fontWeight: '600',
    },
    emptyText: {
      fontSize: 14,
      color: colors.mutedText,
      marginBottom: 16,
    },
  });
}
