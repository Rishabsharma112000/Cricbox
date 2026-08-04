import { StyleSheet, Text, View } from 'react-native';

import type { CommentaryItem as CommentaryItemType } from '../types';

type CommentaryItemProps = {
  item: CommentaryItemType;
};

export function CommentaryItem({ item }: CommentaryItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.overText}>Over {item.over}</Text>
      <Text style={styles.text}>{item.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 8,
  },
  overText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#2563eb',
    marginBottom: 4,
  },
  text: {
    fontSize: 14,
    color: '#374151',
  },
});
