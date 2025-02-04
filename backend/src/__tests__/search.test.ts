import request from "supertest";
import app from "../app";
import axios from "axios";
import JohnQueryWikiFixture from "./fixtures/john-query-wiki.json";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/api/search", () => {
  it("should return 400 if name is not provided", async () => {
    const response = await request(app).get("/api/search");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "term is required" });
  });

  it("should return 200 with the name provided", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: JohnQueryWikiFixture,
    });
    const response = await request(app).get("/api/search?term=John");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([
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
