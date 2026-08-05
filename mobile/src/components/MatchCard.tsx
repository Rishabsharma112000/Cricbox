import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import type { Match } from '../types';

type MatchCardProps = {
  match: Match;
  onPress: () => void;
};

export function MatchCard({ match, onPress }: MatchCardProps) {
  const teamACode = getTeamCode(match.teamA);
  const teamBCode = getTeamCode(match.teamB);

  const statusPillStyle =
    match.status === 'LIVE' ? styles.livePill : match.status === 'UPCOMING' ? styles.upcomingPill : styles.completedPill;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      <View style={styles.topRow}>
        <Text style={styles.seriesText} numberOfLines={1}>
          {match.venue}
        </Text>
        <View style={[styles.statusPill, statusPillStyle]}>
          <Text style={styles.statusPillText}>{match.status}</Text>
        </View>
      </View>

      <Text style={styles.subSeriesText} numberOfLines={1}>
        {match.matchDate}
      </Text>

      <View style={styles.teamsRow}>
        <View style={styles.teamSide}>
          <View style={styles.teamLine}>
            <View style={[styles.teamIcon, styles.teamIconLeft]}>
              <Text style={styles.teamIconText}>{teamACode}</Text>
            </View>
            <Text style={styles.teamName} numberOfLines={1}>
              {match.teamA}
            </Text>
          </View>
        </View>

        <View style={styles.vsBox}>
          <Text style={styles.vsText}>VS</Text>
        </View>

        <View style={styles.teamSide}>
          <View style={[styles.teamLine, styles.teamLineRight]}>
            <Text style={styles.teamNameRight} numberOfLines={1}>
              {match.teamB}
            </Text>
            <View style={[styles.teamIcon, styles.teamIconRight]}>
              <Text style={styles.teamIconText}>{teamBCode}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.scoreRow}>
        <Text style={styles.scoreText} numberOfLines={2}>
          {match.score}
        </Text>
      </View>

      <View style={styles.resultRow}>
        <Text style={styles.resultText} numberOfLines={2}>
          {match.result || (match.status === 'UPCOMING' ? 'Match scheduled' : 'Match update unavailable')}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

function getTeamCode(teamName: string) {
  const words = teamName
    .split(' ')
    .map((w) => w.trim())
    .filter(Boolean);

  const code = (words.length >= 2 ? `${words[0][0]}${words[1][0]}` : words[0]?.slice(0, 3) ?? '').toUpperCase();
  return code.slice(0, 3);
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#0b1c2e',
    borderRadius: 14,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#12324c',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
  },
  seriesText: {
    flex: 1,
    fontSize: 12,
    fontWeight: '700',
    color: '#38bdf8',
  },
  subSeriesText: {
    marginTop: 6,
    fontSize: 12,
    color: '#94a3b8',
  },
  statusPill: {
    borderRadius: 999,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusPillText: {
    fontSize: 11,
    fontWeight: '800',
    textTransform: 'uppercase',
    color: '#071422',
  },
  livePill: {
    backgroundColor: '#fca5a5',
  },
  upcomingPill: {
    backgroundColor: '#7dd3fc',
  },
  completedPill: {
    backgroundColor: '#86efac',
  },
  teamsRow: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  teamSide: {
    flex: 1,
  },
  teamLine: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  teamLineRight: {
    justifyContent: 'flex-end',
  },
  teamIcon: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamIconLeft: {
    backgroundColor: '#1d4ed8',
  },
  teamIconRight: {
    backgroundColor: '#f97316',
  },
  teamIconText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#e2e8f0',
  },
  teamName: {
    flex: 1,
    fontSize: 13,
    fontWeight: '700',
    color: '#e2e8f0',
  },
  teamNameRight: {
    flex: 1,
    textAlign: 'right',
    fontSize: 13,
    fontWeight: '700',
    color: '#e2e8f0',
  },
  vsBox: {
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  vsText: {
    fontSize: 12,
    fontWeight: '900',
    color: '#ef4444',
  },
  scoreRow: {
    marginTop: 12,
    paddingTop: 10,
    borderTopWidth: 1,
    borderTopColor: '#12324c',
  },
  scoreText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#cbd5e1',
  },
  resultRow: {
    marginTop: 8,
  },
  resultText: {
    fontSize: 12,
    color: '#22c55e',
  },
});
