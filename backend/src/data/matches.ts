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
      { over: "28.3", text: "defends back to the bowler." },{ over: "28.2", text: "drives through cover for a single." },{ over: "28.1", text: "cuts to the point fence." },{ over: "28.0", text: "pulls away for a boundary." },{ over: "27.9", text: "swings hard and survives a near miss." },{ over: "27.8", text: "takes a quick single to deep mid-wicket." }
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
      { over: "22.2", text: "defends back to the bowler." },{ over: "22.1", text: "drives through cover for a single." },{ over: "22.0", text: "cuts to the point fence." },{ over: "21.9", text: "pulls away for a boundary." },{ over: "21.8", text: "swings hard and survives a near miss." },{ over: "21.7", text: "takes a quick single to deep mid-wicket." }
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
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
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
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
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
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
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
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 7,
    status: "LIVE",
    teamA: "New Zealand",
    teamB: "England",
    venue: "Eden Park, Auckland",
    matchDate: "2026-08-05",
    score: "New Zealand 220/5, England 102/2",
    overs: "35.4 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Kane Williamson", runs: 84, balls: 71, fours: 7, sixes: 1, strikeRate: 118.31 },
      { batsman: "Ben Duckett", runs: 38, balls: 25, fours: 5, sixes: 0, strikeRate: 152.00 }
    ],
    commentary: [
      { over: "35.4", text: "defends back to the bowler." },{ over: "35.3", text: "drives through cover for a single." },{ over: "35.2", text: "cuts to the point fence." },{ over: "35.1", text: "pulls away for a boundary." },{ over: "35.0", text: "swings hard and survives a near miss." },{ over: "34.9", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 8,
    status: "LIVE",
    teamA: "South Africa",
    teamB: "Australia",
    venue: "Newlands, Cape Town",
    matchDate: "2026-08-05",
    score: "South Africa 185/7, Australia 89/1",
    overs: "18.5 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Tristan Stubbs", runs: 49, balls: 31, fours: 5, sixes: 1, strikeRate: 158.06 },
      { batsman: "Marnus Labuschagne", runs: 34, balls: 29, fours: 4, sixes: 0, strikeRate: 117.24 }
    ],
    commentary: [
      { over: "18.5", text: "defends back to the bowler." },{ over: "18.4", text: "drives through cover for a single." },{ over: "18.3", text: "cuts to the point fence." },{ over: "18.2", text: "pulls away for a boundary." },{ over: "18.1", text: "swings hard and survives a near miss." },{ over: "18.0", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 9,
    status: "LIVE",
    teamA: "India",
    teamB: "Pakistan",
    venue: "Wankhede Stadium, Mumbai",
    matchDate: "2026-08-05",
    score: "India 198/6, Pakistan 54/1",
    overs: "12.1 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Virat Kohli", runs: 62, balls: 56, fours: 6, sixes: 0, strikeRate: 110.71 },
      { batsman: "Babar Azam", runs: 24, balls: 27, fours: 3, sixes: 0, strikeRate: 88.89 }
    ],
    commentary: [
      { over: "12.1", text: "defends back to the bowler." },{ over: "12.0", text: "drives through cover for a single." },{ over: "11.9", text: "cuts to the point fence." },{ over: "11.8", text: "pulls away for a boundary." },{ over: "11.7", text: "swings hard and survives a near miss." },{ over: "11.6", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 10,
    status: "LIVE",
    teamA: "Sri Lanka",
    teamB: "Bangladesh",
    venue: "Pallekele International Stadium, Kandy",
    matchDate: "2026-08-05",
    score: "Sri Lanka 214/4, Bangladesh 0/0",
    overs: "34.2 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Sadeera Samarawickrama", runs: 91, balls: 73, fours: 9, sixes: 1, strikeRate: 124.66 },
      { batsman: "Charith Asalanka", runs: 43, balls: 31, fours: 5, sixes: 1, strikeRate: 138.71 }
    ],
    commentary: [
      { over: "34.2", text: "defends back to the bowler." },{ over: "34.1", text: "drives through cover for a single." },{ over: "34.0", text: "cuts to the point fence." },{ over: "33.9", text: "pulls away for a boundary." },{ over: "33.8", text: "swings hard and survives a near miss." },{ over: "33.7", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 11,
    status: "LIVE",
    teamA: "West Indies",
    teamB: "Zimbabwe",
    venue: "Kensington Oval, Barbados",
    matchDate: "2026-08-05",
    score: "West Indies 175/9, Zimbabwe 103/4",
    overs: "25.0 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Nicholas Pooran", runs: 44, balls: 32, fours: 3, sixes: 2, strikeRate: 137.50 },
      { batsman: "Wesley Madhevere", runs: 28, balls: 30, fours: 2, sixes: 1, strikeRate: 93.33 }
    ],
    commentary: [
      { over: "25.0", text: "defends back to the bowler." },{ over: "24.9", text: "drives through cover for a single." },{ over: "24.8", text: "cuts to the point fence." },{ over: "24.7", text: "pulls away for a boundary." },{ over: "24.6", text: "swings hard and survives a near miss." },{ over: "24.5", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 12,
    status: "LIVE",
    teamA: "Afghanistan",
    teamB: "Ireland",
    venue: "Red Bull Arena, New Jersey",
    matchDate: "2026-08-05",
    score: "Afghanistan 156/7, Ireland 89/3",
    overs: "18.5 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Rahmanullah Gurbaz", runs: 57, balls: 44, fours: 6, sixes: 1, strikeRate: 129.55 },
      { batsman: "Paul Stirling", runs: 29, balls: 23, fours: 4, sixes: 0, strikeRate: 126.09 }
    ],
    commentary: [
      { over: "18.5", text: "defends back to the bowler." },{ over: "18.4", text: "drives through cover for a single." },{ over: "18.3", text: "cuts to the point fence." },{ over: "18.2", text: "pulls away for a boundary." },{ over: "18.1", text: "swings hard and survives a near miss." },{ over: "18.0", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 13,
    status: "LIVE",
    teamA: "Netherlands",
    teamB: "Scotland",
    venue: "Hagley Oval, Christchurch",
    matchDate: "2026-08-05",
    score: "Netherlands 190/8, Scotland 78/2",
    overs: "15.0 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Bas de Leede", runs: 35, balls: 28, fours: 4, sixes: 1, strikeRate: 125.00 },
      { batsman: "Kyle Coetzer", runs: 42, balls: 40, fours: 3, sixes: 0, strikeRate: 105.00 }
    ],
    commentary: [
      { over: "15.0", text: "defends back to the bowler." },{ over: "14.9", text: "drives through cover for a single." },{ over: "14.8", text: "cuts to the point fence." },{ over: "14.7", text: "pulls away for a boundary." },{ over: "14.6", text: "swings hard and survives a near miss." },{ over: "14.5", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 14,
    status: "LIVE",
    teamA: "Canada",
    teamB: "USA",
    venue: "Sir Vivian Richards Stadium, Antigua",
    matchDate: "2026-08-05",
    score: "Canada 142/6, USA 67/1",
    overs: "11.3 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Aaron Jones", runs: 31, balls: 22, fours: 4, sixes: 1, strikeRate: 140.91 },
      { batsman: "Steven Taylor", runs: 24, balls: 18, fours: 3, sixes: 0, strikeRate: 133.33 }
    ],
    commentary: [
      { over: "11.3", text: "defends back to the bowler." },{ over: "11.2", text: "drives through cover for a single." },{ over: "11.1", text: "cuts to the point fence." },{ over: "11.0", text: "pulls away for a boundary." },{ over: "10.9", text: "swings hard and survives a near miss." },{ over: "10.8", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 15,
    status: "LIVE",
    teamA: "Nepal",
    teamB: "Oman",
    venue: "Barabati Stadium, Cuttack",
    matchDate: "2026-08-05",
    score: "Nepal 129/4, Oman 0/0",
    overs: "24.1 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Aarif Sheikh", runs: 47, balls: 35, fours: 5, sixes: 1, strikeRate: 134.29 },
      { batsman: "Dipendra Singh Airee", runs: 32, balls: 27, fours: 4, sixes: 0, strikeRate: 118.52 }
    ],
    commentary: [
      { over: "24.1", text: "defends back to the bowler." },{ over: "24.0", text: "drives through cover for a single." },{ over: "23.9", text: "cuts to the point fence." },{ over: "23.8", text: "pulls away for a boundary." },{ over: "23.7", text: "swings hard and survives a near miss." },{ over: "23.6", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 16,
    status: "LIVE",
    teamA: "UAE",
    teamB: "Namibia",
    venue: "Sheikh Zayed Cricket Stadium, Abu Dhabi",
    matchDate: "2026-08-05",
    score: "UAE 163/8, Namibia 72/2",
    overs: "16.2 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Muhammad Waseem", runs: 39, balls: 33, fours: 4, sixes: 0, strikeRate: 118.18 },
      { batsman: "Zane Green", runs: 28, balls: 22, fours: 3, sixes: 1, strikeRate: 127.27 }
    ],
    commentary: [
      { over: "16.2", text: "defends back to the bowler." },{ over: "16.1", text: "drives through cover for a single." },{ over: "16.0", text: "cuts to the point fence." },{ over: "15.9", text: "pulls away for a boundary." },{ over: "15.8", text: "swings hard and survives a near miss." },{ over: "15.7", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 17,
    status: "LIVE",
    teamA: "Papua New Guinea",
    teamB: "Ireland",
    venue: "Hagley Oval, Christchurch",
    matchDate: "2026-08-05",
    score: "PNG 142/6, Ireland 54/1",
    overs: "9.5 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Sese Bau", runs: 32, balls: 23, fours: 2, sixes: 1, strikeRate: 139.13 },
      { batsman: "Curtis Campher", runs: 22, balls: 15, fours: 2, sixes: 1, strikeRate: 146.67 }
    ],
    commentary: [
      { over: "9.5", text: "defends back to the bowler." },{ over: "9.4", text: "drives through cover for a single." },{ over: "9.3", text: "cuts to the point fence." },{ over: "9.2", text: "pulls away for a boundary." },{ over: "9.1", text: "swings hard and survives a near miss." },{ over: "9.0", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 18,
    status: "LIVE",
    teamA: "Afghanistan",
    teamB: "South Africa",
    venue: "Sharjah Cricket Stadium, Sharjah",
    matchDate: "2026-08-05",
    score: "Afghanistan 201/5, South Africa 47/2",
    overs: "10.3 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Hashmatullah Shahidi", runs: 51, balls: 42, fours: 5, sixes: 0, strikeRate: 121.43 },
      { batsman: "Quinton de Kock", runs: 18, balls: 13, fours: 2, sixes: 0, strikeRate: 138.46 }
    ],
    commentary: [
      { over: "10.3", text: "defends back to the bowler." },{ over: "10.2", text: "drives through cover for a single." },{ over: "10.1", text: "cuts to the point fence." },{ over: "10.0", text: "pulls away for a boundary." },{ over: "9.9", text: "swings hard and survives a near miss." },{ over: "9.8", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 19,
    status: "LIVE",
    teamA: "Netherlands",
    teamB: "Bangladesh",
    venue: "Bellerive Oval, Hobart",
    matchDate: "2026-08-05",
    score: "Netherlands 243/7, Bangladesh 78/1",
    overs: "16.4 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Colin Ackermann", runs: 74, balls: 61, fours: 8, sixes: 2, strikeRate: 121.31 },
      { batsman: "Shakib Al Hasan", runs: 31, balls: 29, fours: 3, sixes: 0, strikeRate: 106.90 }
    ],
    commentary: [
      { over: "16.4", text: "defends back to the bowler." },{ over: "16.3", text: "drives through cover for a single." },{ over: "16.2", text: "cuts to the point fence." },{ over: "16.1", text: "pulls away for a boundary." },{ over: "15.10", text: "swings hard and survives a near miss." },{ over: "15.9", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 20,
    status: "LIVE",
    teamA: "Ireland",
    teamB: "West Indies",
    venue: "Melbourne Cricket Ground, Melbourne",
    matchDate: "2026-08-05",
    score: "Ireland 226/6, West Indies 110/3",
    overs: "22.1 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Paul Stirling", runs: 63, balls: 54, fours: 7, sixes: 0, strikeRate: 116.67 },
      { batsman: "Nicholas Pooran", runs: 49, balls: 33, fours: 5, sixes: 2, strikeRate: 148.48 }
    ],
    commentary: [
      { over: "22.1", text: "defends back to the bowler." },{ over: "22.0", text: "drives through cover for a single." },{ over: "21.9", text: "cuts to the point fence." },{ over: "21.8", text: "pulls away for a boundary." },{ over: "21.7", text: "swings hard and survives a near miss." },{ over: "21.6", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 21,
    status: "LIVE",
    teamA: "Pakistan",
    teamB: "Australia",
    venue: "Adelaide Oval, Adelaide",
    matchDate: "2026-08-05",
    score: "Pakistan 188/8, Australia 89/2",
    overs: "18.2 / 50",
    result: "Match in progress",
    scorecard: [
      { batsman: "Shaheen Afridi", runs: 25, balls: 18, fours: 2, sixes: 0, strikeRate: 138.89 },
      { batsman: "Travis Head", runs: 38, balls: 29, fours: 3, sixes: 1, strikeRate: 131.03 }
    ],
    commentary: [
      { over: "18.2", text: "defends back to the bowler." },{ over: "18.1", text: "drives through cover for a single." },{ over: "18.0", text: "cuts to the point fence." },{ over: "17.9", text: "pulls away for a boundary." },{ over: "17.8", text: "swings hard and survives a near miss." },{ over: "17.7", text: "takes a quick single to deep mid-wicket." }
    ]
  },
  {
    id: 22,
    status: "UPCOMING",
    teamA: "India",
    teamB: "South Africa",
    venue: "Wankhede Stadium, Mumbai",
    matchDate: "2026-08-10",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 23,
    status: "UPCOMING",
    teamA: "Australia",
    teamB: "England",
    venue: "Perth Stadium, Perth",
    matchDate: "2026-08-11",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 24,
    status: "UPCOMING",
    teamA: "Pakistan",
    teamB: "New Zealand",
    venue: "Dubai International Stadium, Dubai",
    matchDate: "2026-08-12",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 25,
    status: "UPCOMING",
    teamA: "Sri Lanka",
    teamB: "Afghanistan",
    venue: "Singh Sabha Grounds, Chandigarh",
    matchDate: "2026-08-13",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 26,
    status: "UPCOMING",
    teamA: "West Indies",
    teamB: "Zimbabwe",
    venue: "Providence Stadium, Guyana",
    matchDate: "2026-08-13",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 27,
    status: "UPCOMING",
    teamA: "Bangladesh",
    teamB: "Ireland",
    venue: "Sher-e-Bangla National Stadium, Dhaka",
    matchDate: "2026-08-14",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 28,
    status: "UPCOMING",
    teamA: "Netherlands",
    teamB: "Scotland",
    venue: "The Oval, London",
    matchDate: "2026-08-15",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 29,
    status: "UPCOMING",
    teamA: "USA",
    teamB: "Canada",
    venue: "Grand Prairie Stadium, Canada",
    matchDate: "2026-08-16",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 30,
    status: "UPCOMING",
    teamA: "Oman",
    teamB: "Nepal",
    venue: "Malik Al Nasir Stadium, Muscat",
    matchDate: "2026-08-16",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 31,
    status: "UPCOMING",
    teamA: "UAE",
    teamB: "Namibia",
    venue: "Zayed Cricket Stadium, Abu Dhabi",
    matchDate: "2026-08-17",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 32,
    status: "UPCOMING",
    teamA: "India",
    teamB: "Australia",
    venue: "Eden Gardens, Kolkata",
    matchDate: "2026-08-18",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 33,
    status: "UPCOMING",
    teamA: "South Africa",
    teamB: "Pakistan",
    venue: "Moses Mabhida Stadium, Durban",
    matchDate: "2026-08-18",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 34,
    status: "UPCOMING",
    teamA: "England",
    teamB: "Sri Lanka",
    venue: "Trent Bridge, Nottingham",
    matchDate: "2026-08-19",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 35,
    status: "UPCOMING",
    teamA: "West Indies",
    teamB: "New Zealand",
    venue: "Queen's Park Oval, Trinidad",
    matchDate: "2026-08-20",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 36,
    status: "UPCOMING",
    teamA: "Bangladesh",
    teamB: "Afghanistan",
    venue: "Sher-e-Bangla National Stadium, Dhaka",
    matchDate: "2026-08-20",
    score: "Yet to begin",
    overs: "0.0 / 50",
    result: "Scheduled",
    scorecard: [],
    commentary: [
      { over: "0.0", text: "Teams are finalising their lineups ahead of the match." }
    ]
  },
  {
    id: 37,
    status: "COMPLETED",
    teamA: "India",
    teamB: "Sri Lanka",
    venue: "Chinnaswamy Stadium, Bangalore",
    matchDate: "2026-07-28",
    score: "India 304/8, Sri Lanka 285/9",
    overs: "50.0 / 50",
    result: "India won by 19 runs",
    scorecard: [
      { batsman: "Shubman Gill", runs: 94, balls: 80, fours: 10, sixes: 1, strikeRate: 117.50 },
      { batsman: "Charith Asalanka", runs: 88, balls: 74, fours: 8, sixes: 0, strikeRate: 118.92 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 38,
    status: "COMPLETED",
    teamA: "Australia",
    teamB: "West Indies",
    venue: "Adelaide Oval, Adelaide",
    matchDate: "2026-07-29",
    score: "Australia 256/7, West Indies 201/10",
    overs: "45.3 / 50",
    result: "Australia won by 55 runs",
    scorecard: [
      { batsman: "Mitchell Marsh", runs: 77, balls: 62, fours: 7, sixes: 2, strikeRate: 124.19 },
      { batsman: "Rovman Powell", runs: 47, balls: 39, fours: 4, sixes: 1, strikeRate: 120.51 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 39,
    status: "COMPLETED",
    teamA: "England",
    teamB: "Pakistan",
    venue: "Ageas Bowl, Southampton",
    matchDate: "2026-07-30",
    score: "England 212/9, Pakistan 217/5",
    overs: "48.1 / 50",
    result: "Pakistan won by 5 wickets",
    scorecard: [
      { batsman: "Ben Stokes", runs: 56, balls: 48, fours: 4, sixes: 1, strikeRate: 116.67 },
      { batsman: "Babar Azam", runs: 82, balls: 72, fours: 9, sixes: 0, strikeRate: 113.89 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 40,
    status: "COMPLETED",
    teamA: "South Africa",
    teamB: "New Zealand",
    venue: "Centurion Park, Pretoria",
    matchDate: "2026-07-31",
    score: "South Africa 231/6, New Zealand 229/10",
    overs: "49.5 / 50",
    result: "South Africa won by 1 wicket",
    scorecard: [
      { batsman: "Aiden Markram", runs: 73, balls: 69, fours: 6, sixes: 1, strikeRate: 105.80 },
      { batsman: "Kane Williamson", runs: 68, balls: 61, fours: 7, sixes: 0, strikeRate: 111.48 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 41,
    status: "COMPLETED",
    teamA: "Bangladesh",
    teamB: "Sri Lanka",
    venue: "Eden Gardens, Kolkata",
    matchDate: "2026-08-01",
    score: "Bangladesh 198/7, Sri Lanka 183/10",
    overs: "47.4 / 50",
    result: "Bangladesh won by 15 runs",
    scorecard: [
      { batsman: "Shakib Al Hasan", runs: 62, balls: 53, fours: 4, sixes: 1, strikeRate: 117.00 },
      { batsman: "Pathum Nissanka", runs: 51, balls: 45, fours: 5, sixes: 0, strikeRate: 113.33 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 42,
    status: "COMPLETED",
    teamA: "West Indies",
    teamB: "Afghanistan",
    venue: "Sabina Park, Kingston",
    matchDate: "2026-08-02",
    score: "West Indies 276/9, Afghanistan 260/10",
    overs: "50.0 / 50",
    result: "West Indies won by 16 runs",
    scorecard: [
      { batsman: "Shai Hope", runs: 78, balls: 83, fours: 9, sixes: 0, strikeRate: 93.98 },
      { batsman: "Rahmanullah Gurbaz", runs: 94, balls: 79, fours: 8, sixes: 1, strikeRate: 118.99 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 43,
    status: "COMPLETED",
    teamA: "Netherlands",
    teamB: "Canada",
    venue: "Hagley Oval, Christchurch",
    matchDate: "2026-08-03",
    score: "Netherlands 211/8, Canada 212/6",
    overs: "49.2 / 50",
    result: "Canada won by 4 wickets",
    scorecard: [
      { batsman: "Aaron Johnson", runs: 68, balls: 58, fours: 6, sixes: 1, strikeRate: 117.24 },
      { batsman: "Bas de Leede", runs: 55, balls: 47, fours: 4, sixes: 2, strikeRate: 117.02 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 44,
    status: "COMPLETED",
    teamA: "Scotland",
    teamB: "USA",
    venue: "Lord's, London",
    matchDate: "2026-08-04",
    score: "Scotland 186/9, USA 189/7",
    overs: "48.3 / 50",
    result: "USA won by 3 wickets",
    scorecard: [
      { batsman: "Kane Williamson", runs: 0, balls: 0, fours: 0, sixes: 0, strikeRate: 0 },
      { batsman: "Steven Taylor", runs: 74, balls: 60, fours: 5, sixes: 2, strikeRate: 123.33 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 45,
    status: "COMPLETED",
    teamA: "India",
    teamB: "Bangladesh",
    venue: "M Chinnaswamy Stadium, Bangalore",
    matchDate: "2026-08-03",
    score: "India 310/6, Bangladesh 309/9",
    overs: "50.0 / 50",
    result: "India won by 1 run",
    scorecard: [
      { batsman: "Virat Kohli", runs: 102, balls: 93, fours: 8, sixes: 1, strikeRate: 109.68 },
      { batsman: "Shakib Al Hasan", runs: 91, balls: 82, fours: 7, sixes: 0, strikeRate: 110.98 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 46,
    status: "COMPLETED",
    teamA: "Pakistan",
    teamB: "Ireland",
    venue: "Gaddafi Stadium, Lahore",
    matchDate: "2026-08-02",
    score: "Pakistan 234/9, Ireland 229/10",
    overs: "49.1 / 50",
    result: "Pakistan won by 5 runs",
    scorecard: [
      { batsman: "Babar Azam", runs: 89, balls: 100, fours: 7, sixes: 0, strikeRate: 89.00 },
      { batsman: "Paul Stirling", runs: 68, balls: 74, fours: 5, sixes: 1, strikeRate: 91.89 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 47,
    status: "COMPLETED",
    teamA: "Australia",
    teamB: "New Zealand",
    venue: "Sydney Cricket Ground, Sydney",
    matchDate: "2026-08-01",
    score: "Australia 198/7, New Zealand 201/6",
    overs: "48.0 / 50",
    result: "New Zealand won by 4 wickets",
    scorecard: [
      { batsman: "Glenn Maxwell", runs: 56, balls: 43, fours: 5, sixes: 1, strikeRate: 130.23 },
      { batsman: "Daryl Mitchell", runs: 72, balls: 61, fours: 8, sixes: 0, strikeRate: 118.03 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 48,
    status: "COMPLETED",
    teamA: "South Africa",
    teamB: "England",
    venue: "Wanderers Stadium, Johannesburg",
    matchDate: "2026-07-31",
    score: "South Africa 255/8, England 251/9",
    overs: "50.0 / 50",
    result: "South Africa won by 4 runs",
    scorecard: [
      { batsman: "Heinrich Klaasen", runs: 67, balls: 52, fours: 6, sixes: 2, strikeRate: 128.85 },
      { batsman: "Jos Buttler", runs: 83, balls: 75, fours: 8, sixes: 1, strikeRate: 110.67 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },{ over: "49.5", text: "hits a delightful cover drive for four." },{ over: "49.0", text: "edges to slip and the catch is taken." },{ over: "48.5", text: "nails a yorker to bowl the batter." },{ over: "48.0", text: "pulls the short ball for another six." },{ over: "47.5", text: "blocks a good length ball out of the rough." },{ over: "47.0", text: "scores two quick singles to keep the run rate moving." },{ over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 49,
    status: "COMPLETED",
    teamA: "Sri Lanka",
    teamB: "Zimbabwe",
    venue: "Pallekele Stadium, Kandy",
    matchDate: "2026-07-30",
    score: "Sri Lanka 242/6, Zimbabwe 221/10",
    overs: "48.5 / 50",
    result: "Sri Lanka won by 21 runs",
    scorecard: [
      { batsman: "Kusal Mendis", runs: 84, balls: 70, fours: 8, sixes: 0, strikeRate: 120.00 },
      { batsman: "Sikandar Raza", runs: 68, balls: 59, fours: 5, sixes: 2, strikeRate: 115.25 }
    ],
    commentary: [
      { over: "50.0", text: "takes a big partnership through the middle overs." },
      { over: "49.5", text: "hits a delightful cover drive for four." },
      { over: "49.0", text: "edges to slip and the catch is taken." },
      { over: "48.5", text: "nails a yorker to bowl the batter." },
      { over: "48.0", text: "pulls the short ball for another six." },
      { over: "47.5", text: "blocks a good length ball out of the rough." },
      { over: "47.0", text: "scores two quick singles to keep the run rate moving." },
      { over: "46.5", text: "secures the wicket with a superb catch at deep square leg." }
    ]
  },
  {
    id: 50,
    status: "COMPLETED",
    teamA: "Netherlands",
    teamB: "United Arab Emirates",
    venue: "Hagley Oval, Christchurch",
    matchDate: "2026-07-29",
    score: "Netherlands 203/7, UAE 198/10",
    overs: "49.3 / 50",
    result: "Netherlands won by 5 runs",
    scorecard: [
      { batsman: "Max O'Dowd", runs: 59, balls: 46, fours: 4, sixes: 2, strikeRate: 128.26 },
      { batsman: "Muhammad Waseem", runs: 61, balls: 51, fours: 7, sixes: 0, strikeRate: 119.61 }
    ],
    commentary: [
      { over: "49.3", text: "A nervy final over closes the match in favour of the Netherlands." },
      { over: "48.5", text: "UAE fight back with a strong partnership but fall short." }
    ]
  }
];
