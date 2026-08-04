import { Match, matches } from "../data/matches";

export class MatchService {
  public getAllMatches(status?: string): Match[] {
    if (!status) {
      return matches;
    }

    return matches.filter((match) => match.status === status);
  }

  public getMatchDetails(id: number): { teams: string; score: string; status: Match["status"]; scorecard: Match["scorecard"] } | undefined {
    const match = matches.find((item) => item.id === id);

    if (!match) {
      return undefined;
    }

    return {
      teams: `${match.teamA} vs ${match.teamB}`,
      score: match.score,
      status: match.status,
      scorecard: match.scorecard
    };
  }

  public getMatchCommentary(id: number): Match["commentary"] | undefined {
    const match = matches.find((item) => item.id === id);

    if (!match) {
      return undefined;
    }

    return match.commentary;
  }
}
