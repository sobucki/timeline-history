import { Request, Response } from "express";
import { searchService } from "../services/search-service";

export async function searchTerm(req: Request, res: Response) {
  const { term } = req.query;

  if (!term) {
    res.status(400).json({ error: "term is required" });
    return;
  }

  const result = await searchService(term as string);

  res.json(result);
}
