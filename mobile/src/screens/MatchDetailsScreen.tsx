import { useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { CommentaryItem as CommentaryItemComponent } from '../components/CommentaryItem';
import { ScoreCard } from '../components/ScoreCard';
import type { RootStackParamList } from '../navigation/AppNavigator';
import { getCommentary, getMatchDetails } from '../services/matchService';
import type { AppColors } from '../theme/colors';
import { useAppColors } from '../theme/colors';
import type { CommentaryItem, Match } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'MatchDetails'>;

export function MatchDetailsScreen({ route }: Props) {
  const colors = useAppColors();
  const styles = useMemo(() => createStyles(colors), [colors]);

  const [match, setMatch] = useState<Match | null>(null);
  const [commentary, setCommentary] = useState<CommentaryItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadDetails() {
      setLoading(true);
      setError(null);

      try {
        const [matchData, commentaryData] = await Promise.all([
          getMatchDetails(route.params.matchId),
          getCommentary(route.params.matchId),
        ]);

        setMatch(matchData);
        setCommentary(commentaryData);
      } catch (err) {
        setError('Failed to load match details.');
      } finally {
        setLoading(false);
      }
    }

    loadDetails();
  }, [route.params.matchId]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.stateText}>Loading details...</Text>
      </View>
    );
  }

  if (error || !match) {
    return (
      <View style={styles.centered}>
        <Text style={styles.stateText}>{error ?? 'Match not found.'}</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <Text style={styles.title}>{match.teamA} vs {match.teamB}</Text>
      <Text style={styles.meta}>Score: {match.score}</Text>
      <Text style={styles.meta}>Status: {match.status}</Text>
      <Text style={styles.meta}>Venue: {match.venue}</Text>
      <Text style={styles.meta}>Date: {match.matchDate}</Text>

      <Text style={styles.sectionTitle}>Scorecard</Text>
      <ScoreCard scorecard={match.scorecard} />

      <Text style={styles.sectionTitle}>Ball-by-ball commentary</Text>
      {commentary.length > 0 ? (
        commentary.map((item, index) => <CommentaryItemComponent key={`${item.over}-${index}`} item={item} />)
      ) : (
        <Text style={styles.stateText}>No commentary available.</Text>
      )}
    </ScrollView>
  );
}

function createStyles(colors: AppColors) {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.background,
    },
    contentContainer: {
      padding: 16,
      paddingBottom: 24,
    },
    centered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.background,
    },
    title: {
      fontSize: 22,
      fontWeight: '700',
      color: colors.text,
      marginBottom: 8,
    },
    meta: {
      fontSize: 14,
      color: colors.mutedText,
      marginBottom: 4,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: '700',
      color: colors.text,
      marginTop: 12,
      marginBottom: 8,
    },
    stateText: {
      fontSize: 15,
      color: colors.mutedText,
      marginTop: 8,
    },
  });
}
