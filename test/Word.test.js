const Word = require("../util/Word");

describe("Word", () => {
  describe("Success", () => {
    it("Should createa new word object with the word set to argument", () => {
      const testWord = new Word("test");
      expect(testWord).toEqual({ word: "test" });
    });
  });
  describe("getWord", () => {
    it("Should return word", () => {
      const testWord = new Word("test");
      expect(testWord.getWord).toBe("test");
    });
  });
  describe("setWord", () => {
    it("Should return word", () => {
      const testWord = new Word("test");
      expect(testWord.setWord).toBe("test");
    });
  });
});
