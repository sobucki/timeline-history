import axios from "axios";

export async function searchService(term: string) {
  try {
    const searchURL = "https://en.wikipedia.org/w/api.php";
    const response = await axios.get(searchURL, {
      params: {
        action: "query",
        list: "search",
        srsearch: term,
        format: "json",
      },
    });

    const searchData = response.data;
    const results = searchData?.query?.search || [];

    if (results.length === 0) {
      return [];
    }

    const resultaData = results.map((result: any) => ({
      title: result.title,
      pageid: result.pageid,
    }));

    return resultaData;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch summary from Wikipedia");
  }
}
