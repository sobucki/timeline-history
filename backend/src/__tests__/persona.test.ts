import request from "supertest";
import app from "../app";

describe("/api/persona", () => {
  it("should return 400 if name is not provided", async () => {
    const response = await request(app).get("/api/persona");
    expect(response.status).toBe(400);
    expect(response.body).toEqual({ error: "name is required" });
  });
});
