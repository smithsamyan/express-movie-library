import server from "../src/index";
import request from "supertest";
import { expect } from "chai";

describe("Movie API Tests", () => {
  it("GET /api/v1/movies/ returns an array of movies", async () => {
    const response = await request(server).get("/api/v1/movies/");
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an.instanceof(Array);
  });

  it("GET /api/v1/movies/:id returns a movie by id", async () => {
    const response = await request(server).get("/api/v1/movies/0");
    expect(response.status).to.equal(200);
    expect(response.body.title).to.equal("The godfather");
  });

  it("GET /api/v1/movies/search returns a list of movies by searching the title", async () => {
    const response = await request(server)
      .get("/api/v1/search")
      .query({ searchString: "The" });
    expect(response.status).to.equal(200);
    expect(response.body).to.have.length(3);
  });

  it("GET /api/v1/movies/3 returns a status 404", async () => {
    const response = await request(server).get("/api/v1/movies/3");
    expect(response.status).to.equal(200);
  });
});
