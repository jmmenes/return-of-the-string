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
  const i1 = string[0];
  const spaceIndex = string.indexOf(" ");
  const i2 = string[spaceIndex + 1];
  return i1 + "." + i2 + ".";

  // return string[0] + "." + string[string.indexOf(" ") + 1] + ".";
}

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
