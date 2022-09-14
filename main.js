/**
 *
 * @Genius
 *
 * let's use iterators in maps.... Just dummy project lol..
 */

const prompt = require("prompt-sync")();

/**
 * CREATING LISTS OF MAPS WITH MULTI-DIMENTIONAL ARRAY.
 */
let userInfoAge = [
  ["Genius", 18],
  ["Kingsley", 18],
  ["GeniusKing", 19],
  ["GeniusBoss", 20],
];

let userInfoMapping = new Map(userInfoAge);

let users = userInfoMapping[Symbol.iterator]();

while (true) {
  let results = users.next();
  if (results.done) break;
  console.log(results.value);
}
