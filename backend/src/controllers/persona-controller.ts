import { Request, Response } from "express";
import { fetchSummaryFromWikipedia } from "../services/wiki-service";

export async function getPersona(req: Request, res: Response) {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({ error: "name is required" });
    return;
  }

  const result = await fetchSummaryFromWikipedia(name as string);

  res.json({ ...result });
}
