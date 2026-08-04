export type MatchStatus = 'LIVE' | 'UPCOMING' | 'COMPLETED';

export interface ScorecardItem {
  batsman: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

export interface CommentaryItem {
  over: string;
  text: string;
}

export interface Match {
  id: number;
  status: MatchStatus;
  teamA: string;
  teamB: string;
  venue: string;
  matchDate: string;
  score: string;
  overs: string;
  result: string;
  scorecard: ScorecardItem[];
  commentary: CommentaryItem[];
}
