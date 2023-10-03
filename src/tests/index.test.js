const request = require("supertest");
const { app } = require("../api/app");

describe("/hello", () => {
  it("dummy test", async () => {
    expect(true).toBe(true);
  });
});
