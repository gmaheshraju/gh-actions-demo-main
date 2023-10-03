const request = require("supertest");
const { app } = require("../api/app");

describe("/hello", () => {
  it("returns `Hello World!`", async () => {
    const data = await request(app).get("/hello");
    expect(data.statusCode).toBe(200);
  });
});
