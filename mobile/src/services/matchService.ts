import axios from 'axios';

import type { CommentaryItem, Match, MatchStatus } from '../types';

const BASE_URL = 'http://192.168.1.38:3000';

export async function getMatches(status?: MatchStatus): Promise<Match[]> {
  const response = await axios.get<Match[]>(`${BASE_URL}/matches`, {
    params: status ? { status } : undefined,
  });

  return response.data;
}

export async function getMatchDetails(id: string): Promise<Match> {
  const response = await axios.get<Match>(`${BASE_URL}/matches/${id}`);

  return response.data;
}

export async function getCommentary(id: string): Promise<CommentaryItem[]> {
  const response = await axios.get<CommentaryItem[]>(`${BASE_URL}/matches/${id}/commentary`);

  return response.data;
}
