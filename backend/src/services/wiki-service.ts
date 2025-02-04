import axios from "axios";

export async function fetchSummaryFromWikipedia(name: string) {
  try {
    const response = await axios.get(
      `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(
        name
      )}`
    );

    // console.log(response);

    return {
      name: response.data.title,
      description: response.data.extract,
      wikidataId: response.data.wikibase_item || null,
    };
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch summary from Wikipedia");
  }
}
