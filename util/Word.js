class Word {
  constructor(wrd) {
    this.word = wrd;
  }

  get getWord() {
    return this.word;
  }

  setWord(wrd) {
    this.word = wrd;
  }
}

module.exports = Word;
