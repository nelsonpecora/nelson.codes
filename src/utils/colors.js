import hashSum from 'hash-sum';

// These are all of the colors allowed for skills and experience.
const colors = [
  '#bbeaa6',
  '#e3c878',
  '#ed9a73',
  '#e688a1',
  '#c886e5',
  '#99d8d0',
  '#4baea0',
  '#f299ee',
  '#7189bf',
  '#4C69A9',
  '#DACC3E',
  '#E96E5D',
  '#F58A07',
  '#04724D'
];

// This is a hash of colors, so we don't use the different ones for the same
// thing.
let hash = {};


export default function random (input, prevInput) {
  const inputHash = hashSum(input);

  // If we've already generated a color, return it.
  if (hash[inputHash]) {
    return hash[inputHash];
  }

  // Otherwise, generate a color that's different than the one immediately
  // preceeding it.
  let color = colors[Math.floor(Math.random() * colors.length)];
  const prevColor = hash[hashSum(prevInput)];

  if (color === prevColor) {
    color = random(input, prevInput); // We just picked this color! pick another one
  }

  hash[hashSum(input)] = color;

  return color;
}
