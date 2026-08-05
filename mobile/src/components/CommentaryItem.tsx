import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import type { AppColors } from '../theme/colors';
import { useAppColors } from '../theme/colors';
import type { CommentaryItem as CommentaryItemType } from '../types';

type CommentaryItemProps = {
  item: CommentaryItemType;
};

export function CommentaryItem({ item }: CommentaryItemProps) {
  const colors = useAppColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  return (
    <View style={styles.container}>
      <Text style={styles.overText}>Over {item.over}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

function createStyles(colors: AppColors) {
  return StyleSheet.create({
    container: {
      backgroundColor: colors.surface,
      borderRadius: 10,
      padding: 12,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: colors.border,
    },
    overText: {
      fontSize: 13,
      fontWeight: '700',
      color: colors.primary,
      marginBottom: 4,
    },
    text: {
      fontSize: 14,
      color: colors.mutedText,
    },
  });
}
