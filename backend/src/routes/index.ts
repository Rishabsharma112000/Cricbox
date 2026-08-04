import { Router } from "express";
import { getMatchById, getMatchCommentary, getMatches } from "../controllers/matchController";

const router = Router();

router.get("/matches", getMatches);
router.get("/matches/:id", getMatchById);
router.get("/matches/:id/commentary", getMatchCommentary);

export default router;
