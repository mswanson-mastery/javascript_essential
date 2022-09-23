/**
 * Create a class for the Backpack object type.
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);

const workPack = new Backpack (
  'work pack', 
  30,
  'brown', 
  4, 
  20,
  20,
  false
);

const workPack_new = new Backpack (
  'work pack', 
  30,
  'brown', 
  4, 
  20,
  20,
 false
)
console.log(workPack);
console.log(workPack_new);
