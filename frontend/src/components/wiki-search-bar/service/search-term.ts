import { SearchItem } from "../types";

async function SearchTerm(term: string): Promise<SearchItem[]> {
  try {
    const response = await fetch(
      `http://localhost:3000/api/search?term=${encodeURIComponent(term)}`
    );
    if (!response.ok) {
      throw new Error("Erro ao buscar termo");
    }
    const data: SearchItem[] = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default SearchTerm;
