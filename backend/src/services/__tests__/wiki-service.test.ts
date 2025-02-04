import { fetchSummaryFromWikipedia } from "../wiki-service";

describe("Wiki service tests", () => {
  it("should return a normalized data from Wikipedia", async () => {
    const result = await fetchSummaryFromWikipedia("Albert_Einstein");
    expect(result).toEqual({
      description:
        'Albert Einstein was a German-born theoretical physicist who is best known for developing the theory of relativity. Einstein also made important contributions to quantum mechanics. His mass–energy equivalence formula E = mc2, which arises from special relativity, has been called "the world\'s most famous equation". He received the 1921 Nobel Prize in Physics for his services to theoretical physics, and especially for his discovery of the law of the photoelectric effect.',
      name: "Albert Einstein",
      wikidataId: "Q937",
    });
  });
});
