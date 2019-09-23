const getMock = require("./__mocks__/getMock");
const MovieSearch = require("../movieSearch");

describe("MovieSearch", () => {
  describe("buildUrl", () => {
    it("should return an OMDB movie search URL using a movie name", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      const url = movie.buildUrl(name);

      expect(url).toEqual(`https://www.omdbapi.com/?t=${name}&apikey=trilogy`);
    });
  });

  describe("search", () => {
    it("should search the OMDB API for a given movie", () => {
      const movie = new MovieSearch();
      const name = "Rocky";

      expect(movie.search(name)).resolves.toEqual({ data: {} });
      expect(getMock).lastCalledWith(movie.buildUrl(name));
    });
  });
});
