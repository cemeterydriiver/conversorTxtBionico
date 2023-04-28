function detectBoldWords(text) {
    const words = text.split(' ');
    const boldWords = [];
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const boldWord = {};
  
      if (/^[a-zA-Z]+$/.test(word)) {
        const parts = [];
  
        for (let j = 0; j < word.length; j++) {
          const letter = word[j];
          const isUpper = letter === letter.toUpperCase();
  
          if (isUpper && j > 0) {
            parts.push(j);
          }
        }
  
        if (parts.length > 0) {
          parts.push(word.length);
          const ranges = [];
  
          for (let k = 0; k < parts.length; k++) {
            const start = k === 0 ? 0 : parts[k - 1];
            const end = parts[k];
            ranges.push({ start, end });
          }
  
          boldWord.word = word;
          boldWord.ranges = ranges;
          boldWords.push(boldWord);
        }
      }
    }
  
    return boldWords;
  }
  