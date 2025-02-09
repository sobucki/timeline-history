import axios from "axios";

export async function fetchSummaryFromWikipedia(name: string) {
  try {
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        name
      )}`
    );

    return {
      name: response.data.title,
      description: response.data.extract,
      wikidataId: response.data.wikibase_item || null,
      imageUrl: response.data.thumbnail?.source || null,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch summary from Wikipedia");
  }
}

export async function fetchWikidataInfo(wikidataId: string) {
  try {
    const response = await axios.get(
      `https://www.wikidata.org/wiki/Special:EntityData/${wikidataId}.json`
    );
    const entity = response.data.entities[wikidataId];

    const birthDate =
      entity.claims.P569?.[0]?.mainsnak?.datavalue?.value?.time || null;
    const deathDate =
      entity.claims.P570?.[0]?.mainsnak?.datavalue?.value?.time || null;

    return {
      birthDate: birthDate ? birthDate.replace("+", "").split("T")[0] : null,
      deathDate: deathDate ? deathDate.replace("+", "").split("T")[0] : null,
    };
  } catch (error) {
    console.error(`Error when search data on Wikidata ${wikidataId}:`, error);
    return { birthDate: null, deathDate: null };
  }
}
