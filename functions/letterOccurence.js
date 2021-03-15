//This function finds the number of occurrence of a specified alphabet in a string/word

function findAlphabetOcurrence(word, alphabet) {
  //first we check if the alphabet is present in the first place
  if (word.includes(alphabet) === true) {
    // console.log("alphabet is present in word");
    //since alphabet is present we can go further to determine the number of times
    let numberOfAppearance = 0;
    for (
      individualCharacterCheck = 0;
      individualCharacterCheck < word.length;
      individualCharacterCheck++
    ) {
      if (word.charAt(individualCharacterCheck) === alphabet) {
        numberOfAppearance++;
      }
    }
    return "Alphabet is present " + numberOfAppearance + " times";
  } else {
    return "Alphabet is not present in word";
  }
}
const occurences = findAlphabetOcurrence("hippopotamus", "s");
console.log(occurences);
