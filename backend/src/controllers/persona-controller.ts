import { Request, Response } from "express";

export async function getPersona(req: Request, res: Response) {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({ error: "name is required" });
    return;
  }
}
