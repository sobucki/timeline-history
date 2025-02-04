import request from "supertest";
import app from "../app";
import axios from "axios";
import Persona1SummaryFixture from "./fixtures/albert-einstein-summary.json";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("/api/persona", () => {
  it("should return 400 if name is not provided", async () => {
    const response = await request(app).get("/api/persona");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "name is required" });
  });

  it("should return 200 with the name provided", async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: Persona1SummaryFixture,
    });
    const response = await request(app).get(
      "/api/persona?name=Albert+Einstein"
    );
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      description:
        'Albert Einstein was a German-born theoretical physicist who is best known for developing the theory of relativity. Einstein also made important contributions to quantum mechanics. His mass–energy equivalence formula E = mc2, which arises from special relativity, has been called "the world\'s most famous equation". He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect.',
      name: "Albert Einstein",
      wikidataId: "Q937",
    });
  });
});
