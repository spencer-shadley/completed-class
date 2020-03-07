// Determine if a ransom letter can be produced for a desired sentence.

function canProduceRansomLetter(letters, sentence) {
  if (!Array.isArray(letters)) {
    return false;
  }

  const letterCounts = generateLetterCounts(letters);

  for (const letter of sentence) {
    if (letter === ' ') {
      continue;
    }
    if (hasAvailableLetter(letter, letterCounts)) {
      --letterCounts[letter];
    } else {
      return false;
    }
  }
  return true;
}

function hasAvailableLetter(letter, letterCounts) {
  const letterCount = letterCounts[letter];
  return letterCount > 0;
}

function generateLetterCounts(letters) {
  const letterCounts = {};
  for (const letter of letters) {
    if (letterCounts[letter]) {
      ++letterCounts[letter];
    } else {
      letterCounts[letter] = 1;
    }
  }
  return letterCounts;
}

class Test {
  constructor(lettersInput, sentenceInput, expectedResult, func) {
    this.lettersInput = lettersInput;
    this.sentenceInput = sentenceInput;
    this.expectedResult = expectedResult;
    this.actualResult = func(this.lettersInput, this.sentenceInput);
  }
}

let test1 = new Test(
  ['a'],
  'fish are delicious',
  false,
  canProduceRansomLetter
);

let test2 = new Test(['a', 'b', 'x'], 'x ba', true, canProduceRansomLetter);

console.table([test1, test2]);
