import { Request, Response } from "express";
import {
  fetchSummaryFromWikipedia,
  fetchWikidataInfo,
} from "../services/wiki-service";

export async function getPersona(req: Request, res: Response) {
  const { name } = req.query;

  if (!name) {
    res.status(400).json({ error: "name is required" });
    return;
  }

  try {
    const wikiDetails = await fetchSummaryFromWikipedia(name as string);

    if (!wikiDetails) {
      res.status(404).json({ error: "Entity not found on Wikipedia" });
      return;
    }

    let birthDate = null;
    let deathDate = null;

    if (wikiDetails.wikidataId) {
      const wikiDataInfo = await fetchWikidataInfo(wikiDetails.wikidataId);
      birthDate = wikiDataInfo.birthDate;
      deathDate = wikiDataInfo.deathDate;
    }

    res.json({
      name: wikiDetails.name,
      description: wikiDetails.description,
      birthDate,
      deathDate,
      imageUrl: wikiDetails.imageUrl,
    });
  } catch (error) {
    console.error("Erro ao buscar detalhes da entidade:", error);
    res.status(500).json({ message: "Erro ao processar a requisição." });
  }
}
