export type MatchStatus = "LIVE" | "UPCOMING" | "COMPLETED";

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

export const matches: Match[] = [
  {
    id: 1,
    status: "LIVE",
    teamA: "India",
    teamB: "Australia",
    venue: "Narendra Modi Stadium, Ahmedabad",
    matchDate: "2026-08-04",
    score: "India 182/4, Australia 0/0",
    overs: "28.3 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Virat Kohli", runs: 74, balls: 62, fours: 8, sixes: 1, strikeRate: 119.35 },
      { batsman: "Rohit Sharma", runs: 42, balls: 31, fours: 5, sixes: 1, strikeRate: 135.48 }
    ],
    commentary: [
      { over: "28.3", text: "Kohli hits a boundary through covers." },
      { over: "28.1", text: "India collects two quick runs off the over." }
    ]
  },
  {
    id: 2,
    status: "LIVE",
    teamA: "England",
    teamB: "South Africa",
    venue: "Lord's, London",
    matchDate: "2026-08-05",
    score: "England 145/6, South Africa 0/0",
    overs: "22.2 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Jos Buttler", runs: 38, balls: 29, fours: 4, sixes: 2, strikeRate: 131.03 },
      { batsman: "Ben Stokes", runs: 21, balls: 18, fours: 3, sixes: 0, strikeRate: 116.67 }
    ],
    commentary: [
      { over: "22.2", text: "Stokes pulls a short ball for six." },
      { over: "22.0", text: "England loses a wicket in the middle overs." }
    ]
  },
  {
    id: 3,
    status: "UPCOMING",
    teamA: "Pakistan",
    teamB: "New Zealand",
    venue: "Gaddafi Stadium, Lahore",
    matchDate: "2026-08-08",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are preparing for the toss." }
    ]
  },
  {
    id: 4,
    status: "UPCOMING",
    teamA: "Sri Lanka",
    teamB: "Bangladesh",
    venue: "R. Premadasa Stadium, Colombo",
    matchDate: "2026-08-09",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "The captains are walking out for the toss." }
    ]
  },
  {
    id: 5,
    status: "COMPLETED",
    teamA: "West Indies",
    teamB: "Zimbabwe",
    venue: "Queens Park Oval, Trinidad",
    matchDate: "2026-08-01",
    score: "West Indies 289/7, Zimbabwe 241/9",
    overs: "50.0 / 50",
    result: "West Indies won by 48 runs",
    scorecard: [
      { batsman: "Shai Hope", runs: 102, balls: 94, fours: 10, sixes: 2, strikeRate: 108.51 },
      { batsman: "Jason Holder", runs: 45, balls: 32, fours: 4, sixes: 2, strikeRate: 140.63 }
    ],
    commentary: [
      { over: "50.0", text: "West Indies finish with a strong total." },
      { over: "49.6", text: "The final wicket falls and the match is over." }
    ]
  },
  {
    id: 6,
    status: "COMPLETED",
    teamA: "Afghanistan",
    teamB: "Ireland",
    venue: "Shaheed Vijay Singh Pathik Sports Complex, Greater Noida",
    matchDate: "2026-07-30",
    score: "Afghanistan 214/8, Ireland 198/10",
    overs: "50.0 / 50",
    result: "Afghanistan won by 16 runs",
    scorecard: [
      { batsman: "Rahmanullah Gurbaz", runs: 67, balls: 59, fours: 7, sixes: 1, strikeRate: 113.56 },
      { batsman: "Curtis Campher", runs: 49, balls: 44, fours: 6, sixes: 0, strikeRate: 111.36 }
    ],
    commentary: [
      { over: "50.0", text: "Afghanistan secure a narrow victory." },
      { over: "48.3", text: "Ireland fall short in the final overs." }
    ]
  }
];
