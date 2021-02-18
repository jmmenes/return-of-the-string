function yell(string) {
  return string + "!";
}

function getFirstCharacter(string) {
  return string[0];
}

function getLastCharacter(string) {
  return string[string.length - 1];
}

function getOneCharacter(string, number) {
  return string[number];
}

function getTwoCharacters(string, number1, number2) {
  return string[number1] + string[number2];
}

function makeCapitalized(string) {
  return string.toUpperCase();
}

function yellLouder(string) {
  return string.toUpperCase() + "!!!";
}

function getInitials(string) {
  return string[0] + "." + string.charAt(index) + ".";
}

// it takes in a parameter of type String representing a name and returns one string with
// the initials, each followed by a period. See the test for examples. Hint: the first
// name's initials are always in the same place, but since we don't know how long the
// first name will be, the second initial is harder. But! There's a method that will
// return to you the index at which a character is in a string (sort of the reverse
//   of square brackets, which give you the character at a given index), and the
//   second initial always comes near a very specific character... Good luck on
//   this one, it's a bit tough!

/********************************************************************
 * THIS CODE IS FOR INTERNAL USE ONLY. DON'T CHANGE ANYTHING BELOW! *
 ********************************************************************/

if (typeof yell === "undefined") {
  yell = undefined;
}

if (typeof getFirstCharacter === "undefined") {
  getFirstCharacter = undefined;
}

if (typeof getLastCharacter === "undefined") {
  getLastCharacter = undefined;
}

if (typeof getOneCharacter === "undefined") {
  getOneCharacter = undefined;
}

if (typeof getTwoCharacters === "undefined") {
  getTwoCharacters = undefined;
}

if (typeof makeCapitalized === "undefined") {
  makeCapitalized = undefined;
}

if (typeof yellLouder === "undefined") {
  yellLouder = undefined;
}

if (typeof getInitials === "undefined") {
  getInitials = undefined;
}

module.exports = {
  yell,
  getFirstCharacter,
  getLastCharacter,
  getOneCharacter,
  getTwoCharacters,
  makeCapitalized,
  yellLouder,
  getInitials,
};
