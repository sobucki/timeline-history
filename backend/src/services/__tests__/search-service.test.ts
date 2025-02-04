import { searchService } from "../search-service";
import axios from "axios";
import JohnQueryWikiFixture from "../../__tests__/fixtures/john-query-wiki.json";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Search service testes", () => {
  it("Should return a list of results from wikipedia", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: JohnQueryWikiFixture,
    });
    const result = await searchService("John");
    expect(result).toEqual([
      { pageid: 19323107, title: "John" },
      { pageid: 5119376, title: "John F. Kennedy" },
      { pageid: 345802, title: "John Cena" },
      { pageid: 16125, title: "John the Baptist" },
      { pageid: 15852, title: "John Lennon" },
      { pageid: 5052197, title: "Elton John" },
      { pageid: 10410626, title: "John Adams" },
      { pageid: 8055956, title: "Knights Hospitaller" },
      { pageid: 5122699, title: "John Kerry" },
      { pageid: 572593, title: "John Sweeney" },
    ]);
  });
});
