import { Request, Response } from "express";
import { MatchService } from "../services/matchService";

const matchService = new MatchService();

const sendUnexpectedError = (res: Response, error: unknown): void => {
  console.error(error);
  res.status(500).json({ message: "Internal server error" });
};

export const getMatches = (req: Request, res: Response): void => {
  try {
    const status = typeof req.query.status === "string" ? req.query.status : undefined;
    const matches = matchService.getAllMatches(status);

    res.status(200).json(matches);
  } catch (error) {
    sendUnexpectedError(res, error);
  }
};

export const getMatchById = (req: Request, res: Response): void => {
  try {
    const matchId = Number(req.params.id);
    const match = matchService.getMatchDetails(matchId);

    if (!match) {
      res.status(404).json({ message: "Match not found" });
      return;
    }

    res.status(200).json(match);
  } catch (error) {
    sendUnexpectedError(res, error);
  }
};

export const getMatchCommentary = (req: Request, res: Response): void => {
  try {
    const matchId = Number(req.params.id);
    const commentary = matchService.getMatchCommentary(matchId);

    if (!commentary) {
      res.status(404).json({ message: "Match not found" });
      return;
    }

    res.status(200).json(commentary);
  } catch (error) {
    sendUnexpectedError(res, error);
  }
};
